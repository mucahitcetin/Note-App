import { Link } from "react-router-dom";
import { Tag, Note } from "../types";
import { Stack, Button, Form, Row, Col } from "react-bootstrap";
import Card from "../components/Card";
import { useState } from "react";
import ReactSelect from "react-select";

interface Props {
  notes: Note[];
  availableTags: Tag[];
}

const Main = ({ notes, availableTags }: Props) => {
  const [title, setTitle] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  const filtredNotes = notes.filter((note) => {
    const noteTitle = note.title ? note.title.toLowerCase() : "";
    return (
      noteTitle.includes(title.toLowerCase()) &&
      selectedTags.every((s_tag) =>
        note.tags.some((noteTag) => noteTag.value === s_tag.value)
      )
    );
  });

  return (
    <div className="container mx-auto py-5">
      <Stack direction="horizontal" className="justify-content-between">
        <h1>Notlar</h1>

        <Link to="/new">
          <Button>Oluştur</Button>
        </Link>
      </Stack>

      {/* Form Area */}
      <Form>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Başlığa Göre Ara</Form.Label>
              <Form.Control onChange={(e) => setTitle(e.target.value)} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Etikete Göre Ara</Form.Label>
              <ReactSelect
                onChange={(all_tags) =>
                  setSelectedTags(all_tags ? (all_tags as Tag[]) : [])
                }
                className="text-black"
                options={availableTags}
                isMulti
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>

      {/* Not List */}
      <Row xs={1} sm={2} lg={3} xl={4} className="g-3 mt-4">
        {filtredNotes.map((note) => (
          <Col key={note.id}>
            <Card note={note} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Main;
