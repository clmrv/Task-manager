import React from "react";
import { ItemText, TodoItemContainer } from "./styled";

export default function TodoItem({ item, onChange }) {
  return (
    <TodoItemContainer onClick={onChange}>
      <input
        type="checkbox"
        checked={item.completed}
        style={{ pointerEvents: "none" }}
      />
      <ItemText completed={item.completed}>{item.text}</ItemText>
    </TodoItemContainer>
  );
}
