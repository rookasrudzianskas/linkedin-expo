//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import PostListItem from "@/components/PostListItem";
import posts from "../../../assets/data/posts.json";
import {gql} from "@apollo/client";

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
  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({ item }) => <PostListItem post={item} />}
        contentContainerStyle={{ gap: 10 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Index;
