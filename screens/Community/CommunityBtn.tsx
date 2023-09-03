import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

const Btn = styled.TouchableOpacity`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const BtnText = styled.Text`
  font-weight: 400;
  letter-spacing: -0.2;
`;

export default function CommunityBtn({ name, color, text }) {
  return (
    <Btn>
      <Ionicons
        name={name}
        size={24}
        color={color}
        style={{ marginBottom: 5 }}
      />
      <BtnText>{text}</BtnText>
    </Btn>
  );
}
