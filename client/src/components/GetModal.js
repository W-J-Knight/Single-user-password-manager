import { useState, useEffect } from "react";
import Axios from "axios";

function GetModal({ closeModal, title, uncryptedPassword, id, iv }) {
    const [showPassword, setShowPassword] = useState("");

    const decryptPassword = (encryption, iv) => {
        Axios.post("http://localhost:3001/passwords/decrypt", {
            password: encryption,
            iv: iv,
        }).then((response) => {
            setShowPassword(response.data);
        });
    };

    decryptPassword(uncryptedPassword, iv);
    return (
        <div className="modal_sytle">
            <div className="overlay_style">
                <div className="info">
                    <h3>{title}</h3>
                    <p>
                        Password is </p><p className="bold">{showPassword}</p>
                    
                </div>
                <button onClick={() => closeModal(false)}>Close</button>
            </div>
        </div>
    );
}

export default GetModal;