import styled from "styled-components/native";

const Block = styled.View`
  flex-direction: row;
  justify-content: center;
  margin: 20px;
`;

const LogoutText = styled.Text`
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.2px;
  text-decoration-line: underline;
  color: #646d78;
`;

export default function MypageLogout({ text }) {
  return (
    <Block>
      <LogoutText>{text}</LogoutText>
    </Block>
  );
}
