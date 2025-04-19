
import { UserPlus, Building, School, UserCheck, Users, Globe, Calendar, Handshake } from "lucide-react";

const JoinOptions = () => {
  return (
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
  );
};

export default JoinOptions;
