import React, { useState } from "react";
import {Form, Button, Col, Row} from "react-bootstrap";
import css from "./FormVols.module.css";

const FormVols = () => {
  const initialForm = {
    direction: "",
    destinationAller: "",
    destinationRetour: "",
    dateArriver: "",
    dateRetour: "",
    escales: false,
  };
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setForm(initialForm);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className={css.centered}>
        <Form.Check
          inline
          label="Aller"
          type="radio"
          name="direction"
          value="Aller"
          onChange={handleChange}
        />
        <Form.Check
          inline
          label="Aller-Retour"
          name="direction"
          type="radio"
          value="Aller-Retour"
          onChange={handleChange}
        />
        <Form.Check
          inline
          name="direction"
          label="Retour"
          type="radio"
          value="Retour"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label for="destinationAller">De</Form.Label>
        <Form.Control
          type="text"
          name="destinationAller"
          value={form.destinationAller}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label for="destinationRetour">A</Form.Label>
        <Form.Control
          type="text"
          name="destinationRetour"
          value={form.destinationRetour}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Row>
          <Col>
          <Form.Control
            type="date"
            name="dateArriver"
            value={form.dateArriver}
            onChange={handleChange}
          />
          </Col>
          <Col>
          <Form.Control
            type="date"
            name="dateRetour"
            value={form.dateRetour}
            onChange={handleChange}
          />
          </Col>
        </Row>
      </Form.Group>
      
      <Form.Group>
        <Form.Check
          inline
          label="Avec escales ?"
          type="checkbox"
          name="escales"
          checked={form.escales}
          onChange={handleChange}
        />{form.escales ? "oui" : "non"}
      </Form.Group>
      <Button>Valider</Button>
    </Form>
  );
};

export default FormVols;
