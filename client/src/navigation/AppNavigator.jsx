import "react-native-gesture-handler"; // мб нужно удалить
import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import MainPage from "../components/MainPage/MainPage";
import SignIn from "../components/Forms/SignIn/SignIn";
import SignUp from "../components/Forms/SignUp/SignUp";
import UserProfileView from "../components/Profile/Profile";
import OnePostPage from "../components/OnePostPage/OnePostPage";
import AddPostList from "../components/addPostList/AddPostList";
import CreateNewPost from "../components/CreatePost/CreatePost";
import { useSelector } from "react-redux";

const Stack = createStackNavigator();

export default function Navigate() {
  const user = useSelector(state => state.user);

  const [curUser, setCurUser] = useState(null);

  useEffect(() => {
    setCurUser(user);
  }, [user]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {curUser ? (
          <Stack.Screen
            name="MainPage"
            component={MainPage}
            options={{ title: "Main Page" }}
          />
        ) : (
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ title: "Registration" }}
          />
        )}

        <Stack.Screen
          name="CreatePost"
          component={CreateNewPost}
          options={{ title: "Add new Post" }}
        />

        <Stack.Screen
          name="Profile"
          component={UserProfileView}
          options={{ title: "Your profile" }}
        />
        <Stack.Screen
          name="OnePostPage"
          component={OnePostPage}
          options={{ title: "Post" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
