import Image from "next/image";

const Avatar = () => {
  return (
    <div className="w-[172] h-[172] mt-[88]">
      <Image
        className="avatar"
        src="/avatar_eyes_open.webp"
        alt={"alwanalfians_avatar"}
        width={276}
        height={276}
        priority
      />
    </div>
  );
};

export default Avatar;
