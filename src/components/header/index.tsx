import { MoonIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <div className="bg-primary-30 w-full">
      <div className="flex justify-between items-center gap-8 max-w-3xl p-4 m-auto">
        <img
          src="/Alliance_logo_standard_white.png"
          className="col-span-1 w-24 h-fit justify-self-center md:col-span-2 md:w-44"
          alt="logo"
        />
        <h1 className="text-white-10 text-center font-semibold col-span-4 text-lg max-sm:text-xs md:text-2xl">
          Staff development and training
        </h1>
        <div className="flex items-center gap-3">
          <button>
            <MoonIcon className="size-4 text-white-10 sm:size-6" />
          </button>
          <button>
            <img
              src="/spanish_icon.png"
              className="size-6 sm:size-8"
              alt="spanish icon"
            />
          </button>
          <button>
            <img
              src="/english_icon.png"
              className="size-6 sm:size-8"
              alt="spanish icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
