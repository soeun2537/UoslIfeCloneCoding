import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";

const Btn = styled.TouchableOpacity`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
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
      <Text>{text}</Text>
    </Btn>
  );
}
