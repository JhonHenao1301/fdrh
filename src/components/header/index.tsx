const Header = () => {
  return (
    <div className="bg-sky-700 grid grid-flow-col items-center w-full p-6">
      <img
        src="./slack-logo.jpg"
        className="col-span-1 max-w-36 h-fit justify-self-center md:col-span-2"
        alt="logo"
      />
      <h1 className="text-slate-200 text-center font-semibold text-2xl col-span-4 md:text-3xl">
        Staff development and training
      </h1>
    </div>
  );
};

export default Header;
