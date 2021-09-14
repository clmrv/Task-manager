import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  listTitleChanged,
  listItemAdded,
  listItemMarked,
} from "../../store/actionCreators";
import TodoItem from "../TodoItem";
import Input from "../Input";
import AddButton from "../AddButton";
import {
  TodoListContainer,
  AddNewTaskContainer,
  TitleText,
  TitleWrapper,
} from "./styled";

export default function TodoList({ id }) {
  const dispatch = useDispatch();
  const listData = useSelector((store) => store.find((list) => list.id === id));

  /*
    improvement todo:
      move mode to redux store
  */

  const [addTaskMode, setAddTaskMode] = useState(false);
  const [changeTitleMode, setChangeTitleMode] = useState(false);

  useEffect(
    () => !listData.title && setChangeTitleMode(true),
    [listData.title]
  );

  const handleAddButton = () => !changeTitleMode && setAddTaskMode(true);
  const handleChangeTitleButton = () =>
    !addTaskMode && setChangeTitleMode(true);

  const addListItem = (text) => {
    text && dispatch(listItemAdded(listData.id, text));
    setAddTaskMode(false);
  };

  const changeTitle = (title) => {
    title && dispatch(listTitleChanged(listData.id, title));
    setChangeTitleMode(false);
  };

  const Title = () => (
    <TitleWrapper>
      {changeTitleMode ? (
        <Input onSubmit={(text) => changeTitle(text)} text={listData.title} />
      ) : (
        <TitleText onClick={handleChangeTitleButton}>
          {listData.title}
        </TitleText>
      )}
    </TitleWrapper>
  );

  const Items = () =>
    listData.items.map((item) => (
      <TodoItem
        key={item.id}
        item={item}
        onChange={() => dispatch(listItemMarked(listData.id, item.id))}
      />
    ));

  const AddNewTask = () => (
    <AddNewTaskContainer>
      {addTaskMode ? (
        <Input onSubmit={(text) => addListItem(text)} />
      ) : (
        <AddButton onClick={() => handleAddButton()} />
      )}
    </AddNewTaskContainer>
  );

  return (
    <TodoListContainer>
      <Title />
      <Items />
      <AddNewTask />
    </TodoListContainer>
  );
}
