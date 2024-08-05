"use client";
import i18n from "../../locales/i18n";
import SwitchComponent from "./SwitchComponent";
import { useForm } from "react-hook-form";

const Header = () => {
  const { control } = useForm();

  const handleSwitchChange = (checked: boolean) => {
    document.body.classList.toggle("dark");
  };

  const changeLanguage = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    const lang: string = event.target.id;
    i18n.changeLanguage(lang);
  };
  return (
    <nav className="bg-primary-30 w-full h-auto text-white-10 shadow-2xl dark:bg-primary-40 dark:shadow-primary-20 dark:shadow-lg">
      <div className="flex items-center gap-8 max-w-4xl py-2 px-8 m-auto">
        <picture className="flex-1 h-fit max-w-48">
          <img
            src="/Alliance_logo_standard_white.png"
            className="object-cover"
            alt="logo"
          />
        </picture>
        <section className="flex items-center gap-3 justify-end flex-1">
          <SwitchComponent
            name="darkModeBtn"
            control={control}
            onChangeExternal={handleSwitchChange}
          />
          <button onClick={(e) => changeLanguage(e)}>
            <img
              src="/spanish_icon2.png"
              className="size-6 sm:size-7"
              id="es"
              alt="spanish icon"
            />
          </button>
          <button onClick={(e) => changeLanguage(e)}>
            <img
              src="/english_icon2.png"
              className="size-6 sm:size-7"
              id="en"
              alt="spanish icon"
            />
          </button>
        </section>
      </div>
    </nav>
  );
};

export default Header;
