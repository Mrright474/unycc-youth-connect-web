
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const PartnerForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    organizationName: "",
    organizationType: "",
    contactName: "",
    contactEmail: "",
    website: "",
    country: "",
    partnershipArea: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Partnership Request Submitted",
      description: "Thank you for your interest in partnering with UNYCC. Our team will review your information and contact you to discuss potential collaboration.",
    });
    setFormData({
      organizationName: "",
      organizationType: "",
      contactName: "",
      contactEmail: "",
      website: "",
      country: "",
      partnershipArea: "",
      message: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="organizationName">Organization Name</Label>
        <Input
          id="organizationName"
          name="organizationName"
          value={formData.organizationName}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <Label htmlFor="organizationType">Organization Type</Label>
        <Select 
          onValueChange={(value) => handleSelectChange("organizationType", value)}
          value={formData.organizationType}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select organization type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ngo">Non-Profit/NGO</SelectItem>
            <SelectItem value="education">Educational Institution</SelectItem>
            <SelectItem value="government">Government Agency</SelectItem>
            <SelectItem value="business">Business/Corporation</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="contactName">Contact Person Name</Label>
          <Input
            id="contactName"
            name="contactName"
            value={formData.contactName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="contactEmail">Contact Email</Label>
          <Input
            id="contactEmail"
            name="contactEmail"
            type="email"
            value={formData.contactEmail}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div>
        <Label htmlFor="website">Organization Website</Label>
        <Input
          id="website"
          name="website"
          value={formData.website}
          onChange={handleChange}
        />
      </div>

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
            <SelectItem value="global">Global Organization</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="partnershipArea">Partnership Interest Area</Label>
        <Select 
          onValueChange={(value) => handleSelectChange("partnershipArea", value)}
          value={formData.partnershipArea}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select primary interest area" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="funding">Program Funding</SelectItem>
            <SelectItem value="technical">Technical Support</SelectItem>
            <SelectItem value="mentorship">Mentorship</SelectItem>
            <SelectItem value="collaboration">Joint Projects</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="message">How would you like to partner with UNYCC?</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          required
        />
      </div>

      <Button type="submit" className="w-full">Submit Partnership Request</Button>
    </form>
  );
};

export default PartnerForm;
