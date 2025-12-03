import Avatar from "@sections/Avatar";
import Brand from "@sections/Brand";
import Contacts from "@sections/Contacts";
import Greetings from "@sections/Greetings";
import Resume from "@sections/Resume";

const Branding = () => {
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

export default Branding;
