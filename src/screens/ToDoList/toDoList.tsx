import React, { useState } from "react";
import {TouchableOpacity} from "react-native";
import { TodoItem } from "../../reducers/todoReducer";
import {ItemContainer, Icons, TodoTitle, TodoDescription, ToDoContainer, ToDoContent, CheckboxContainer} from "../../constans/Layout";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { removeTodo, toggleCheck } from "../../actions";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";

export default function ToDoListItem({ id, title, description }: Partial<TodoItem>) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [currentCheckbox, setCurrentCheckbox] = useState<"blank" | "checked">("blank");

  const handleEditButton = (): void => {
    navigation.navigate("AddToDo", {
      todoId: id,
      todoTitle: title,
      todoContent: description,
    });
  };

  const handleCheckbox = (): void => {
    dispatch(toggleCheck({id}));
    if (currentCheckbox === "blank") setCurrentCheckbox("checked");
    else setCurrentCheckbox("blank");
  };

  const handleDeleteButton = (): void => {
    dispatch(removeTodo({id}));
  };

  return (
    <ItemContainer>
      <TouchableOpacity onPress={handleCheckbox}>
        <ToDoContainer>
          <CheckboxContainer>
            {currentCheckbox === "blank" ? (
              <MaterialCommunityIcon name="checkbox-blank-outline" size={35} color='white'/>
            ) : (
              <MaterialCommunityIcon name="checkbox-marked" size={35} color='white'/>
            )}
          </CheckboxContainer>
          <ToDoContent>
            {<TodoTitle checked={currentCheckbox}>{title}</TodoTitle>}
            {description.length > 0 && <TodoDescription checked={currentCheckbox}>{description}</TodoDescription>}
          </ToDoContent>
        </ToDoContainer>
      </TouchableOpacity>
      <Icons>
        <TouchableOpacity onPress={handleEditButton}>
          <MaterialCommunityIcon name='pencil-plus-outline' color='white' size={35}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDeleteButton}>
            <MaterialCommunityIcon name='delete' color='white' size={35}/>
        </TouchableOpacity>
      </Icons>
    </ItemContainer>
  );
}
