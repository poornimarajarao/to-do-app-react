import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import FormList from './Components/FormList';

function App() {
  const [taskInput, setTaskInput] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [editId, setEditId] = useState(null);

  function handleInput(e) {
    e.preventDefault();
    if (!taskInput) return;

    if (editId) {
      // update task
      setTaskList(prev =>
        prev.map(task =>
          task.id === editId ? { ...task, task: taskInput } : task
        )
      );
      setEditId(null);
      setTaskInput('');
      return;
    }

    // add new task
    setTaskList([...taskList, { id: Date.now(), task: taskInput, isChecked: false }])
    setTaskInput('');
  }

  function OnDelete(id) {
    setTaskList(prev => prev.filter(task => task.id !== id));
  }

  function OnToggle(id) { 
    setTaskList(prev =>
      prev.map(task =>
        task.id === id ? { ...task, isChecked: !task.isChecked } : task
      )
    );
  }

  function OnEdit(id) {
    let editable = taskList.find(t => t.id === id);
    setEditId(id);
    setTaskInput(editable.task); // load text into input box
  }

  return (
    <>
      <Navbar />
      <section className='container-fluid mt-3'>
        <div className='row'>
          <div className='col-md-5 m-auto'>
            <form onSubmit={handleInput}>
              <div className='input-group'>
                <input 
                  type="text" 
                  placeholder='Enter the task' 
                  value={taskInput} 
                  onChange={(e) => setTaskInput(e.target.value)} 
                  className='form-control'
                />
                <button className='btn btn-dark'>
                  {editId ? "Update" : "Add task"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <FormList 
        taskList={taskList} 
        OnDelete={OnDelete} 
        OnToggle={OnToggle} 
        OnEdit={OnEdit}
      />
    </>
  );
}
export default App;
