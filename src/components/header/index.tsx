const Header = () => {
  return (
    <div className="bg-sky-700 w-full">
      <div className="flex justify-between items-center max-w-3xl p-4 header">
        <img
          src="./Alliance_logo_standard_white.png"
          className="col-span-1 w-36 h-fit justify-self-center md:col-span-2 md:w-44"
          alt="logo"
        />
        <h1 className="text-slate-200 text-center font-semibold text-2xl col-span-4 md:text-3xl">
          Staff development and training
        </h1>
      </div>
    </div>
  );
};

export default Header;
