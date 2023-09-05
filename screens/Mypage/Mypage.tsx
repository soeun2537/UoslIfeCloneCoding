import React from "react";
import styled from "styled-components/native";
import { ScrollView } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import MypageBtnTitle from "./MypageBtnTitle";
import MypageBtnContent from "./MypageBtnContent";
import MypageLogout from "./MypageLogout";
import MypageProfile from "./MypageProfileText";

const Container = styled.View`
  flex: 1;
  flex-direction: column;
`;

const ProfileContainer = styled.View`
  margin: 30px 15px 0px 15px;
  align-items: center;
`;

const ProfileImage = styled.Image`
  width: 100;
  height: 100;
  border-radius: 100px;
`;

const Post = styled.View<{ height: string }>`
  height: ${({ height }) => height};
  justify-content: center;
  align-items: flex-start;
  background-color: white;
  padding: 15px;
  margin: 15px;
  margin-bottom: 0px;
  border-radius: 15px;
  border: 1px solid #dee1e5;
`;

const SmallPost = styled(Post)`
  flex-direction: row;
  justify-content: space-between;
`;

const Content = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

const Mypage = () => (
  <Container>
    <ScrollView>
      <ProfileContainer>
        <ProfileImage source={require("./profile.png")} />
        <MypageProfile
          name="이소은"
          nickname="인지 03"
          major="인공지능학과"
          id="2022480014"
        />
      </ProfileContainer>
      <Post height="200px">
        <MypageBtnTitle titleText="나의 프로필" />
        <Content>
          <MypageBtnContent text="포털 계정 연동 [완료]" />
          <MypageBtnContent text="닉네임 변경" />
          <MypageBtnContent text="비밀번호 변경" />
          <MypageBtnContent text="회원 탈퇴" />
        </Content>
      </Post>
      <SmallPost height="60px">
        <MypageBtnTitle titleText="나의 활동" />
        <EvilIcons name="chevron-right" size={20} color="#9099A5" />
      </SmallPost>
      <SmallPost height="60px">
        <MypageBtnTitle titleText="카카오톡 채널 문의" />
        <EvilIcons name="chevron-right" size={20} color="#9099A5" />
      </SmallPost>
      <Post height="100px">
        <MypageBtnTitle titleText="앱 설정" />
        <Content>
          <MypageBtnContent text="알림 설정" />
        </Content>
      </Post>
      <Post height="200px">
        <MypageBtnTitle titleText="앱 정보" />
        <Content>
          <MypageBtnContent text="이용 약관 및 정책" />
          <MypageBtnContent text="개인정보 처리 방침" />
          <MypageBtnContent text="커뮤니티 이용수칙" />
          <MypageBtnContent text="현재 앱 버전 확인" />
        </Content>
      </Post>
      <MypageLogout text="로그아웃" />
    </ScrollView>
  </Container>
);

export default Mypage;
