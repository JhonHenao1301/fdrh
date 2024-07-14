import { useParams } from "react-router-dom";

const ApplicationSelTypeEd = () => {
  const { id } = useParams();
  return (
    <div className="flex flex-col gap-6 p-8 max-w-4xl h-inherit m-auto">
      <div className="flex flex-col gap-4 text-left">
        <h1 className="text-lg text-center font-bold">Requester information</h1>
        <section className="grid grid-cols-2 gap-4">
          <article className="flex flex-col justify-between">
            <h1 className="font-semibold">Name:</h1>
            <p className="font-semibold text-gray-30">Info</p>
          </article>
          <article className="flex flex-col justify-between ">
            <h1 className="font-semibold">Resource ID:</h1>
            <p className="font-semibold text-gray-30">{id}</p>
          </article>
          <article className="flex flex-col justify-between ">
            <h1 className="font-semibold">Job title</h1>
            <p className="font-semibold text-gray-30">Info</p>
          </article>
          <article className="flex flex-col justify-between ">
            <h1 className="font-semibold">Department or unit:</h1>
            <p className="font-semibold text-gray-30">Info</p>
          </article>
          <article className="flex flex-col justify-between ">
            <h1 className="font-semibold">Office</h1>
            <p className="font-semibold text-gray-30">Info</p>
          </article>
          <article className="flex flex-col justify-between ">
            <h1 className="font-semibold">Duty post:</h1>
            <p className="font-semibold text-gray-30">Info</p>
          </article>
          <article className="flex flex-col justify-between ">
            <h1 className="font-semibold">Supervisor:</h1>
            <p className="font-semibold text-gray-30">Info</p>
          </article>
          <article className="flex flex-col justify-between ">
            <h1 className="font-semibold">Start date:</h1>
            <p className="font-semibold text-gray-30">Info</p>
          </article>
          <article className="flex flex-col justify-between ">
            <h1 className="font-semibold">
              Performance management rating (last year):
            </h1>
            <p className="font-semibold text-gray-30">Info</p>
          </article>
        </section>
      </div>
      <form className="flex flex-col gap-6" action="submit">
        <h1 className="font-bold">Education level</h1>
        <section>
          Options
          {/* <Checkbox /> */}
        </section>
        <button className="btn">Next</button>
      </form>
    </div>
  );
};

export default ApplicationSelTypeEd;
