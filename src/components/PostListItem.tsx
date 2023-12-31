import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {AntDesign, FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';
import {Post} from "@/types";
import {useRouter} from "expo-router";
import DUMMY_USER from '../../assets/data/user.json';

type PostListItemProps = {
  post: Post;
};

type FooterButtonProp = {
  text: string;
  icon: React.ComponentProps<typeof FontAwesome>['name'];
};

const FooterButton = ({ text, icon }: FooterButtonProp) => (
  <View className="flex flex-row items-center">
    {icon === 'like2' && <AntDesign name={icon} size={16} color="gray" />}
    {icon === 'comment-outline' && <MaterialCommunityIcons name={icon} size={16} color="gray" />}
    {icon === 'sharealt' && <AntDesign name="sharealt" size={16} color="gray" />}
    <Text className="text-gray-500 m-1 font-[600]">{text}</Text>
  </View>
);

const PostListItem = ({ post }: PostListItemProps) => {
  const user = DUMMY_USER;
  const router = useRouter();
  return (
    <View className="bg-white w-full flex justify-center">
      <TouchableOpacity activeOpacity={0.8} onPress={() => router.push<any>(`/users/${user.id}`)} className="flex flex-row items-center p-5">
        <Image source={{ uri: post?.profile?.image }} style={styles.userImage} />
        <View>
          <Text className="font-[600] mb-1">{post?.profile?.name}</Text>
          <Text className="text-[12px] text-gray-600">{post?.profile?.position}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.8} onPress={() => router.push<any>(`/posts/${post?.id}`)}>
        <Text style={styles.content}>{post?.content}</Text>
        {post.image && (
          <Image source={{ uri: post?.image }} style={styles.postImage} />
        )}

      </TouchableOpacity>
      <View style={styles.footer}>
        <FooterButton text="Like" icon="like2" />
        <FooterButton text="Comment" icon="comment-outline" />
        <FooterButton text="Share" icon="sharealt" />
      </View>
    </View>
  );
};

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

export default PostListItem;
