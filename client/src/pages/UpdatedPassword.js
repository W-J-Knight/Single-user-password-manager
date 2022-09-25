import UpdatedModal from "../components/UpdatedModal"
import { useState, useEffect } from "react";
import Axios from "axios";

function UpdatedPassWord() {
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
              <UpdatedModal
                  closeModal={setOpenModel}
                  title={title}
                  uncryptedPassword={password}
                  id={id}
                  iv={iv}
                  setPasswordList={setPasswordList}
                  passwordList={passwordList}
              />
          )}
              {passwordList.map((val,index) => {
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
                          key={index}
                      >
                          <p>{val.title}</p>
                      </div>
                  );
              })}
          </div>
      </>
      )
}

export default UpdatedPassWord