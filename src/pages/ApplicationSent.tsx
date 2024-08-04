import { useLocation } from "react-router-dom";

const ApplicationSent = () => {
  const location = useLocation();
  const data = location.state;
  //   console.log(data);
  return (
    <div className="flex flex-col gap-6 p-8 max-w-4xl h-full m-auto">
      <h1>Application sent</h1>
    </div>
  );
};

export default ApplicationSent;
