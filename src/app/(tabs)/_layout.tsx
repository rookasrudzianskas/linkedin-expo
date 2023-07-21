import FontAwesome from '@expo/vector-icons/FontAwesome';
import {Link, Tabs, useRouter} from 'expo-router';
import {Pressable, TouchableOpacity, useColorScheme} from 'react-native';
import {useState} from "react";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const [pressed, setPressed] = useState<boolean>(false);

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <TabBarIcon size={17} name="home" color={color} />,
          headerRight: () => (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                router.push('/search');
              }}
            >
              <FontAwesome
                name="search"
                size={18}
                style={{ marginRight: 20, color: colorScheme === 'dark' ? '#fff' : '#000' }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="network"
        options={{
          title: "My Network",
          tabBarIcon: ({ color }) => <TabBarIcon size={17} name="group" color={color} />,
        }}
      />
      <Tabs.Screen
        name="new-post"
        options={{
          title: "Post",
          tabBarIcon: ({ color }) => (
            <TabBarIcon size={17} name="plus-square" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notifications",
          tabBarIcon: ({ color }) => <TabBarIcon size={17} name="bell" color={color} />,
        }}
      />
      <Tabs.Screen
        name="jobs"
        options={{
          title: "Jobs",
          tabBarIcon: ({ color }) => (
            <TabBarIcon size={15} name="briefcase" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
