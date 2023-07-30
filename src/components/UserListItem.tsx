//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useRouter} from "expo-router";
import {User} from "@/types";

const UserListItem = ({user}: User) => {
  const router = useRouter();
  return (
    <View>
      <TouchableOpacity activeOpacity={0.8} onPress={() => router.push<any>(`/users/${user.id}`)} className="flex flex-row items-center p-3">
        <Image source={{ uri: user.image }} style={styles.userImage} />
        <View>
          <Text className="font-[600] mb-1">{user.name}</Text>
          <Text className="text-[12px] text-gray-600">{user.position}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default UserListItem;

const styles = StyleSheet.create({
  userImage: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    marginRight: 10,
  },
  content: {
    margin: 10,
    marginTop: 0,
  },
  postImage: {
    width: '100%',
    aspectRatio: 1,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: 'lightgray',
  }
});
