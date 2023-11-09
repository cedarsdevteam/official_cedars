import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Toast from "react-bootstrap/Toast";

function FormToast({ state = false, type, message }) {
  const [formToast, setToast] = useState(state);
  const toggleFormToast = () => setToast(!state);

  useEffect(() => {
    setToast(state)
  }, [state])

  return (
    <Col md={6} className="mb-2">
      <Toast
        show={formToast}
        onClose={toggleFormToast}
        id="formToast"
        style={{
          position: "fixed",
          top: "5px",
          right: "5px",
          zIndex: "1",
        }}
      >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">{type}</strong>
          <small>
          </small>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </Col>
  );
}

export default FormToast;
