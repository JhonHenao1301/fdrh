import { useEffect, useState } from "react";
import Header from "../components/Header";
import PoliciesTable from "../components/PoliciesTable";

const Home = () => {
  const [enableClearBtn, setEnableClearBtn] = useState(false);
  document.querySelector("form");
  const form = new FormData();
  const resnoId = form.get("resno");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { resno } = event.target as HTMLFormElement;
    if (resno.value) {
      console.log(resno.value);
    }
  };

  return (
    <div className="flex flex-col gap-6 mb-8">
      <Header />
      <div className="flex flex-col gap-4 max-w-3xl text-justify m-auto px-8">
        <p>
          The Alliance of Bioversity International and CIAT, recognizes that its
          staff are fundamental to its success. As a research organization, it
          is essential that the Alliance promotes a strong learning culture in
          which all employees can develop and learn the competencies and skills
          required to perform their jobs safely at all times, reach their full
          potential and meet the evolving needs of the organization.
        </p>
        <p>
          One way to promote this culture is to support training and development
          processes.
        </p>
        <p>
          This is the call to receive requests for education support for higher
          education, you can find below he eligibility criteria, the steps to
          submit sour request and the Education Support Policy.
        </p>
        <strong className="text-sky-700 font-extrabold">Eligibility</strong>
        <ul className="flex flex-col gap-4 mt-2">
          <li className="">
            At least a year's tenure within the organization by the time the
            academic period for which they are requesting support begins.
          </li>
          <li>
            "Effective" or "highly effective" performance rating in the last
            year (for staff who joined the Alliance on or before June 30 of the
            previous year).
          </li>
          <li>Does not have current disciplinary action.</li>
          <li>
            Qualifications related to the employee's role, career development,
            areas of work and objectives, or the Alliance's strategic plans.
          </li>
        </ul>
        <p className="mt-1">
          <strong className="text-sky-700 font-extrabold">
            To submit your request
          </strong>
        </p>
        <ul className="flex flex-col gap-4 mt-2">
          <li>
            Have available the information related to the training such as name
            of the institution, costs, dates, etc. Please take into account that
            the call cover all year (first and second semester).
          </li>
          <li>
            Review the Education Support policy, where you can find eligibility
            criteria and the process.
          </li>
          <li>Enter your Alliance ID number on the box and click "Enter".</li>
          <li>
            Fill out the online Education Support form and send your request
            (PDF or physical format) endorsed by your supervisor to Adriana
            Cardona Adriana-cardona@cgiar.org.
          </li>
        </ul>
        <PoliciesTable />
        <form
          id="form"
          action="submit"
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col items-center gap-4 mt-4"
        >
          <label htmlFor="resno" className="text-sky-700 font-bold">
            Employee ID Number
          </label>
          <input
            type="number"
            name="resno"
            id="resno"
            className="border rounded-md max-w-48 p-2 text-sm"
          />
          <div className="flex gap-2">
            <button
              type="submit"
              className="border rounded-md bg-sky-700 text-slate-100 py-1 px-2 text-sm"
            >
              Enter
            </button>
            <button
              disabled={!enableClearBtn}
              className="border rounded-md bg-sky-700 text-slate-100 py-1 px-2 disabled:bg-opacity-30 text-sm"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
