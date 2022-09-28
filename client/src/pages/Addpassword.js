import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Axios from "axios";

function Addpassword() {
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value,
        });
        if (!!errors[field])
            setErrors({
                ...errors,
                [field]: null,
            });
    };
    const [password, setPassword] = useState("");
    const [title, setTitle] = useState("");
    const addPassword = () => {
        Axios.post("http://localhost:3001/addpassword", {
            password: password,
            title: title,
        });
    };


    function refreshPage() {
        window.location.reload(false);
      }

    const validateForm = () => {
        const { title, password } = form;
        console.log(`validateForm  ${title} ${password}`);
        const newErrors = {};
        if (!title || title.length === 0 || title == 0) {
            newErrors.title = "Site name must between 2 to 20 character";
        } else if (title.length < 2) {
            newErrors.title = "Site has to be more than 2 character long!";
        } else if (title.length > 20) {
            newErrors.title = "Site has to be less than 20 character long!";
        }
        if (!password || password.length === 0 || password == 0)
            newErrors.password = "Password must betweem8 to 20 character";
        else if (password < 8 || password > 20)
            newErrors.password =
                "Password to the site between 8 to 20 character";

        return newErrors;
    };

    const hanleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            console.log(formErrors);
        }
        if (Object.keys(formErrors).length === 0) {
            console.log(form);
            console.log("form submitted");
            addPassword()
            refreshPage()
        }
    };

    return (
        <Container>
            <Row className="justify-content-around">  
                <Col className="col-sm-8">
                    <Form className="bg-secondary form">
                        <Form.Group
                            as={Row}
                            className="mb-3 justify-content-around"
                        >
                            <Form.Label as={Col} className="text-white col-sm-3">
                                Site
                            </Form.Label>
                            <Col  className="col-sm-8">
                                <Form.Control
                                    maxLength={20}
                                    placeholder="ex. facebook.com"
                                    value={form.title}
                                    onChange={(event) => {
                                        setField("title", event.target.value);
                                        // console.log(title)
                                    }}
                                    isInvalid={!!errors.title}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.title}
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>
                        <Form.Group
                            as={Row}
                            className="mb-3 justify-content-around"
                        >
                            <Form.Label
                                as={Col}
                                className="text-white col-sm-3"
                            >
                                Password
                            </Form.Label>
                            <Col className="col-sm-8">
                                <Form.Control 
                                    maxLength={20}
                                    placeholder="ex. password1234"
                                    value={form.password}
                                    onChange={(event) => {
                                        setField(
                                            "password",
                                            event.target.value
                                        );
                                        // console.log(password)
                                    }}
                                    isInvalid={!!errors.password}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.password}
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>
                        <Button
                            as="input"
                            type="submit"
                            value="Submit"
                            onClick={hanleSubmit}
                        />
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
export default Addpassword;
