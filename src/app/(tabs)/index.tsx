//@ts-nocheck
import React, {useState} from 'react';
import {Text, View, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity} from 'react-native';
import PostListItem from "@/components/PostListItem";
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

const postPaginatedList = gql`
    query PostPaginatedListQuery($first: Int, $after: Int) {
        postPaginatedList(first: $first, after: $after) {
            id
            content
            image
            profile {
                id
                name
                position
                image
            }
        }
    }
`;

const Index = () => {
  const [hasMore, setHasMore] = useState(true);
  const { loading, error, data, fetchMore, refetch } = useQuery(
    postPaginatedList,
    {
      variables: { first: 2 },
    }
  );

  const loadMore = async () => {
    if (!hasMore) {
      return;
    }

    const res = await fetchMore({
      variables: { after: data.postPaginatedList.length },
    });
    if (res.data.postPaginatedList.length === 0) {
      setHasMore(false);
    }
  };

  if (loading) return <View className="h-screen flex items-center justify-center"><ActivityIndicator /></View>;
  if (error) return <View className="h-screen flex items-center justify-center"><Text>Something went wrong?</Text></View>;

  return (
    <View className="flex-1">
      <FlatList
        data={data.postPaginatedList}
        renderItem={({ item }) => <PostListItem post={item} />}
        contentContainerStyle={{ gap: 10 }}
        showsVerticalScrollIndicator={false}
        onEndReached={loadMore}
        refreshing={loading}
        onRefresh={refetch}
        ListFooterComponent={() => (
          <TouchableOpacity activeOpacity={0.7} onPress={() => loadMore()} className="flex items-center justify-center">
            <Text className="text-sm font-semibold text-purple-600">Load More</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Index;
