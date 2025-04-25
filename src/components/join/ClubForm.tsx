import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ClubForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    institution_name: "",
    institution_type: "",
    contact_name: "",
    contact_email: "",
    country: "",
    city: "",
    members_estimate: "",
    reason: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('clubs')
        .insert([{
          ...formData,
          members_estimate: parseInt(formData.members_estimate)
        }]);

      if (error) throw error;

      toast({
        title: "Club Application Submitted",
        description: "Thank you for your interest in starting a UNYCC club. Our team will review your application and contact you soon.",
      });

      setFormData({
        institution_name: "",
        institution_type: "",
        contact_name: "",
        contact_email: "",
        country: "",
        city: "",
        members_estimate: "",
        reason: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your application. Please try again.",
        variant: "destructive",
      });
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="institution_name">School/Institution Name</Label>
        <Input
          id="institution_name"
          name="institution_name"
          value={formData.institution_name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <Label htmlFor="institution_type">Institution Type</Label>
        <Select 
          onValueChange={(value) => handleSelectChange("institution_type", value)}
          value={formData.institution_type}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select institution type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="highschool">High School</SelectItem>
            <SelectItem value="university">University/College</SelectItem>
            <SelectItem value="community">Community Organization</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="contact_name">Contact Person Name</Label>
          <Input
            id="contact_name"
            name="contact_name"
            value={formData.contact_name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="contact_email">Contact Email</Label>
          <Input
            id="contact_email"
            name="contact_email"
            type="email"
            value={formData.contact_email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="country">Country</Label>
          <Select 
            onValueChange={(value) => handleSelectChange("country", value)}
            value={formData.country}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="ca">Canada</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="au">Australia</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="city">City</Label>
          <Input
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div>
        <Label htmlFor="members_estimate">Estimated Number of Initial Members</Label>
        <Input
          id="members_estimate"
          name="members_estimate"
          type="number"
          value={formData.members_estimate}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <Label htmlFor="reason">Why do you want to start a UNYCC club?</Label>
        <Textarea
          id="reason"
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          rows={4}
          required
        />
      </div>

      <Button type="submit" className="w-full">Submit Club Application</Button>
    </form>
  );
};

export default ClubForm;
