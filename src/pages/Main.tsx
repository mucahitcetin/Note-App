import { Link } from "react-router-dom";
import { Tag, Note } from "../types";
import { Stack, Button, Form, Row, Col } from "react-bootstrap";
import Card from "../components/Card";

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

      {/* Form Area */}
      <Form>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Başlığa Göre Ara</Form.Label>
              <Form.Control />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Başlığa Göre Ara</Form.Label>
              <Form.Control />
            </Form.Group>
          </Col>
        </Row>
      </Form>

      {/* Not List */}
      <Row xs={1} sm={2} lg={3} xl={4} className="g-3 mt-4">
        {notes.map((note) => (
          <Col>
            <Card key={note.id} note={note} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Main;
