import React from "react";

function FormList({ taskList, OnDelete, OnToggle, OnEdit }) {
  return (
    <section className="container-fluid mt-5">
      <div className="row">
        <div className="col-md-5 m-auto">
          <ul className="list-group">
            {taskList.length === 0 && <li className="list-group-item">No tasks to show</li>}

            {taskList.map((task) => (
              <li
                key={task.id}
                className="list-group-item d-flex align-items-center justify-content-between"
              >
                {/* Left section: checkbox + text */}
                <div className="d-flex align-items-center">
                  <input
                    type="checkbox"
                    className="form-check-input me-2"
                    checked={task.isChecked}
                    onChange={() => OnToggle(task.id)}
                  />

                  <span
                    className={`h6 mb-0 ${
                      task.isChecked ? "text-decoration-line-through" : ""
                    }`}
                  >
                    {task.task}
                  </span>
                </div>

                {/* Right section: buttons */}
                <div className="d-flex align-items-center">
                  <button
                    className="btn btn-lg me-2"
                    onClick={() => OnEdit(task.id)}
                  >
                    <i className="bi bi-pencil-square"></i>
                  </button>

                  <button
                    className="btn btn-lg"
                    onClick={() => OnDelete(task.id)}
                  >
                    <i className="bi bi-trash3"></i>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default FormList;
