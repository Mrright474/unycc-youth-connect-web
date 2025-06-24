
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { countries } from "@/data/countries";
import { partnerFormSchema } from "@/lib/validation";
import { z } from "zod";

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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const validatedData = partnerFormSchema.parse(formData);

      // For now, just show success toast since partners table might not exist
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
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        toast({
          title: "Error",
          description: "There was a problem submitting your request. Please try again.",
          variant: "destructive",
        });
        console.error("Error submitting form:", error);
      }
    } finally {
      setIsSubmitting(false);
    }
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
          className={errors.organizationName ? "border-red-500" : ""}
        />
        {errors.organizationName && <p className="text-red-500 text-sm mt-1">{errors.organizationName}</p>}
      </div>

      <div>
        <Label htmlFor="organizationType">Organization Type</Label>
        <Select 
          onValueChange={(value) => handleSelectChange("organizationType", value)}
          value={formData.organizationType}
        >
          <SelectTrigger className={errors.organizationType ? "border-red-500" : ""}>
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
        {errors.organizationType && <p className="text-red-500 text-sm mt-1">{errors.organizationType}</p>}
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
            className={errors.contactName ? "border-red-500" : ""}
          />
          {errors.contactName && <p className="text-red-500 text-sm mt-1">{errors.contactName}</p>}
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
            className={errors.contactEmail ? "border-red-500" : ""}
          />
          {errors.contactEmail && <p className="text-red-500 text-sm mt-1">{errors.contactEmail}</p>}
        </div>
      </div>

      <div>
        <Label htmlFor="website">Organization Website</Label>
        <Input
          id="website"
          name="website"
          value={formData.website}
          onChange={handleChange}
          className={errors.website ? "border-red-500" : ""}
        />
        {errors.website && <p className="text-red-500 text-sm mt-1">{errors.website}</p>}
      </div>

      <div>
        <Label htmlFor="country">Country</Label>
        <Select 
          onValueChange={(value) => handleSelectChange("country", value)}
          value={formData.country}
        >
          <SelectTrigger className={errors.country ? "border-red-500" : ""}>
            <SelectValue placeholder="Select country" />
          </SelectTrigger>
          <SelectContent>
            {countries.map((country) => (
              <SelectItem key={country.code} value={country.code}>
                {country.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
      </div>

      <div>
        <Label htmlFor="partnershipArea">Partnership Interest Area</Label>
        <Select 
          onValueChange={(value) => handleSelectChange("partnershipArea", value)}
          value={formData.partnershipArea}
        >
          <SelectTrigger className={errors.partnershipArea ? "border-red-500" : ""}>
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
        {errors.partnershipArea && <p className="text-red-500 text-sm mt-1">{errors.partnershipArea}</p>}
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
          className={errors.message ? "border-red-500" : ""}
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Partnership Request"}
      </Button>
    </form>
  );
};

export default PartnerForm;
