import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import CommunityPostContent from "./CommunityPostContent";

const Post = styled.View`
  height: 150px;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin: 10px 15px 0px 15px;
  border-radius: 20px;
  border: 1px solid #dee1e5;
`;

const Title = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  margin: 0px 0px 10px 0px;
  background-color: white;
`;

const TitleText = styled.Text`
  font-size: 17px;
  font-weight: 700;
  margin-left: 5px;
  letter-spacing: -0.2;
`;

const Content = styled.View`
  width: 90%;
  height: 60%;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export default function CommunityPost({
  iconName,
  titleText,
  postText1,
  postText2,
  postText3,
  postText4,
  contentText1,
  contentText2,
  contentText3,
  contentText4,
}) {
  return (
    <Post>
      <Title>
        <Ionicons name={iconName} size={20} color="#1C60F0" />
        <TitleText>{titleText}</TitleText>
      </Title>
      <Content>
        <CommunityPostContent postText={postText1} contentText={contentText1} />
        <CommunityPostContent postText={postText2} contentText={contentText2} />
        <CommunityPostContent postText={postText3} contentText={contentText3} />
        <CommunityPostContent postText={postText4} contentText={contentText4} />
      </Content>
    </Post>
  );
}
