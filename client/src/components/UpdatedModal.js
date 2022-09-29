import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function UpdateModal({
    passwordList,
    setPasswordList,
    closeModal,
    title,
    uncryptedPassword,
    id,
    iv,
}) {
    const [password, setPassword] = useState("");
    // const [newPassword, setNewPassword] = useState("");
    const [showPassword, setShowPassword] = useState("");
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
    // useEffect(() => {
    //     Axios.get("http://localhost:3001/showpasswords").then((response) => {
    //         showPassword(response.data);
    //     });
    // });
    const decryptPassword = (encryption, iv) => {
        Axios.post("http://localhost:3001/decryptpassword", {
            password: encryption,
            iv: iv,
        }).then((response) => {
            setShowPassword(response.data);
        });
    };
    function refreshPage() {
        window.location.reload(false);
    }
    const updatePassword = (password, id) => {
        console.log(password);
        console.log(id);
        Axios.put("http://localhost:3001/updatepassword", {
            password: password,
            id: id,
        }).then((response) => {
            // decryptPassword(password, iv);
            setPasswordList(
                passwordList.map((val) => {
                    decryptPassword(val.password, val.iv);
                    return val.id === id
                        ? {
                              title: val.title,
                              id: val.id,
                              password: val.password,
                              iv: val.iv,
                          }
                        : val;
                })
            );
            decryptPassword(password, iv);

            closeModal(false);
          refreshPage()
        });
    };
    const validateForm = () => {
        console.log(`Form ${form}`)
        const { newPassword } = form;
        console.log(`validateForm ${newPassword}`);
        const newErrors = {};
        if (!newPassword || newPassword.length === 0 || newPassword == 0)
            newErrors.newPassword = "Password must betweem8 to 20 character";
        else if (8 > newPassword)
            newErrors.newPassword =
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
            const { newPassword } = form;
            console.log(`Form ${form}`);
            // setNewPassword(({ newPassword} = form));
            updatePassword(newPassword, id);
        }
    };
    console.log(showPassword);

    decryptPassword(uncryptedPassword, iv);
    return (
        <div className="modal_sytle">
            <div className="overlay_style">
                <div className="info">
                    <h3>{title}</h3>
                    <p>Password is </p>
                    <p className="bold">{showPassword}</p>
                    <Form>
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
                                    value={form.newPassword}
                                    onChange={(event) => {
                                        setField(
                                            "newPassword",
                                            event.target.value
                                        );
                                        // console.log(password)
                                    }}
                                    isInvalid={!!errors.newPassword}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.newPassword}
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>
                        {/* <button onClick={() => closeModal(false)}>CANCEL</button> */}
                        <Button
                            className="mx-3"
                            as="input"
                            type="button"
                            value="Cancel"
                            onClick={() => closeModal(false)}
                        />
                        <Button
                            id={id}
                            as="input"
                            type="submit"
                            value="Submit"
                            onClick={hanleSubmit}
                        />
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default UpdateModal;
