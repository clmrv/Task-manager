import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { listAdded } from "../actions/actionCreators";
import TodoList from "./TodoList";
import AddButton from "./AddButton";

const ListWrapper = ({ children }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "wrap",
      justifyContent: "center",
    }}
  >
    {children}
  </div>
);

const AddButtonWrapper = ({ children }) => (
  <div
    style={{
      margin: 40,
    }}
  >
    {children}
  </div>
);

export default function TodoListGroup() {
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.todoLists);

  const listsComponents = lists.map((list) => (
    <TodoList key={list.id} id={list.id} />
  ));

  return (
    <ListWrapper>
      {listsComponents}
      <AddButtonWrapper>
        <AddButton onClick={() => dispatch(listAdded())} />
      </AddButtonWrapper>
    </ListWrapper>
  );
}
