
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const ClubForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    institutionName: "",
    institutionType: "",
    contactName: "",
    contactEmail: "",
    country: "",
    city: "",
    membersEstimate: "",
    reason: "",
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
      title: "Club Application Submitted",
      description: "Thank you for your interest in starting a UNYCC club. Our team will review your application and contact you soon.",
    });
    setFormData({
      institutionName: "",
      institutionType: "",
      contactName: "",
      contactEmail: "",
      country: "",
      city: "",
      membersEstimate: "",
      reason: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="institutionName">School/Institution Name</Label>
        <Input
          id="institutionName"
          name="institutionName"
          value={formData.institutionName}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <Label htmlFor="institutionType">Institution Type</Label>
        <Select 
          onValueChange={(value) => handleSelectChange("institutionType", value)}
          value={formData.institutionType}
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
        <Label htmlFor="membersEstimate">Estimated Number of Initial Members</Label>
        <Input
          id="membersEstimate"
          name="membersEstimate"
          type="number"
          value={formData.membersEstimate}
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
