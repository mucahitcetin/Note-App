import { Link, useOutletContext } from "react-router-dom";
import { Note } from "../types";
import { Badge, Button, Col, Stack } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import Main from "./Main";

type Props = {
  deleteNote: (id: string) => void;
};

const Detail = ({ deleteNote }: Props) => {
  const note = useOutletContext<Note>();

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 ">
      <div
        className="py-5 mx-auto border border-2 border-primary rounded-4 p-4 note_card card_bg"
        style={{ maxWidth: "800px" }}
      >
        <div className="d-flex justify-content-center">
          <h1 className="mb-4">{note.title}</h1>
        </div>
        <Stack
          direction="horizontal"
          gap={3}
          className="flex-wrap justify-content-center mb-4"
        >
          {note.tags.map((tag) => (
            <Badge key={tag.label}>{tag.label}</Badge>
          ))}
        </Stack>
        <div className="d-flex justify-content-center">
          <ReactMarkdown className="my-5">{note.markdown}</ReactMarkdown>
        </div>
        <Col className="d-flex justify-content-center">
          <Stack direction="horizontal" gap={2}>
            <Link to="/">
              <Button variant="secondary">Geri</Button>
            </Link>
            <Link to="edit">
              <Button>Düzenle</Button>
            </Link>
            <Button onClick={() => deleteNote(note.id)} variant="danger">
              Sil
            </Button>
          </Stack>
        </Col>
      </div>
    </div>
  );
};

export default Detail;
