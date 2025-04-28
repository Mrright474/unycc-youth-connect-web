import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { countries } from "@/data/countries";
import { sdgs } from "@/data/sdgs";
import Map from '@/components/Map';

const IndividualForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    country: "",
    age_group: "",
    interest: "",
    heard_from: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        .from('members')
        .insert([formData]);

      if (error) throw error;

      toast({
        title: "Application Submitted",
        description: "Thank you for your interest in joining UNYCC. We'll be in touch soon!",
      });

      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        country: "",
        age_group: "",
        interest: "",
        heard_from: "",
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
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <Label htmlFor="country">Country</Label>
        <Select 
          onValueChange={(value) => handleSelectChange("country", value)}
          value={formData.country}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select your country" />
          </SelectTrigger>
          <SelectContent>
            {countries.map((country) => (
              <SelectItem key={country.code} value={country.code}>
                {country.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="mt-6">
        <Map selectedCountry={formData.country} />
      </div>

      <div>
        <Label>Age Group</Label>
        <RadioGroup 
          onValueChange={(value) => handleSelectChange("age_group", value)}
          value={formData.age_group}
          className="flex flex-col space-y-1 mt-2"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="under18" id="under18" />
            <Label htmlFor="under18">Under 18</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="18-24" id="18-24" />
            <Label htmlFor="18-24">18-24</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="25-34" id="25-34" />
            <Label htmlFor="25-34">25-34</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="35+" id="35+" />
            <Label htmlFor="35+">35+</Label>
          </div>
        </RadioGroup>
      </div>

      <div>
        <Label htmlFor="interest">Areas of Interest</Label>
        <Select 
          onValueChange={(value) => handleSelectChange("interest", value)}
          value={formData.interest}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select your primary interest" />
          </SelectTrigger>
          <SelectContent>
            {sdgs.map((sdg) => (
              <SelectItem key={sdg.number} value={sdg.code}>
                {sdg.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="heardFrom">How did you hear about UNYCC?</Label>
        <Input
          id="heardFrom"
          name="heard_from"
          value={formData.heard_from}
          onChange={handleChange}
        />
      </div>

      <Button type="submit" className="w-full">Submit Application</Button>
    </form>
  );
};

export default IndividualForm;
