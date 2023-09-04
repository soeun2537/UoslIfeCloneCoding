import React from "react";
import styled from "styled-components/native";
import { Text, ScrollView } from "react-native";
import CommunityBtn from "./CommunityBtn";
import CommunityPost from "./CommunityPost";
import CommunityBanner from "./CommunityBanner";
import CommunityEntirePost from "./CommunityEntirePost";

const Container = styled.View`
  flex: 1;
  flex-direction: column;
`;

const BtnWrapper = styled.View`
  height: 80px;
  flex-direction: row;
`;

const Community = () => (
  <Container>
    <ScrollView showsVerticalScrollIndicator={false}>
      <BtnWrapper>
        <CommunityBtn name="chatbox-ellipses" color="#fdcb6e" text="교내공지" />
        <CommunityBtn name="book" color="#0984e3" text="도서관" />
        <CommunityBtn name="map" color="#ff7675" text="캠퍼스맵" />
        <CommunityBtn name="fast-food" color="#00b894" text="학식" />
        <CommunityBtn name="megaphone" color="#b2bec3" text="버그제보" />
      </BtnWrapper>
      <CommunityBanner text="광고 문의 바랍니다." />
      <CommunityPost
        iconName="newspaper"
        titleText="최신 글"
        postText1="시대광장"
        contentText1="아니 진짜 어디에나 있네"
        postText2="시대광장"
        contentText2="인턴 끝난 기념"
        postText3="홍보게시판"
        contentText3="[학생미래지원센터] 취업준비가 막막하다..."
        postText4="홍보게시판"
        contentText4="[제휴이벤트] 일반대학원 총학생회 출범 ..."
      />
      <CommunityPost
        iconName="flame"
        titleText="HOT 게시판"
        postText1="취업-진로게시판"
        contentText1="<데이터 분석 자격증 ADP 합격수기>"
        postText2="시대광장"
        contentText2="시대생 일부 서비스 종료 사전 안내"
        postText3="하늘못(익명게시판)"
        contentText3="시대팅 짤막한 후기"
        postText4="시대광장"
        contentText4="요즘 삶의 보람을 주는 것"
      />
      <CommunityEntirePost text="전체 게시판 보기" />
    </ScrollView>
  </Container>
);
export default Community;
