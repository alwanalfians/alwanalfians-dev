import Image from "next/image";

const Contacts = () => {
  return (
    <div className="mt-[112]">
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
  );
};

export default Contacts;
