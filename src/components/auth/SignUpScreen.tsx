import * as React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useSignUp } from "@clerk/clerk-expo";

export default function SignUpScreen() {
  const { isLoaded, signUp, setActive } = useSignUp();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [pendingVerification, setPendingVerification] = React.useState(false);
  const [code, setCode] = React.useState("");

  // start the sign-up process.
  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        emailAddress,
        password,
      });

      // send the email.
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      // change the UI to our pending section.
      setPendingVerification(true);
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  // This verifies the user using email code that is delivered.
  const onPressVerify = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      await setActive({ session: completeSignUp.createdSessionId });
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <View className="flex-1 items-center">
      {!pendingVerification && (
        <View className="space-y-2">
          <View className="">
            <TextInput
              autoCapitalize="none"
              className="border-2 border-gray-300 rounded-md w-64 h-10 px-2"
              value={emailAddress}
              placeholder="Email..."
              onChangeText={(email) => setEmailAddress(email)}
            />
          </View>

          <View className="">
            <TextInput
              value={password}
              className="border-2 border-gray-300 rounded-md w-64 h-10 px-2"
              placeholder="Password..."
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
            />
          </View>

          <TouchableOpacity
            className="bg-blue-500 rounded-md px-2 py-1"
            onPress={onSignUpPress}>
            <Text
              className="text-white text-center"
            >Sign up</Text>
          </TouchableOpacity>
        </View>
      )}
      {pendingVerification && (
        <View className="space-y-3">
          <View>
            <TextInput
              value={code}
              placeholder="Code..."
              className="border-2 border-gray-300 rounded-md w-64 h-10 px-2"
              onChangeText={(code) => setCode(code)}
            />
          </View>
          <TouchableOpacity
            className="bg-blue-500 rounded-md px-2 py-1"
            onPress={onPressVerify}>
            <Text
              className="text-white text-center"
            >Verify Email</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
