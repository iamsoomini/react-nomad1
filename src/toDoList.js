import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === "") return;
    setToDos((current) => [toDo, ...current]);
    setToDo("");
  } 
  const onChange = (event) => setToDo(event.target.value); 

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do ..."/>
          <button>Add To ToDos</button>
      </form>
      <hr/>
      {toDos.map((item, index) => <li key={index}>{item}</li> )}
    </div>
  );
}

export default App;
