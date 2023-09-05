import styled from "styled-components/native";

const Title = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: space-between;
`;

const TitleText = styled.Text`
  font-size: 17px;
  font-weight: 500;
  letter-spacing: -0.2;
`;

export default function MypageBtnTitle({ titleText }) {
  return (
    <Title>
      <TitleText>{titleText}</TitleText>
    </Title>
  );
}
