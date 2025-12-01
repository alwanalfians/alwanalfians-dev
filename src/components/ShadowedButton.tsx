import { useState } from "react";

interface IShadowButton {
  title: string;
  onClick?(): void;
}

const ShadowedButton = ({ title, onClick }: IShadowButton) => {
  const [pressed, setPressed] = useState(false);

  const handleClick = () => {
    onClick?.();
  };

  const handlePressed = () => {
    setPressed(pressed ? false : true);
  };

  return (
    <div
      className={`rounded-[10] px-[2] pt-px bg-(--color-based-black) size-fit ${
        pressed ? "mt-[28] pb-[4]" : "pb-[8]"
      }`}
    >
      <button
        className={`rounded-lg px-[24] py-[8] font-bold text-base bg-(--color-accent-lime)`}
        onClick={handleClick}
        onMouseDown={handlePressed}
        onMouseUp={handlePressed}
      >
        {title}
      </button>
    </div>
  );
};

export default ShadowedButton;
