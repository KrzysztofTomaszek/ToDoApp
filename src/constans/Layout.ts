import { StyleSheet, Dimensions } from 'react-native';
import { colors } from './Colors';
import Constants from 'expo-constants';
import styled from "styled-components/native";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const wp = (percentage: number) => {
  const value = (percentage * width) / 100;
  return Math.round(value);
};

export default {
  window: {
    width,
    height
  },
  wp,
  statusBar: Constants.statusBarHeight,
  isSmallDevice: width < 375
};

export const AddItemButton = styled.TouchableOpacity`
  background-color: ${colors.red}; 
  width: 65px;
  height: 65px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 2;
  bottom: 10px;
  right: 10px;
  elevation: 8;
`;

export const Container = styled.View`
  flex: 1;
  padding: 10px;
  background-color: ${colors.black}; 
`;

export const ItemContainer = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #e0e0e0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  padding-left: 0;
`;

export const TitleText = styled.Text`
  font-weight: bold;
  font-size: 22px;
  margin: 20px;
  alignSelf: center;
  padding-bottom: 10px;
  color: ${colors.white};
`;

export const ToDoHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const EmptyContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  margin-top: 25%;
  padding: 5px;
`;

export const EmptyImage = styled.Image`
  width: 100%;
  height: 250px;
`;

export const ToDoContent = styled.View`
  max-width: 85%;
`;

export const Icons = styled.View`
display: flex;
flex-direction: row;
paddingLeft: 5%;
`;

export const TodoTitle = styled.Text`
  font-size: 18px;
  padding-bottom: 4px;
  color: ${colors.white};
  text-decoration-line: ${(props) => (props.checked === "checked" ? "line-through" : "none")};
`;

export const TodoDescription = styled.Text`
  color: ${colors.white};
  text-decoration-line: ${(props) => (props.checked === "checked" ? "line-through" : "none")};
`;

export const ToDoContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const CheckboxContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding-right: 15px;
`;

export const AddContainer = styled.ScrollView`
  flex: 1;
  padding: 10px;
  background-color: ${colors.black}; 
`;

export const AddTitle = styled.Text`
  font-size: 32px;
`;

export const TodoInputContainer = styled.View`
  min-height: 20px;
  color: ${colors.white};
  border-color: gray;
  border-width: 1px;
  margin: 0px 5px 10px 5px;
`;

export const TodoTextInput = styled.TextInput`
  padding: 12.5px;
  color: ${colors.white};
`;

export const ConfirmationButton = styled.TouchableOpacity`
  background-color: ${(props) => props.backgroundColor};
  padding: 12px;
  border-radius: 4px;
  elevation: 5;
  justify-content: center;
  align-items: center;
  margin-horizontal: 5px;
  margin-top: 8px;
`;

export const ConfirmationButtonText = styled.Text`
  font-size: 18px;
  max-width: 80%;
  color: ${colors.white};
  text-align: center;
`;

export const AccountName = styled.Text`
    margin: 20px;
    alignSelf:center;
    font-size: 16px;
    color: ${colors.white};
`;
export const AccountText = styled.Text`
    margin: 5px 20px;
    font-size: 16px;
    color: ${colors.white};
`;

export const AccountPage = styled.ScrollView`
  background-color: ${colors.black};  
`;

export const AccountAvatar = styled.Image`
  width: 150px;
  height: 150px;
  borderRadius: 100px;
  marginTop: 10px; 
  alignSelf:center;
`;
export const AccountTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #352345;
  margin: 25px;
  alignSelf:center;
  color: ${colors.white};
`;

export const ArticlePage = styled.ScrollView`
  padding: 0;
  background-color: ${colors.black}; 
`;

export const ArticleTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: ${colors.white};
`;

export const ArticleSubTitle = styled.Text`
  font-size: 15px;
  color: ${colors.white};
`;

export const ArticleParagraph = styled.Text`
  color: ${colors.white};
  flex: 1;
  flex-wrap: wrap;
  padding: 10px;
`;

export const ArticleHeaderContainer = styled.View`
  justify-content: center;
`;

export const ArticleSectionContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-horizontal: 15px;
`;

export const ArticleTitleContainer = styled.View`
  padding: 15px;
`;

export const ArticleHeaderImage = styled.Image`
  width: 100%;
  height: 300px;
`;

export const ArticleSectionImage = styled.Image`
  width: 300px;
  height: 300px;
  margin-vertical: 30px;
  marginLeft:15%;
`;

export const ArticlePar1Image = styled.Image`
  border-radius: 100px;
  margin-horizontal: 5px;
  width: 150px;
  height: 150px;
`;
export const ArticlePar2Image = styled.Image`
  margin-horizontal: 5px;
  width: 200px;
  height: 200px;
`;