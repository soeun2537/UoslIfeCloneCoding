import styled from "styled-components/native";

const Container = styled.View`
  padding: 15px;
`;

const Block = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ProfileText = styled.Text`
  padding: 3px 2px;
  font-size: 17;
  font-weight: 600;
  letter-spacing: -0.2;
`;

const MajorText = styled.Text`
  padding: 3px 2px;
  font-size: 15;
  font-weight: 600;
  letter-spacing: -0.2;
  color: #646d78;
`;

export default function MypageProfile({ name, nickname, major, id }) {
  return (
    <Container>
      <Block>
        <ProfileText>{name}</ProfileText>
        <ProfileText>{"(" + nickname + ")"}</ProfileText>
      </Block>
      <Block>
        <MajorText>{major}</MajorText>
        <MajorText>{"(" + id + ")"}</MajorText>
      </Block>
    </Container>
  );
}
