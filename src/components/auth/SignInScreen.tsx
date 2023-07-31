import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useSignIn } from "@clerk/clerk-expo";

export default function SignInScreen() {
  const { signIn, setActive, isLoaded } = useSignIn();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSignInPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignIn = await signIn.create({
        identifier: emailAddress,
        password,
      });
      // This is an important step,
      // This indicates the user is signed in
      await setActive({ session: completeSignIn.createdSessionId });
    } catch (err: any) {
      console.log(err);
    }
  };
  return (
    <View className="flex-1 space-y-2 items-center">
      <View className="space-y-2">
        <TextInput
          autoCapitalize="none"
          value={emailAddress}
          placeholder="Email..."
          className="border-2 border-gray-300 rounded-md w-64 h-10 px-2"
          onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
        />
      </View>

      <View>
        <TextInput
          value={password}
          placeholder="Password..."
          secureTextEntry={true}
          className="border-2 border-gray-300 rounded-md w-64 h-10 px-2"
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity
        className="bg-blue-500 rounded-md px-2 py-1"
        onPress={onSignInPress}>
        <Text
          className="text-white text-center"
        >Sign in</Text>
      </TouchableOpacity>
    </View>
  );
}
