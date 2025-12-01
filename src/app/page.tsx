"use client";

import ShadowedButton from "@/components/ShadowedButton";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const title =
    typeof process.env.title !== "undefined"
      ? process.env.title
      : "alwanalfians";

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
            <p className="text-3xl leading-[1]">{title}</p>
            <div className="brand_highlight" />
            <p className="text-2xl">.dev</p>
          </div>
        </Link>
        {/* Avatar */}
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
        {/* Greetings */}
        <div className="mt-[40]">
          <p className="font-bold text-3xl mb-[16]">Hi There👋</p>
          <p className="font-bold text-4xl mb-[8]">I&apos;m Alwan!</p>
          <p className="font-semibold text-base">
            A Software Engineer, Front End and Application Developer
            <br />
            based in Bandung, Indonesia.
          </p>
        </div>
        {/* Get Resume */}
        <div className="mt-[24]">
          <ShadowedButton title="Get My Resume!" />
        </div>

        {/* Connect */}
        <div className="mt-[104]">
          <p className="font-bold text-2xl">Let&apos;s Connect!</p>
          <p className="font-semibold text-base">
            Maybe we can be partners 🤝 or friends 😏
          </p>
          <div className="mt-[16] flex gap-[10]">
            <div
              className={`rounded-[10] px-[2] pt-px bg-(--color-based-black) size-fit pb-[8]`}
            >
              <div
                className={`rounded-lg px-[10] py-[8] font-bold text-base bg-(--color-based-white)`}
              >
                <Image
                  src="/github_logo.svg"
                  alt={"github_logo"}
                  width={24}
                  height={24}
                  priority
                />
              </div>
            </div>
            <div
              className={`rounded-[10] px-[2] pt-px bg-(--color-based-black) size-fit pb-[8]`}
            >
              <div
                className={`rounded-lg px-[10] py-[8] font-bold text-base bg-(--color-based-white)`}
              >
                <Image
                  src="/linkedin_logo.svg"
                  alt={"linkedin_logo"}
                  width={24}
                  height={24}
                  priority
                />
              </div>
            </div>
            <div
              className={`rounded-[10] px-[2] pt-px bg-(--color-based-black) size-fit pb-[8]`}
            >
              <div
                className={`rounded-lg px-[10] py-[8] font-bold text-base bg-(--color-based-white)`}
              >
                <Image
                  src="/youtube_logo.svg"
                  alt={"youtube_logo"}
                  width={24}
                  height={24}
                  priority
                />
              </div>
            </div>
            <div
              className={`rounded-[10] px-[2] pt-px bg-(--color-based-black) size-fit pb-[8]`}
            >
              <div
                className={`rounded-lg px-[10] py-[8] font-bold text-base bg-(--color-based-white)`}
              >
                <Image
                  src="/instagram_logo.webp"
                  alt={"instagram_logo"}
                  width={24}
                  height={24}
                  priority
                />
              </div>
            </div>
            <div
              className={`rounded-[10] px-[2] pt-px bg-(--color-based-black) size-fit pb-[8]`}
            >
              <div
                className={`rounded-lg px-[10] py-[8] font-bold text-base bg-(--color-based-white)`}
              >
                <Image
                  src="/gmail_logo.webp"
                  alt={"gmail_logo"}
                  width={24}
                  height={24}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="col-span-5"></div>
      <div className="col-span-1"></div>
    </div>
  );
};

export default Home;
