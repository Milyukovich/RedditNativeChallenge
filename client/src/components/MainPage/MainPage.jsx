import React from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";
import Header from "../Header/Header";
import LowerMenu from "../LowerMenu/LowerMenu";
import PostList from "../PostList/PostList";

export default function MainPage() {
  return (
    <View>
      <Header />
      {/* <PostList /> */}
      <LowerMenu />
    </View>
  );
}
