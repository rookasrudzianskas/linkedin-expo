//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import PostListItem from "@/components/PostListItem";
import posts from "../../../assets/data/posts.json";
import {gql, useQuery} from "@apollo/client";

const postList = gql`
    query postList {
        postList {
            id
            image
            content
            profile {
                image
                id
                name
                position
            }
        }
    }
`;

const Index = () => {
  const {loading, error, data} = useQuery(postList);
  if (loading) return <View className="h-screen flex items-center justify-center"><ActivityIndicator /></View>;
  if (error) return <View className="h-screen flex items-center justify-center"><Text>Something went wrong?</Text></View>;

  return (
    <View>
      <FlatList
        data={data.postList}
        renderItem={({ item }) => <PostListItem post={item} />}
        contentContainerStyle={{ gap: 10 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Index;
