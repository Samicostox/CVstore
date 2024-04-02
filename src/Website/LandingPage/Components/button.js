import { FiLogIn } from "react-icons/fi";

const ButtonWrapper = () => {
  return (
    <div className="flex  items-center justify-center bg-slate-900">
      <RoundedSlideButton />
    </div>
  );
};

export const RoundedSlideButton = () => {
  const handleButtonClick = () => {
    window.location.href = "https://innovationstudios.uk/recruitment";
  };

  return (
    <button
      onClick={handleButtonClick}
      className={`
        relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px] text-sm
        border-teal-400 px-4 py-2 font-semibold
        uppercase text-teal-400 transition-all duration-500
        
        before:absolute before:inset-0
        before:-z-10 before:translate-x-[150%]
        before:translate-y-[150%] before:scale-[2.5]
        before:rounded-[100%] before:bg-teal-400
        before:transition-transform before:duration-1000
        before:content-[""]

        hover:scale-105 hover:text-neutral-900
        hover:before:translate-x-[0%]
        hover:before:translate-y-[0%]
        active:scale-95`}
    >
      <FiLogIn />
      <span>Join the Team</span>
    </button>
  );
};

export default ButtonWrapper;