import Avatar from "@/components/Avatar";
import Brand from "@/components/Brand";
import Contacts from "@/components/Contacts";
import Greetings from "@/components/Greetings";
import Resume from "@/components/Resume";

const PersonalInformation = () => {
  return (
    <div className="col-span-1">
      <Brand />
      <Avatar />
      <Greetings />
      <Resume />
      <Contacts />
    </div>
  );
};

export default PersonalInformation;
