import React from "react";
import { Button, ListItem, ListItemText } from "@mui/material";
import { db } from "./firebase_config";
export default function TodoListItem({ todo, working, id }) {
  function toggleWorking() {
    db.collection("todo").doc(id).update({
      working: !working,
    });
  }

  function deletetodo() {
    db.collection("todo").doc(id).delete();
  }

  return (
    <div style={{ display: "flex" }}>
      <ListItem>
        <ListItemText
          primary={todo}
          secondary={working ? "Completed" : "Currently Working...."}
        />
      </ListItem>

      <Button onClick={toggleWorking}>{working ? "Undo" : "Done"}</Button>
      <Button onClick={deletetodo}>X</Button>
    </div>
  );
}
