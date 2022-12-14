import { useState, useEffect } from "react";
// promise base api
import Axios from "axios";
import GetModal from "../components/GetModal";

function GetPassword() {
    const [password, setPassword] = useState("");
    const [title, setTitle] = useState("");
    const [passwordList, setPasswordList] = useState([]);
    const [id, setId] = useState("");
    const [iv, setIv] = useState("");
    const [openModal, setOpenModel] = useState(false);
    useEffect(() => {
        Axios.get("http://localhost:3001/showpasswords").then((response) => {
            setPasswordList(response.data);
        });
    }, []);

    return (
        <>
            <div className="Passwords">
                {openModal && (
                    <GetModal
                        closeModal={setOpenModel}
                        title={title}
                        uncryptedPassword={password}
                        id={id}
                        iv={iv}
                    />
                )}
                {passwordList.map((val, key) => {
                    return (
                        <div
                            className="password"
                            onClick={() => {
                                setOpenModel(true);
                                setTitle(val.title);
                                setPassword(val.password);
                                setId(val.id);
                                setIv(val.iv);
                            }}
                            key={key}
                        >
                            <p>{val.title}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default GetPassword;