import React from "react";
import styled from "styled-components/native";
import { View, Text, ScrollView } from "react-native";
import SchoolBanner from "./SchoolBanner";
import SchoolBtn from "./SchoolBtn";

const Container = styled.View`
  flex: 1;
  flex-direction: column;
`;

const BtnWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  height: 35%;
  margin: 0px 7px;
  flex-direction: row;
`;

const School = () => (
  <Container>
    <ScrollView showsVerticalScrollIndicator={false}>
      <SchoolBanner text="시대팅 배너" />
      <BtnWrapper>
        <SchoolBtn name="book" color="#0984e3" text="도서관" />
        <SchoolBtn name="fast-food" color="#00b894" text="학식" />
        <SchoolBtn name="qr-code-sharp" color="#1A1B1F" text="모바일 학생증" />
      </BtnWrapper>
      <BtnWrapper>
        <SchoolBtn name="chatbox-ellipses" color="#fdcb6e" text="공지사항" />
        <SchoolBtn name="map" color="#ff7675" text="캠퍼스맵" />
        <SchoolBtn name="calendar" color="#FF7062" text="시간표" />
      </BtnWrapper>
    </ScrollView>
  </Container>
);
export default School;
