
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { clubFormSchema } from "@/lib/validation";
import { z } from "zod";

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
      const validatedData = clubFormSchema.parse({
        ...formData,
        members_estimate: parseInt(formData.members_estimate)
      });

      const { error } = await supabase
        .from('clubs')
        .insert([validatedData]);

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
          description: "There was a problem submitting your application. Please try again.",
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
        <Label htmlFor="institution_name">School/Institution Name</Label>
        <Input
          id="institution_name"
          name="institution_name"
          value={formData.institution_name}
          onChange={handleChange}
          required
          className={errors.institution_name ? "border-red-500" : ""}
        />
        {errors.institution_name && <p className="text-red-500 text-sm mt-1">{errors.institution_name}</p>}
      </div>

      <div>
        <Label htmlFor="institution_type">Institution Type</Label>
        <Select 
          onValueChange={(value) => handleSelectChange("institution_type", value)}
          value={formData.institution_type}
        >
          <SelectTrigger className={errors.institution_type ? "border-red-500" : ""}>
            <SelectValue placeholder="Select institution type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="highschool">High School</SelectItem>
            <SelectItem value="university">University/College</SelectItem>
            <SelectItem value="community">Community Organization</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
        {errors.institution_type && <p className="text-red-500 text-sm mt-1">{errors.institution_type}</p>}
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
            className={errors.contact_name ? "border-red-500" : ""}
          />
          {errors.contact_name && <p className="text-red-500 text-sm mt-1">{errors.contact_name}</p>}
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
            className={errors.contact_email ? "border-red-500" : ""}
          />
          {errors.contact_email && <p className="text-red-500 text-sm mt-1">{errors.contact_email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="ca">Canada</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="au">Australia</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
        </div>
        <div>
          <Label htmlFor="city">City</Label>
          <Input
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            className={errors.city ? "border-red-500" : ""}
          />
          {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
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
          className={errors.members_estimate ? "border-red-500" : ""}
        />
        {errors.members_estimate && <p className="text-red-500 text-sm mt-1">{errors.members_estimate}</p>}
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
          className={errors.reason ? "border-red-500" : ""}
        />
        {errors.reason && <p className="text-red-500 text-sm mt-1">{errors.reason}</p>}
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Club Application"}
      </Button>
    </form>
  );
};

export default ClubForm;
