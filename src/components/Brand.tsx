import Image from "next/image";
import Link from "next/link";

const Brand = () => {
  const title =
    typeof process.env.title !== "undefined"
      ? process.env.title
      : "alwanalfians";

  return (
    <Link href={"/"} className="flex grid-row">
      <div className="w-[58] h-[61] mr-[8]">
        <Image
          src="/logo_green.webp"
          alt={"alwanalfians_logo"}
          width={58}
          height={61}
          priority
        />
      </div>
      <div className="font-bold">
        <p className="text-3xl leading-[1]">{title}</p>
        <div className="brand_highlight" />
        <p className="text-2xl">.dev</p>
      </div>
    </Link>
  );
};

export default Brand;
