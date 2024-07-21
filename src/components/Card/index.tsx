import { Badge, Card, Stack } from "react-bootstrap";
import { Note } from "../../types";

type Props = {
  note: Note;
};
const NoteCard = ({ note }: Props) => {
  return (
    <div>
      <Card>
        <Card.Body>
          <Stack
            className="align-items-center h-100 justify-content-between"
            gap={2}
          >
            <span className="fw-bold text-nowrap">{note.title}</span>
            <Stack
              direction="horizontal"
              className="justify-content-center"
              gap={2}
            >
              {note.tags.map((tag) => (
                <Badge>{tag.label}</Badge>
              ))}
            </Stack>
          </Stack>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NoteCard;
