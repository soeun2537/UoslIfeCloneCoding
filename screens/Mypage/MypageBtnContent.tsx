import styled from "styled-components/native";
import { EvilIcons } from "@expo/vector-icons";

const ContentWrap = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 17px;
`;

const BtnText = styled.Text`
  font-size: 13px;
  color: #646d78;
  letter-spacing: -0.2;
  font-weight: 500;
  margin-right: 10px;
`;

export default function MypageBtnContent({ text }) {
  return (
    <ContentWrap>
      <BtnText>{text}</BtnText>
      <EvilIcons name="chevron-right" size={22} color="#9099A5" />
    </ContentWrap>
  );
}
