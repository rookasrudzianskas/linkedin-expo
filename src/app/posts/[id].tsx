//@ts-nocheck
import React from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import {useLocalSearchParams} from "expo-router";
import PostListItem from "@/components/PostListItem";
import {gql, useQuery} from "@apollo/client";

const query = gql`
    query MyQuery($id: ID!) {
        post(id: $id) {
            content
            id
            image
            profile {
                id
                name
                image
                position
            }
        }
    }
`;


const PostDetails = () => {
  const { id } = useLocalSearchParams();
  const { loading, error, data } = useQuery(query, { variables: { id } });
  if (loading) return <View className="h-screen flex items-center justify-center"><ActivityIndicator /></View>;
  if (error) return <View className="h-screen flex items-center justify-center"><Text>Something went wrong?</Text></View>;

  return <PostListItem post={data.post} />;
};

export default PostDetails;
