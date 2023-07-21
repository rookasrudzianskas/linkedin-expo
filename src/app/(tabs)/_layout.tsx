import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

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

  return (
    <Tabs>
      <Tabs.Screen
        name="network"
        options={{
          title: "My Network",
          tabBarIcon: ({ color }) => <TabBarIcon size={15} name="group" color={color} />,
        }}
      />
      <Tabs.Screen
        name="new-post"
        options={{
          title: "Post",
          tabBarIcon: ({ color }) => (
            <TabBarIcon size={15} name="plus-square" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notifications",
          tabBarIcon: ({ color }) => <TabBarIcon size={15} name="bell" color={color} />,
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
