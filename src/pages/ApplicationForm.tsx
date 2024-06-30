import { useParams } from "react-router-dom";

const ApplicationForm = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Hello people</h1>
      <p>This is my resno {id}</p>
    </div>
  );
};

export default ApplicationForm;
