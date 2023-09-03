import { useState } from "react";
import AppLoading from "expo-app-loading";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import { Text } from "react-native";

export default function App() {
  const [ready, setReady] = useState(false);

  const startLoading = async () => {
    const fonts = await Font.loadAsync(Ionicons.font);
  };
  const finishLoading = () => setReady(true);

  if (!ready) {
    return (
      <AppLoading
        startAsync={startLoading}
        onFinish={finishLoading}
        onError={console.error}
      />
    );
  }
  return <Text>good</Text>;
}
