//@ts-nocheck
import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native';
import DUMMY_USER from '../../../assets/data/user.json';
import {User} from "@/types";
import {useRouter} from "expo-router";
import {EvilIcons} from "@expo/vector-icons";

const NewPost = () => {
  const [user, setUser] = useState<User>(DUMMY_USER);
  const router = useRouter();

  const OPTIONS = [
    {
      id: 0,
      icon: <EvilIcons name="image" size={24} color="gray" />
    },
    {
      id: 1,
      icon: <EvilIcons name="camera" size={24} color="gray" />
    },
    {
      id: 2,
      icon: <EvilIcons name="location" size={24} color="gray" />
    },
    {
      id: 3,
      icon: <EvilIcons name="spinner-2" size={24} color="gray" />
    }
  ]

  return (
    <View className="flex-1 bg-white">
      <TouchableOpacity activeOpacity={0.8} onPress={() => router.push<any>(`/users/${user.id}`)} className="flex bg-gray-100 rounded-lg max-w-[280px] m-5 flex-row items-center p-2">
        <Image source={{ uri: user.image }} style={styles.userImage} />
        <View>
          <Text className="font-[600] mb-1">{user.name}</Text>
          <Text className="text-[12px] text-gray-600">Post to Anyone</Text>
        </View>
      </TouchableOpacity>

      <View>
        <TextInput
          placeholder="What do you want to talk about?"
          className="h-[150px] m-5 mt-0"
          multiline
          numberOfLines={3}
        />
      </View>

      <View className="flex flex-row space-x-2 m-5">
        {OPTIONS.map((option) => (
          <TouchableOpacity key={option.id} activeOpacity={0.8} className="flex bg-gray-200 w-10 h-10 items-center justify-center rounded-full">
            {option.icon}
          </TouchableOpacity>
        ))}
      </View>

      <View className="border-t border-gray-200 flex flex-row justify-between">
        <View/>
        <View className="flex flex-row items-center justify-center">
          <View className="px-2 py-1 bg-red-200 rounded-md w-12 flex items-center mr-1 justify-center">
            <Text className="text-xs text-red-600 font-semibold">NEW</Text>
          </View>
          <EvilIcons name="clock" size={24} color="black" />
          <TouchableOpacity activeOpacity={0.8} className="flex bg-blue-500 w-16 h-7 items-center justify-center rounded-full m-5">
            <Text className="text-white">Post</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default NewPost;

const styles = StyleSheet.create({
  userImage: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    marginRight: 10,
  },
  input: {
    margin: 10,
    height: 100,
    textAlignVertical: 'top',
  }
});
