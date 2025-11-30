import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2"></div>
      {/* Left Side */}
      <div className="col-span-4">
        {/* Logo */}
        <Link href={"/"} className="flex grid-row justify-content">
          <div className="w-[58] h-[61] mr-2">
            <Image
              src="/logo_green.webp"
              alt={"alwanalfians_logo"}
              width={58}
              height={61}
              priority
            />
          </div>
          <div className="font-bold">
            <p className="text-3xl leading-[1]">{process.env.title}</p>
            <div className="highlight" />
            <p className="text-2xl">.dev</p>
          </div>
        </Link>

        {/* Avatar */}
        <div className="w-[276] h-[276]">
          <Image
            src="/avatar_eye_open.webp"
            alt={"alwanalfians_avatar"}
            width={276}
            height={276}
            priority
            style={{
              position: "absolute",
              top: 155,
              left: 265,
            }}
          />
        </div>

        {/* Greetings */}
        <div className="mt-[56] mb-[24]">
          <p className="font-bold text-3xl mb-[16]">Hi There👋</p>
          <p className="font-bold text-4xl mb-[8]">I&apos;m Alwan!</p>
          <p className="font-semibold text-base">
            A Software Engineer, Front End and Application Developer
            <br />
            based in Bandung, Indonesia.
          </p>
        </div>

        {/* Get Resume */}
        {/* rounded-lg border-solid border-x-[2] border-t-[1] border-b-[8] border-(--color-dark) */}
        <div>
          <button className="test rounded-lg px-[16] py-[8] bg-(--color-accent-lime) font-bold text-base">
            Get My Resume!
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="col-span-5"></div>
      <div className="col-span-1"></div>
    </div>
  );
}
