import { useParams } from "react-router-dom";

const InsideACoffe = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Details of Coffee ID: {id}</h2>
    </div>
  );
};

export default InsideACoffe;
