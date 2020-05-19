import React, { useState, useEffect } from "react";
import { GestureResponderEvent, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../../actions";
import { TodoItem, TodoReducer } from "../../reducers/todoReducer";
import {AddContainer, TitleText, TodoInputContainer, TodoTextInput, ConfirmationButton, ConfirmationButtonText} from "../../constans/Layout";

interface routeParams {
  todoId?: Symbol;
  todoTitle?: string;
  todoContent?: string;
}

interface Route {
  params: routeParams;
}

interface AddToDoProps {
  navigation: any;
  route: Route;
}

const defaultTodo = {
  todoId: Symbol(Date.now()),
  todoTitle: "",
  todoContent: "",
};

export default function AddToDo({ navigation, route }: AddToDoProps) {
  const dispatch = useDispatch();
  const { todoId, todoTitle, todoContent }: routeParams = route.params ? route.params : defaultTodo;
  const doesTodoAlreadyExist = useSelector((state: TodoReducer): Array<TodoItem> => state.todoArray as Array<TodoItem>)
    .filter((item: TodoItem) => item.id == todoId)
    .some((item: TodoItem) => item);

  const [currentTodo, setTodoContent] = useState<string | null>(todoContent);
  const [currentTodoTitle, setTodoTitle] = useState<string | null>(todoTitle);

  const handleButton = (event: GestureResponderEvent) => {
    if (doesTodoAlreadyExist) {
      if (currentTodoTitle.length) {
        dispatch(
          updateTodo({
            id: todoId,
            title: currentTodoTitle,
            description: currentTodo,
          })
        );
        setTodoContent("");
        navigation.goBack();
      } else {
        Alert.alert(
          "Cannot edit this item",
          "Title must exist",
          [{ text: "OK"}],
          { cancelable: false }
        );
      }
    } else {
      if (currentTodoTitle.length) {
        dispatch(
          addTodo({
            id: Symbol(Date.now()),
            title: currentTodoTitle,
            description: currentTodo,
            checked: false,
          })
        );
        setTodoContent("");
        navigation.goBack();
      } else {
        Alert.alert(
          "Cannot add new item",
          "Title must exist",
          [{ text: "OK" }],
          { cancelable: false }
        );
      }
    }
  };
  
  return (
    <AddContainer keyboardShouldPersistTaps="always">
      <TitleText>{doesTodoAlreadyExist ? "Edit task" : "Add task"}</TitleText>
      <TodoInputContainer>
        <TodoTextInput
          placeholder="Title"
          onChangeText={(text: string) => setTodoTitle(text)}
          value={currentTodoTitle}
        />
      </TodoInputContainer>
      <TodoInputContainer>
        <TodoTextInput
          multiline
          placeholder="Description"
          onChangeText={(text: string) => setTodoContent(text)}
          value={currentTodo}
        />
      </TodoInputContainer>
      <ConfirmationButton onPress={handleButton} backgroundColor="green">
        <ConfirmationButtonText>{doesTodoAlreadyExist ? "Edit" : "Add"}</ConfirmationButtonText>
      </ConfirmationButton>
      <ConfirmationButton onPress={() => navigation.goBack()} backgroundColor="red">
        <ConfirmationButtonText>Cancel</ConfirmationButtonText>
      </ConfirmationButton>
    </AddContainer>
  );
}
