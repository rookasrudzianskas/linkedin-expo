//@ts-nocheck
import React, {useLayoutEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, ScrollView, Image, ActivityIndicator} from 'react-native';
import {useLocalSearchParams, useNavigation} from "expo-router";
import DUMMY_USER from '../../../assets/data/user.json';
import {User} from "@/types";
import ExperienceListItem from "@/components/ExperienceListItem";
import {gql, useQuery} from "@apollo/client";

const query = gql`
    query MyQuery($id: ID!) {
        profile(id: $id) {
            id
            name
            image
            position
            about
            experience {
                id
                companyname
                companyimage
                title
                userid
            }
            backimage
        }
    }
`;

const UserProfile = () => {
  const { id } = useLocalSearchParams();

  const { loading, error, data } = useQuery(query, { variables: { id: 2 } });
  const user = data?.profile;

  const navigation = useNavigation();

  const onConnect = () => {
    console.warn('Connect Pressed');
  };

  useLayoutEffect(() => {
    navigation.setOptions({ title: user?.name || 'User' });
  }, [user?.name]);

  if (loading) return <View className="h-screen flex items-center justify-center"><ActivityIndicator /></View>;
  if (error) return <View className="h-screen flex items-center justify-center"><Text>Something went wrong?</Text></View>;

  return (
    <ScrollView>
      <View style={styles.headerContainer}>
        <Image source={{ uri: user.backimage }} className="w-full h-[175px] mb-[-60px]" />
        <View className="p-4">
          <Image source={{ uri: user.image }} style={styles.image} />

          <Text className="text-xl font-semibold">{user.name}</Text>
          <Text className="text-gray-800">{user.position}</Text>

          <TouchableOpacity onPress={onConnect} activeOpacity={0.7} className="text-white bg-blue-600 flex items-center justify-center py-1 rounded-2xl mt-2">
            <Text className="text-white font-semibold text-base">Connect</Text>
          </TouchableOpacity>
        </View>
      </View>

      {user?.about && (
        <View className="flex flex-col bg-white px-5 py-3">
          <Text className="text-lg font-semibold">About</Text>
          <Text className="text-gray-800" style={{
            lineHeight: 19,
          }}>{user.about}</Text>
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
