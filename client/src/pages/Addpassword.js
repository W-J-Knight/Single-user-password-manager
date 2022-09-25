import { Container, Row, Col, Form, Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import Axios from 'axios';

function Addpassword() {

    const [password, setPassword] = useState('');
    const [title, setTitle] = useState('');
    const addPassword = () => {
        Axios.post("http://localhost:3001/addpassword", {
            password: password,
            title: title,
        });
    };



    return (
        <Container className="m-0 p-0 mx-md-auto">
            <Row>
                <Col className="md-8">
                    <Form className="bg-secondary p-5" >
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={2} className="text-white ">
                                Email
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control placeholder="ex. facebook.com" onChange={(event) => {
                                    setTitle(event.target.value);
                                    console.log(title)
                                }} />
                                {/* //             <input type="text" placeholder="Ex.password" onChange={(event) => {
//                 setPassword(event.target.value)
//             }} /> */}
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={2} className="text-white sm={2}">
                                Password
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control placeholder="ex. password1234" onChange={(event) => {
                                    setPassword(event.target.value);
                                    console.log(password)
                                }} />
                            </Col>
                        </Form.Group>
                        <Button as="input" type="submit" value="Submit" onClick={addPassword} />
                    </Form>
                </Col>
            </Row>
        </Container >
    )
}

export default Addpassword
// import React from 'react'
// import { useState } from 'react'
// import Axios from 'axios';

// function AddPassword() {
//     const [password, setPassword] = useState('');
//     const [title, setTitle] = useState('');
//     // const [passwordList, setPasswordList] = useState([]);
//     const addPassword = () => {
//         Axios.post("http://localhost:3001/addpassword", {
//             password: password,
//             title: title,
//         });
//     };


//     return (
//         <div className="AddingPassword">
//             <input type="text" placeholder="Ex.password" onChange={(event) => {
//                 setPassword(event.target.value)
//             }} />
//             <input type="text" placeholder="Ex.Facebook" onChange={(event) => {
//                 setTitle(event.target.value)
//             }} />
//             <button onClick={addPassword}>Add Password</button>
//         </div>
//     )
// }

// export default AddPassword