import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-col gap-4 justify-center items-center my-8">
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <p>Please redirect to the main page</p>
      <button
        onClick={handleClick}
        className="border border-sky-700 bg-sky-50 text-slate-700 py-2 px-4 w-fit rounded-md"
      >
        Return main page
      </button>
    </div>
  );
};

export default NotFoundPage;
