import styled from "styled-components/native";

const ContentWrap = styled.View`
  flex-direction: row;
  align-items: center;
`;

const PostText = styled.Text`
  font-size: 13px;
  letter-spacing: -0.2;
  font-weight: 700;
  margin-right: 10px;
`;

const ContentText = styled.Text`
  font-size: 13px;
  letter-spacing: -0.2;
  color: #646d78;
`;

export default function CommunityPostContent({ postText, contentText }) {
  return (
    <ContentWrap>
      <PostText>{postText}</PostText>
      <ContentText>{contentText}</ContentText>
    </ContentWrap>
  );
}
