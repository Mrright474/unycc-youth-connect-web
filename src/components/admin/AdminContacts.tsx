import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { format } from 'date-fns';

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string;
}

export default function AdminContacts() {
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [filteredContacts, setFilteredContacts] = useState<ContactSubmission[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContacts();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filtered = contacts.filter(
        (contact) =>
          contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          contact.subject.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredContacts(filtered);
    } else {
      setFilteredContacts(contacts);
    }
  }, [searchTerm, contacts]);

  const handleExport = () => {
    const exportData = formatDataForExport(filteredContacts, ['id']);
    exportToCSV(exportData, 'contact_submissions');
    
    toast({
      title: 'Success',
      description: 'Contact submissions exported successfully',
    });
  };

  const fetchContacts = async () => {
    try {
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setContacts(data || []);
      setFilteredContacts(data || []);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Search by name, email, or subject..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Message</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredContacts.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center text-muted-foreground">
                  No contact submissions found
                </TableCell>
              </TableRow>
            ) : (
              filteredContacts.map((contact) => (
                <TableRow key={contact.id}>
                  <TableCell className="font-medium">{contact.name}</TableCell>
                  <TableCell>{contact.email}</TableCell>
                  <TableCell>{contact.subject}</TableCell>
                  <TableCell className="max-w-xs truncate">{contact.message}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {format(new Date(contact.created_at), 'MMM dd, yyyy')}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <div className="text-sm text-muted-foreground">
        Total submissions: {filteredContacts.length}
      </div>
    </div>
  );
}
