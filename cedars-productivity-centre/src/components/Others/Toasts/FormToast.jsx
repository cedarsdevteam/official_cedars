// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Toast from 'react-bootstrap/Toast';

// function FormToast({ state, type, message }) {
//     state === undefined ? state = false : state = true

//     console.log(state);
//     console.log(state, type, message);
    
//     const [formToast, setToast] = useState(state);
//     let [secs, setSecs] = useState(null);

//     const toggleFormToast = () => setToast(!formToast);

//     return (
//         <Col md={6} className="mb-2">
//             {/* <Button onClick={toggleFormToast} className="mb-2">
//                 Toggle Toast <strong>with</strong> Animation
//             </Button> */}
//             <Toast
//                 show={state}
//                 onClose={state}
//                 id="formToast"
//                 style={{
//                     position: "fixed",
//                     bottom: "5px",
//                     left: "5px",
//                     zIndex: '1'
//                 }}
//             >
//                 <Toast.Header>
//                     <img
//                         src="holder.js/20x20?text=%20"
//                         className="rounded me-2"
//                         alt=""
//                     />
//                     <strong className="me-auto">{type}</strong>
//                     <small>
//                         {/* {
//                 formToast === true ?
//                 setInterval(() => {
//                     setSecs(secs++)
//                     console.log(secs);
//                 }, 1000) 
//                 :
//                 setSecs(secs)
//             } secs ago */}
//                     </small>
//                 </Toast.Header>
//                 <Toast.Body>{message}</Toast.Body>
//             </Toast>
//         </Col>
//     );
// }

// export default FormToast;