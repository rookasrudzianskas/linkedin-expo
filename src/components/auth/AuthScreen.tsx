//@ts-nocheck
import React, {useState} from 'react';
import SignInScreen from "@/components/auth/SignInScreen";
import {View, Text, TouchableOpacity} from "react-native";
import SignUpScreen from "@/components/auth/SignUpScreen";

const AuthScreen = () => {
  const [isSignIn, setIsSignIn] = useState('signin');
  return (
    <View className="flex flex-1 items-center justify-center">
      <Text className="mt-56 mb-2">Do you have an account?</Text>
      <View className="flex flex-row space-x-4 mb-5">
        <TouchableOpacity onPress={() => setIsSignIn('signin')}>
          <Text>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => setIsSignIn('signup')}>
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
      {isSignIn === 'signin' ? <SignInScreen /> : <SignUpScreen />}
    </View>
  );
};

export default AuthScreen;
