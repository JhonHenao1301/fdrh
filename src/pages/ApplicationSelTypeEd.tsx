import { useParams } from "react-router-dom";

const ApplicationSelTypeEd = () => {
  const { id } = useParams();
  return (
    <div className="flex flex-col gap-6 p-8 max-w-4xl h-inherit m-auto">
      <div className="flex flex-col gap-4 text-left">
        <h1 className="text-lg text-center font-bold">Requester information</h1>
        <section className="grid grid-cols-2 gap-4">
          <article className="flex flex-col justify-between">
            <p className="text-sm text-gray-30">Name:</p>
            <p className="font-semibold">Info</p>
          </article>
          <article className="flex flex-col justify-between ">
            <p className="text-sm text-gray-30">Resource ID:</p>
            <p className="font-semibold">{id}</p>
          </article>
          <article className="flex flex-col justify-between ">
            <p className="text-sm text-gray-30">Job title</p>
            <p className="font-semibold">Info</p>
          </article>
          <article className="flex flex-col justify-between ">
            <p className="text-sm text-gray-30">Department or unit:</p>
            <p className="font-semibold">Info</p>
          </article>
          <article className="flex flex-col justify-between ">
            <p className="text-sm text-gray-30">Office</p>
            <p className="font-semibold">Info</p>
          </article>
          <article className="flex flex-col justify-between ">
            <p className="text-sm text-gray-30">Duty post:</p>
            <p className="font-semibold">Info</p>
          </article>
          <article className="flex flex-col justify-between ">
            <p className="text-sm text-gray-30">Supervisor:</p>
            <p className="font-semibold">Info</p>
          </article>
          <article className="flex flex-col justify-between ">
            <p className="text-sm text-gray-30">Start date:</p>
            <p className="font-semibold">Info</p>
          </article>
          <article className="flex flex-col justify-between ">
            <p className="text-sm text-gray-30">
              Performance management rating (last year):
            </p>
            <p className="font-semibold">Info</p>
          </article>
        </section>
      </div>
      <form className="flex flex-col gap-6" action="submit">
        <h1 className="font-bold">Education level</h1>
        <div className="flex flex-col gap-2">
          <div className="flex items-center">
            <input
              id="undergraduate"
              type="radio"
              name="drone"
              value="undergraduate"
              className="mr-4"
            />
            <label htmlFor="undergraduate">Undergraduate</label>
          </div>
          <div className="flex items-center">
            <input
              id="professional"
              type="radio"
              name="drone"
              value="professional"
              className="mr-4"
            />
            <label htmlFor="professional">
              Professional Certificate/Specializations
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="master"
              type="radio"
              name="drone"
              value="master"
              className="mr-4"
            />
            <label htmlFor="master">Master</label>
          </div>
          <div className="flex items-center">
            <input
              id="phd"
              type="radio"
              name="drone"
              value="phd"
              className="mr-4"
            />
            <label htmlFor="phd">Phd</label>
          </div>
        </div>
        <button className="btn">Next</button>
      </form>
    </div>
  );
};

export default ApplicationSelTypeEd;
