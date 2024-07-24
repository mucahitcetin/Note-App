import { useOutletContext } from "react-router-dom";

const Detail = () => {
  // outletten gönderilen proplara erişmeye yarar
  const note = useOutletContext();

  return <div>Detail</div>;
};

export default Detail;
