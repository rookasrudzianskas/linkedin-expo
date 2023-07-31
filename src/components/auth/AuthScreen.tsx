//@ts-nocheck
import React, {useState} from 'react';
import SignInScreen from "@/components/auth/SignInScreen";
import {View, Text, TouchableOpacity} from "react-native";
import SignUpScreen from "@/components/auth/SignUpScreen";

const AuthScreen = () => {
  const [isSignIn, setIsSignIn] = useState('signin');
  return (
    <View className="flex flex-1 items-center justify-center">
      <Text className="mt-[500px]">Do you have an account?</Text>
      <TouchableOpacity onPress={() => setIsSignIn('signin')}>
        <Text>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => setIsSignIn('signup')}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
      {isSignIn === 'signin' ? <SignInScreen /> : <SignUpScreen />}
    </View>
  );
};

export default AuthScreen;
