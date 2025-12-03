import { socials } from "@/data/socials";
import ShadowedButton from "../components/ShadowedButton";

const Contacts = () => {
  return (
    <div className="mt-[112]">
      <p className="font-bold text-2xl">Let&apos;s Connect!</p>
      <p className="font-semibold text-base">
        Maybe we can be partners 🤝 or friends 😏
      </p>
      <div className="mt-[16] flex gap-[10]">
        {socials.map((data) => {
          return (
            <ShadowedButton
              key={data.name}
              title={data.name}
              link={data.link}
              icon={{ src: data.src, alt: data.alt }}
              isIcon
            />
          );
        })}
      </div>
    </div>
  );
};

export default Contacts;
