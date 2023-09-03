import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

const EntirePost = styled.View`
  height: 60px;
  justify-content: center;
  align-items: center;
  margin: 10px 15px 0px 15px;
  background-color: white;
  border-radius: 20px;
  border: 1px solid #dee1e5;
`;

const ContentWrap = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`;

const ContentText = styled.Text`
  font-size: 17px;
  font-weight: 700;
  letter-spacing: -0.2;
`;

export default function CommunityEntirePost({ text }) {
  return (
    <EntirePost>
      <ContentWrap>
        <ContentText>{text}</ContentText>
        <Ionicons name="chevron-forward-outline" size={20} color="#9099A5" />
      </ContentWrap>
    </EntirePost>
  );
}
