//@ts-nocheck
import React, {useLayoutEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, ScrollView, Image} from 'react-native';
import {useLocalSearchParams, useNavigation} from "expo-router";
import DUMMY_USER from '../../../assets/data/user.json';
import {User} from "@/types";
import ExperienceListItem from "@/components/ExperienceListItem";

const UserProfile = () => {
  const [user, setUser] = useState<User>(DUMMY_USER);
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: user.name,
    });
  }, [navigation]);

  return (
    <ScrollView>
      <View style={styles.headerContainer}>
        <Image source={{ uri: user.backImage }} className="w-full h-[175px] mb-[-60px]" />
        <View className="p-4">
          <Image source={{ uri: user.image }} style={styles.image} />

          <Text className="text-xl font-semibold">{user.name}</Text>
          <Text className="text-gray-800">{user.position}</Text>

          <TouchableOpacity activeOpacity={0.7} className="text-white bg-blue-600 flex items-center justify-center py-1 rounded-2xl mt-2">
            <Text className="text-white font-semibold text-base">Connect</Text>
          </TouchableOpacity>
        </View>
      </View>

      {user?.about && (
        <View className="flex flex-col bg-white px-5 py-3">
          <Text className="text-lg font-semibold">About</Text>
          <Text className="text-gray-800">{user.about}</Text>
        </View>
      )}

      <View className="flex flex-col bg-white px-5 py-3 mt-1">
        <Text className="text-lg font-semibold">Experience</Text>
        {user?.experience?.map((experience) => (
          <ExperienceListItem experience={experience} key={experience.id} />
        ))}
      </View>
    </ScrollView>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  headerContainer: {
    marginBottom: 5,
    backgroundColor: 'white',
  },
  image: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: 'white',
    marginBottom: 10,
  },
});
