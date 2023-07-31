//@ts-nocheck
import React, {useLayoutEffect, useState} from 'react';
import {ActivityIndicator, FlatList, SafeAreaView, View, Text} from 'react-native';
import UserListItem from "@/components/UserListItem";
import {useNavigation} from "expo-router";
import {gql, useQuery} from "@apollo/client";

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

const query = gql`
  query profileSearch($term: String) {
    profileSearch(term: $term) {
      id
      image
      name
      position
    }
  }
`;

const Search = () => {
  const [user, setUser] = useState(USERS);
  const navigation = useNavigation();
  const [search, setSearch] = useState('' as string);

  const { data, loading, error } = useQuery(query, {
    variables: { term: `%${search}%` },
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Search',
      headerSearchBarOptions: {
        placeholder: 'Search users',
        onChangeText: setSearch,
      }
    });
  });

  if (loading) return <View className="h-screen flex items-center justify-center"><ActivityIndicator /></View>;
  if (error) return <View className="h-screen flex items-center justify-center"><Text>Something went wrong?</Text></View>;

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <FlatList
        contentContainerStyle={{ marginTop: 150 }}
        data={data?.profileSearch || []}
        renderItem={({ item }) => <UserListItem user={item} />}
      />
    </View>
  );
};

export default Search;
