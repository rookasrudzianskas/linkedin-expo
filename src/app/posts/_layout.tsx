import {useColorScheme} from "react-native";
import {Stack} from "expo-router";

function PostsLayout() {
  const colorScheme = useColorScheme();

  return (
      <Stack>
        <Stack.Screen name="[id]" options={{ headerShown: false }} />
      </Stack>
  );
}
