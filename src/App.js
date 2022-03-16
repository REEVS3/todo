import "./App.css";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { db } from "./firebase_config";
import TodoListItem from "./Todo";

function App() {
  const [todo, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  useEffect(() => {
    getTodo();
  }, []); // run on launch

  function getTodo() {
    db.collection("todo").onSnapshot(function (querySnapshot) {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          working: doc.data().working,
        }))
      );
    });
  }

  function addTodo(e) {
    e.preventDefault();
    console.log("test");
    db.collection("todo").add({
      Working: false,
      todo: todoInput,
    });

    setTodoInput("");
  }

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <h1>My Todo List</h1>
        <form>
          <TextField
            id="standard-basic"
            label="Todo"
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
            variant="standard"
            style={{ maxWidth: "500px", width: "90vw" }}
          />
          <Button
            type="submit"
            variant="contained"
            onClick={addTodo}
            style={{ display: "none" }}
          ></Button>
        </form>

        <div style={{ maxWidth: "500px", width: "90vw" ,marginTop:"25px" }}> 
        {todo.map((todo) => (
          <TodoListItem 
          todo={todo.todo} 
          working={todo.working} 
          id={todo.id} 
          />
        ))}
        </div>
      </div>
    </div>
  );
}

export default App;
