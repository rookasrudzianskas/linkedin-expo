//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useAuth} from "@clerk/clerk-expo";

const Jobs = () => {
  const {signOut} = useAuth();
  return (
    <View className="mt-16 flex items-center justify-center">
      <TouchableOpacity onPress={() => signOut()} className="bg-blue-600 px-10 py-2 mb-4 rounded-md">
        <Text className="text-white">Sign Out</Text>
      </TouchableOpacity>
      <Text>
        byrookas 🚀
      </Text>
    </View>
  );
};

export default Jobs;
