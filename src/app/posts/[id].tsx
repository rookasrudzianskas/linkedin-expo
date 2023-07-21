//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useLocalSearchParams} from "expo-router";
import posts from "../../../assets/data/posts.json";
import PostListItem from "@/components/PostListItem";

const PostDetails = () => {
  const { id } = useLocalSearchParams();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return <Text>Not found</Text>;
  }

  return <PostListItem post={post} />;
};

export default PostDetails;
