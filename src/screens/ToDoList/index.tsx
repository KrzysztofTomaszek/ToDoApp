import React from "react";
import {ScrollView, FlatList} from "react-native";
import {useSelector} from "react-redux";
import {TodoReducer, TodoItem} from "../../reducers/todoReducer";
import ToDoListItem from "./toDoList";
import {createStackNavigator} from "@react-navigation/stack";
import  AddToDo from "../AddAndEditItem";
import {useNavigation} from "@react-navigation/native";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import {AddItemButton, Container, ToDoHeader, TitleText, EmptyImage, EmptyContainer} from "../../constans/Layout";

function ToDoList() {
  const navigation = useNavigation();
  const todoArray: Array<TodoItem> = useSelector((state: TodoReducer) => state.todoArray);

  return (
    <Container>
      <ToDoHeader>
        <TitleText>Todo List</TitleText>        
      </ToDoHeader>
      <ScrollView>
        {!todoArray.length && (
          <EmptyContainer>
            <EmptyImage resizeMode="contain" source={require("../../../assets/empty.png")} />            
          </EmptyContainer>
        )}
        <FlatList
          data={todoArray}
          renderItem={({ item }) => (<ToDoListItem id={item.id} title={item.title} description={item.description}/>)}
          keyExtractor={(item: TodoItem) => item.id.toString()}
        />
      </ScrollView>
      <AddItemButton onPress={() => navigation.navigate("AddToDo")}>
        <MaterialCommunityIcon name="plus" size={45} color="#fff" />
      </AddItemButton>
    </Container>
  );
}

const ToDoNav = createStackNavigator();
function ToDoListScreen() {
  return (    
    <ToDoNav.Navigator mode="modal">
      <ToDoNav.Screen name="ToDoList" component={ToDoList} options={{ headerShown: false }} />
      <ToDoNav.Screen name="AddToDo" component={AddToDo} options={{ headerShown: false }} />      
    </ToDoNav.Navigator>    
  );
}
export default ToDoListScreen;