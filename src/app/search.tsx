//@ts-nocheck
import React, {useLayoutEffect, useState} from 'react';
import {Text, View, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import UserListItem from "@/components/UserListItem";
import DUMMY_USER from '../../assets/data/user.json';
import {useNavigation} from "expo-router";

const USERS = [
  {
    "id": "u2",
    "name": "Rokas Rudzianskas",
    "position": "Founder at byRookas",
    "image": "https://media.licdn.com/dms/image/D4E03AQFzz5e20jckng/profile-displayphoto-shrink_800_800/0/1688494714950?e=2147483647&v=beta&t=DJMKF4R5D_xdUFm5HbGxoJ5vgd625Kcgbl-hOzfSxVs",
    "backImage": "https://i.ytimg.com/vi/_RO6Q1qhm0c/maxresdefault.jpg",
    "about": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley",
  },
  {
    "id": "u3",
    "name": "Rokas Rudzianskassdsadasddsdad",
    "position": "Founder at byRookas",
    "image": "https://media.licdn.com/dms/image/D4E03AQFzz5e20jckng/profile-displayphoto-shrink_800_800/0/1688494714950?e=2147483647&v=beta&t=DJMKF4R5D_xdUFm5HbGxoJ5vgd625Kcgbl-hOzfSxVs",
    "backImage": "https://i.ytimg.com/vi/_RO6Q1qhm0c/maxresdefault.jpg",
    "about": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley",
  },
  {
    "id": "u4",
    "name": "Rokas Rudzianskasdasdasd",
    "position": "Founder at byRookas",
    "image": "https://media.licdn.com/dms/image/D4E03AQFzz5e20jckng/profile-displayphoto-shrink_800_800/0/1688494714950?e=2147483647&v=beta&t=DJMKF4R5D_xdUFm5HbGxoJ5vgd625Kcgbl-hOzfSxVs",
    "backImage": "https://i.ytimg.com/vi/_RO6Q1qhm0c/maxresdefault.jpg",
    "about": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley",
  }

]

const Search = () => {
  const [user, setUser] = useState(USERS);
  const navigation = useNavigation();
  const [search, setSearch] = useState('' as string);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Search',
      headerSearchBarOptions: {
        placeholder: 'Search users',
        onChangeText: setSearch,
      }
    });
  });

  return (
    <SafeAreaView className="flex-1 bg-white pt-9">
      <FlatList
        data={USERS}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <UserListItem user={item} />}
      />
    </SafeAreaView>
  );
};

export default Search;
