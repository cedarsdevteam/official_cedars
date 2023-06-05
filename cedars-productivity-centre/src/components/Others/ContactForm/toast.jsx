import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

function AutohideToast() {
  const [show, setShow] = useState(false);

  return (
    <div>
        <Col style={{ position: 'fixed', bottom: '1rem', left: '1rem' }} >
            <Toast onClose={() => setShow(true)} show={show} delay={3000} autohide>
            <Toast.Header>
                <strong className="me-auto">Message</strong>
                <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
            </Toast>
        </Col>
        
        {/* <Col xs={6}>
            <Button onClick={() => setShow(true)}>Show Toast</Button>
        </Col> */}
    </div>
  );
}

export default AutohideToast;