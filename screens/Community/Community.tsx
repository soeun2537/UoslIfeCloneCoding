import React from "react";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity } from "react-native";
import CommunityBtn from "./CommunityBtn";

const BtnComponent = styled.View`
  flex: 0.15;
  flex-direction: row;
`;

const Community = () => (
  <BtnComponent>
    <CommunityBtn name="chatbox-ellipses" color="yellow" text="교내공지"/>
    <CommunityBtn name="book" color="blue" text="도서관"/>
    <CommunityBtn name="map" color="red" text="캠퍼스맵"/>
    <CommunityBtn name="fast-food" color="green" text="학식"/>
    <CommunityBtn name="megaphone" color="grey" text="버그제보"/>
  </BtnComponent>
);
export default Community;
