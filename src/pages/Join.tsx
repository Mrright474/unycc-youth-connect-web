
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { UserPlus, Building, School, UserCheck, Users, Globe, Calendar } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Join = () => {
  const { toast } = useToast();
  const [individualFormData, setIndividualFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    ageGroup: "",
    interest: "",
    heardFrom: "",
  });

  const [clubFormData, setClubFormData] = useState({
    institutionName: "",
    institutionType: "",
    contactName: "",
    contactEmail: "",
    country: "",
    city: "",
    membersEstimate: "",
    reason: "",
  });

  const [partnerFormData, setPartnerFormData] = useState({
    organizationName: "",
    organizationType: "",
    contactName: "",
    contactEmail: "",
    website: "",
    country: "",
    partnershipArea: "",
    message: "",
  });

  const handleIndividualChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setIndividualFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleIndividualSelectChange = (name: string, value: string) => {
    setIndividualFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClubChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setClubFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClubSelectChange = (name: string, value: string) => {
    setClubFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePartnerChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPartnerFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePartnerSelectChange = (name: string, value: string) => {
    setPartnerFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleIndividualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted",
      description: "Thank you for your interest in joining UNYCC. We'll be in touch soon!",
    });
    setIndividualFormData({
      firstName: "",
      lastName: "",
      email: "",
      country: "",
      ageGroup: "",
      interest: "",
      heardFrom: "",
    });
  };

  const handleClubSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Club Application Submitted",
      description: "Thank you for your interest in starting a UNYCC club. Our team will review your application and contact you soon.",
    });
    setClubFormData({
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

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Partnership Request Submitted",
      description: "Thank you for your interest in partnering with UNYCC. Our team will review your information and contact you to discuss potential collaboration.",
    });
    setPartnerFormData({
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-unblue text-white py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join UNYCC</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Become part of our global movement and contribute to sustainable development in your community and beyond.
            </p>
          </div>
        </section>

        {/* Ways to Join */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Ways to Get Involved</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Whether you're a student, educator, community leader, or organization, there's a place for you in the UNYCC community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-ungray-light p-8 rounded-lg flex flex-col items-center text-center">
                <div className="mb-4 bg-unblue/10 p-4 rounded-full">
                  <UserPlus className="h-8 w-8 text-unblue" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Join as an Individual</h3>
                <p className="text-gray-600 mb-4">
                  Become a member of the UNYCC community and participate in local and global initiatives.
                </p>
                <div className="space-y-2 mt-auto">
                  <div className="flex items-center">
                    <UserCheck className="h-5 w-5 text-unblue mr-2" />
                    <span className="text-gray-600 text-sm">Access to resources and tools</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-unblue mr-2" />
                    <span className="text-gray-600 text-sm">Connect with global youth network</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-unblue mr-2" />
                    <span className="text-gray-600 text-sm">Participate in events and programs</span>
                  </div>
                </div>
              </div>

              <div className="bg-ungray-light p-8 rounded-lg flex flex-col items-center text-center">
                <div className="mb-4 bg-unblue/10 p-4 rounded-full">
                  <School className="h-8 w-8 text-unblue" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Start a UNYCC Club</h3>
                <p className="text-gray-600 mb-4">
                  Establish a UNYCC club at your school, university, or community and lead local initiatives.
                </p>
                <div className="space-y-2 mt-auto">
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-unblue mr-2" />
                    <span className="text-gray-600 text-sm">Become part of global network</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-unblue mr-2" />
                    <span className="text-gray-600 text-sm">Lead a team of changemakers</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-unblue mr-2" />
                    <span className="text-gray-600 text-sm">Implement impactful projects</span>
                  </div>
                </div>
              </div>

              <div className="bg-ungray-light p-8 rounded-lg flex flex-col items-center text-center">
                <div className="mb-4 bg-unblue/10 p-4 rounded-full">
                  <Building className="h-8 w-8 text-unblue" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Partner with UNYCC</h3>
                <p className="text-gray-600 mb-4">
                  Collaborate with UNYCC as an organization, institution, or business to support youth-led initiatives.
                </p>
                <div className="space-y-2 mt-auto">
                  <div className="flex items-center">
                    <Handshake className="h-5 w-5 text-unblue mr-2" />
                    <span className="text-gray-600 text-sm">Strategic collaborations</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-unblue mr-2" />
                    <span className="text-gray-600 text-sm">Global impact and visibility</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-unblue mr-2" />
                    <span className="text-gray-600 text-sm">Support youth empowerment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Forms Section */}
        <section className="py-12 bg-ungray-light">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Apply to Join UNYCC</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Select the option that best fits your interest and complete the application form.
              </p>
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
              <Tabs defaultValue="individual" className="w-full">
                <TabsList className="w-full grid grid-cols-3">
                  <TabsTrigger value="individual" className="py-4">Individual Membership</TabsTrigger>
                  <TabsTrigger value="club" className="py-4">Start a Club</TabsTrigger>
                  <TabsTrigger value="partner" className="py-4">Partnership</TabsTrigger>
                </TabsList>
                
                {/* Individual Membership Form */}
                <TabsContent value="individual" className="p-6">
                  <form onSubmit={handleIndividualSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={individualFormData.firstName}
                          onChange={handleIndividualChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={individualFormData.lastName}
                          onChange={handleIndividualChange}
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
                        value={individualFormData.email}
                        onChange={handleIndividualChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="country">Country</Label>
                      <Select 
                        onValueChange={(value) => handleIndividualSelectChange("country", value)}
                        value={individualFormData.country}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your country" />
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
                      <Label>Age Group</Label>
                      <RadioGroup 
                        onValueChange={(value) => handleIndividualSelectChange("ageGroup", value)}
                        value={individualFormData.ageGroup}
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
                        onValueChange={(value) => handleIndividualSelectChange("interest", value)}
                        value={individualFormData.interest}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your primary interest" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="climate">Climate Action</SelectItem>
                          <SelectItem value="education">Quality Education</SelectItem>
                          <SelectItem value="gender">Gender Equality</SelectItem>
                          <SelectItem value="poverty">Poverty Reduction</SelectItem>
                          <SelectItem value="health">Good Health & Well-being</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="heardFrom">How did you hear about UNYCC?</Label>
                      <Input
                        id="heardFrom"
                        name="heardFrom"
                        value={individualFormData.heardFrom}
                        onChange={handleIndividualChange}
                      />
                    </div>
                    
                    <Button type="submit" className="btn-primary w-full">Submit Application</Button>
                  </form>
                </TabsContent>
                
                {/* Start a Club Form */}
                <TabsContent value="club" className="p-6">
                  <form onSubmit={handleClubSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="institutionName">School/Institution Name</Label>
                      <Input
                        id="institutionName"
                        name="institutionName"
                        value={clubFormData.institutionName}
                        onChange={handleClubChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="institutionType">Institution Type</Label>
                      <Select 
                        onValueChange={(value) => handleClubSelectChange("institutionType", value)}
                        value={clubFormData.institutionType}
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
                          value={clubFormData.contactName}
                          onChange={handleClubChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="contactEmail">Contact Email</Label>
                        <Input
                          id="contactEmail"
                          name="contactEmail"
                          type="email"
                          value={clubFormData.contactEmail}
                          onChange={handleClubChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="country">Country</Label>
                        <Select 
                          onValueChange={(value) => handleClubSelectChange("country", value)}
                          value={clubFormData.country}
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
                          value={clubFormData.city}
                          onChange={handleClubChange}
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
                        value={clubFormData.membersEstimate}
                        onChange={handleClubChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="reason">Why do you want to start a UNYCC club?</Label>
                      <Textarea
                        id="reason"
                        name="reason"
                        value={clubFormData.reason}
                        onChange={handleClubChange}
                        rows={4}
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="btn-primary w-full">Submit Club Application</Button>
                  </form>
                </TabsContent>
                
                {/* Partnership Form */}
                <TabsContent value="partner" className="p-6">
                  <form onSubmit={handlePartnerSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="organizationName">Organization Name</Label>
                      <Input
                        id="organizationName"
                        name="organizationName"
                        value={partnerFormData.organizationName}
                        onChange={handlePartnerChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="organizationType">Organization Type</Label>
                      <Select 
                        onValueChange={(value) => handlePartnerSelectChange("organizationType", value)}
                        value={partnerFormData.organizationType}
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
                          value={partnerFormData.contactName}
                          onChange={handlePartnerChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="contactEmail">Contact Email</Label>
                        <Input
                          id="contactEmail"
                          name="contactEmail"
                          type="email"
                          value={partnerFormData.contactEmail}
                          onChange={handlePartnerChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="website">Organization Website</Label>
                      <Input
                        id="website"
                        name="website"
                        value={partnerFormData.website}
                        onChange={handlePartnerChange}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="country">Country</Label>
                      <Select 
                        onValueChange={(value) => handlePartnerSelectChange("country", value)}
                        value={partnerFormData.country}
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
                        onValueChange={(value) => handlePartnerSelectChange("partnershipArea", value)}
                        value={partnerFormData.partnershipArea}
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
                        value={partnerFormData.message}
                        onChange={handlePartnerChange}
                        rows={4}
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="btn-primary w-full">Submit Partnership Request</Button>
                  </form>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Join;
