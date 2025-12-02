import { useState } from "react";
import Image, { ImageProps } from "next/image";
import Link from "next/link";

interface IShadowButton {
  title: string;
  icon?: ImageProps;
  link?: string;
  onClick?(): void;
  isIcon?: boolean;
}

const ShadowedButton = ({
  title,
  icon,
  link,
  onClick,
  isIcon = false,
}: IShadowButton) => {
  const [pressed, setPressed] = useState(false);

  const handleClick = () => {
    onClick?.();
  };

  const handlePressed = () => {
    setPressed(pressed ? false : true);
  };

  return (
    <div
      className={`rounded-[10] px-[2] pt-px bg-(--color-based-black) size-fit cursor-pointer ${
        pressed ? "mt-[4] pb-[4]" : "pb-[8]"
      }`}
    >
      <Link
        className={`flex rounded-lg py-[8] font-bold text-base cursor-pointer ${
          isIcon
            ? "px-[10] bg-(--color-based-white)"
            : "px-[24] bg-(--color-accent-lime)"
        }`}
        onClick={handleClick}
        onMouseDown={handlePressed}
        onMouseUp={handlePressed}
        target="_blank"
        href={link || ""}
      >
        {isIcon ? (
          <Image
            src={icon?.src || ""}
            alt={icon?.alt || title}
            width={24}
            height={24}
          />
        ) : (
          title
        )}
      </Link>
    </div>
  );
};

export default ShadowedButton;
