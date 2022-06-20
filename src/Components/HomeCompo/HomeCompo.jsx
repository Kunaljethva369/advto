import React, { useState } from "react";
import CardCompo from "../CardCompo/CardCompo";
import "./HomeCompo.css";

function HomeCompo() {
  // const params = useParams();
  const [hide, setHide] = useState(true);
  const [initial, setInitial] = useState("");
  const [task, setTask] = useState([]);
  const openForm = () => {
    setHide(false);
  };
  const handleChange = (e) => {
    setInitial(e.target.value);
  };

  const formControl = (e) => {
    e.preventDefault();
    if (initial == "") {
      alert("Please Enter Your Task's Name");
    } else {
      setTask(() => [...task, initial]);
      setInitial(() => "");
      setHide(true);
    }
  };
  return (
    <>
      <button className="btn btn-dark" onClick={openForm}>
        Create
      </button>
      {hide ? (
        ""
      ) : (
        <div>
          <form onSubmit={formControl}>
            <div
              className="cross"
              onClick={() => {
                setHide(true);
              }}
            >
              X
            </div>
            <label>Name: </label>
            <input
              type="text"
              placeholder="Enter Your Task Name"
              value={initial}
              onChange={handleChange}
            />
            <button className="btn btn-success">Create Task Name</button>
          </form>
        </div>
      )}
      <CardCompo data={task} />
    </>
  );
}

export default HomeCompo;
