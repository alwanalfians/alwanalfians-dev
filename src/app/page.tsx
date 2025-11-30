import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-1"></div>
      {/* Left */}
      <div className="col-span-5">
        {/* Logo */}
        <Link href={"/"} className="flex">
          <Image
            className="mr-2"
            src="/logo_green.svg"
            alt={""}
            height={2}
            width={66}
            priority
          />
          <div className="font-bold leading-none">
            <p className="text-3xl">{process.env.title}</p>
            <div className="highlight" />
            <p className="text-2xl">.dev</p>
          </div>
        </Link>
      </div>
      <div className="col-span-5"></div>
      <div className="col-span-1"></div>
    </div>
  );
}
