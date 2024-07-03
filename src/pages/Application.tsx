import { useState } from "react";
import PoliciesTable from "../components/PoliciesTable";
import { Toaster, toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Application = () => {
  const [enableClearBtn, setEnableClearBtn] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const inputValue = event.target.value;

    if (inputValue.length > 0) {
      setEnableClearBtn(true);
      return;
    }
    setEnableClearBtn(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const regexCIAT: RegExp = /^.{5}$/;
    const regexBIO: RegExp = /^BIO.{5}$/;
    if (form) {
      const formData = new FormData(form);
      const resno = formData.get("resno") as string;
      if (resno) {
        if (regexCIAT.test(resno) || regexBIO.test(resno)) {
          navigate(`/application/${resno}`);
          console.log(resno);
          form.reset();
          // Here introduce the rest of the function
        } else {
          toast.error("Introduce a valid value");
        }
      } else {
        toast.error("Input must be filled");
      }
    }
  };

  return (
    <div className="flex flex-col gap-4 max-w-3xl text-justify my-8 m-auto px-8">
      <p>
        The Alliance of Bioversity International and CIAT, recognizes that its
        staff are fundamental to its success. As a research organization, it is
        essential that the Alliance promotes a strong learning culture in which
        all employees can develop and learn the competencies and skills required
        to perform their jobs safely at all times, reach their full potential
        and meet the evolving needs of the organization.
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
          "Effective" or "highly effective" performance rating in the last year
          (for staff who joined the Alliance on or before June 30 of the
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
          Have available the information related to the training such as name of
          the institution, costs, dates, etc. Please take into account that the
          call cover all year (first and second semester).
        </li>
        <li>
          Review the Education Support policy, where you can find eligibility
          criteria and the process.
        </li>
        <li>Enter your Alliance ID number on the box and click "Enter".</li>
        <li>
          Fill out the online Education Support form and send your request (PDF
          or physical format) endorsed by your supervisor to Adriana Cardona
          Adriana-cardona@cgiar.org.
        </li>
      </ul>
      <PoliciesTable />
      <form
        id="form"
        action="submit"
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col items-center gap-4 mt-4"
      >
        <label htmlFor="resno" className="text-primary-30 font-bold">
          Employee ID Number
        </label>
        <input
          type="text"
          name="resno"
          onChange={(e) => handleChange(e)}
          className="border border-primary-10 rounded-xl max-w-48 p-2 text-sm"
        />
        <div className="flex gap-2">
          <button type="submit" className="btn">
            Enter
          </button>
          <button
            disabled={!enableClearBtn}
            className="btn disabled:hover:border-primary-10 disabled:opacity-[.50]"
          >
            Clear
          </button>
        </div>
      </form>
      <Toaster richColors />
    </div>
  );
};

export default Application;
