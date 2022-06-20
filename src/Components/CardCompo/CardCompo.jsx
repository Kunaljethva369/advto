import React, { useState } from "react";
import Todo from "../Todo";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";

function CardCompo(props) {
  const navigate = useNavigate();
  const params = useParams();
  return (
    <div>
      <Routes>
        <Route path="/:todo" element={<Todo />} />
      </Routes>
      <div className="container">
        <div className="row">
          {props.data.length > 0
            ? props.data.map(function (e, index) {
                return (
                  <div className="col-lg-4" key={index}>
                    <div className="card">
                      {
                        <div className="card-body">
                          <h5 className="card-title">{e}</h5>
                          <a
                            onClick={() => {
                              navigate(e);
                            }}
                            className="btn btn-primary"
                          >
                            Show Task
                          </a>
                        </div>
                      }
                    </div>
                  </div>
                );
              })
            : "No Task Till Now"}
        </div>
      </div>
    </div>
  );
}

export default CardCompo;
