import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 my-8">
      <h1 className="text-2xl font-semibold">Main page</h1>
      <div className="flex flex-col gap-2 max-w-48">
        <button className="border rounded-md bg-slate-50 text-slate-700 p-2 text-sm">
          <Link to="/admin">Admin page</Link>
        </button>
        <button className="border rounded-md bg-slate-50 text-slate-700 p-2 text-sm">
          <Link to="/application">Application page</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
