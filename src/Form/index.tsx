import { Form, Col, Row, Stack, Button } from "react-bootstrap";

Form;

const CustomForm = () => {
  return (
    <Form>
      <Stack>
        {/* tittle area */}
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Başlık</Form.Label>
              <Form.Control type="text" placeholder="First Name" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Etiketler</Form.Label>
              <Form.Control type="text" placeholder="First Name" />
            </Form.Group>
          </Col>
        </Row>

        {/* content area */}
        <Form.Group>
          <Form.Label>İçerik (markdown destekler)</Form.Label>
          <Form.Control
            as="textarea"
            style={{ minHeight: "300px", maxHeight: "500px" }}
          />
        </Form.Group>

        {/* buttons */}

        <Stack
          direction="horizontal"
          gap={4}
          className="justify-content-end mt-5"
        >
          <Button type="submit">Kaydet</Button>
          <Button type="button" variant="secondary">
            {" "}
            Geri
          </Button>
        </Stack>
      </Stack>
    </Form>
  );
};

export default CustomForm;
