import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { CreateProps } from "../../pages/Create";
import { FormEvent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactSelect from "react-select/creatable";
import { Tag } from "../../types";
import { v4 } from "uuid";

const CustomForm = ({
  availableTags,
  handleSubmit,
  createTag,
  markdown = "",
  title = "",
  tags = [],
}: CreateProps) => {
  const navigate = useNavigate();

  // state
  const [selectedTags, setSelectedTags] = useState<Tag[]>(tags);

  // form elemanlarının refaransının al
  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // form gönderilince çalışır
  const handleSend = (e: FormEvent) => {
    e.preventDefault();

    // yeni note'u state kaydet
    handleSubmit({
      title: inputRef.current?.value as string,
      markdown: textareaRef.current?.value as string,
      tags: selectedTags,
    });

    // anasayfaya yönlendir
    navigate("/");
  };

  return (
    <Form onSubmit={handleSend} className="mt-4">
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
            <Form.Group controlId="tags">
              <Form.Label>Etiketler</Form.Label>
              <ReactSelect
                onChange={(allTags) => setSelectedTags(allTags as Tag[])}
                onCreateOption={(text: string) => {
                  //etiket nesnesi oluştur ve id ekle
                  const newTag: Tag = { label: text, value: v4() };

                  //yeni etiketi locale kaydet
                  createTag(newTag);

                  //seçili etiketler state'ine ekle
                  setSelectedTags([...selectedTags, newTag]);
                }}
                value={selectedTags}
                options={availableTags}
                isMulti
                className="text-black"
              />
            </Form.Group>
          </Col>
        </Row>

        {/* content area */}
        <Form.Group controlId="markdown" className="mt-4">
          <Form.Label>İçerik (markdown destekler)</Form.Label>
          <Form.Control
            defaultValue={markdown}
            ref={textareaRef}
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
