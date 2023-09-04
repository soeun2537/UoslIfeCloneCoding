import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

const Btn = styled.TouchableOpacity`
  flex: 1;
  height: 90%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  margin: 8px;
  border-radius: 15px;
  border: 1px solid #dee1e5;
`;

const BtnText = styled.Text`
  font-weight: 500;
  letter-spacing: -0.2;
`;

export default function SchoolBtn({ name, color, text }) {
  return (
    <Btn>
      <Ionicons
        name={name}
        size={20}
        color={color}
        style={{ marginBottom: -3 }}
      />
      <BtnText>{text}</BtnText>
    </Btn>
  );
}
