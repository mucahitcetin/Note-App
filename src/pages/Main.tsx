import { Link } from "react-router-dom";
import { Tag, Note } from "../types";
import { Stack, Button } from "react-bootstrap";

interface Props {
  notes: Note[];
  availableTags: Tag[];
}
const Main = ({ notes, availableTags }: Props) => {
  return (
    <div className="container mx-auto py-5">
      <Stack direction="horizontal" className="justify-content-between">
        <h1>Notlar</h1>

        <Link to="/new">
          <Button>Oluştur</Button>
        </Link>
      </Stack>
    </div>
  );
};

export default Main;
