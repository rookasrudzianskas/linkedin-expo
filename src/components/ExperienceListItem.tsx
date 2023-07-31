import { Experience } from "@/types";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";

type ExperienceListItemProps = {
  experience: Experience;
};
const ExperienceListItem = ({ experience }: ExperienceListItemProps) => {
  return (
    <TouchableOpacity onPress={() => {}} activeOpacity={0.8} className="flex flex-row items-center space-x-3 border-b border-gray-300 py-3">
      <Image source={{ uri: experience.companyimage }} className="w-12 h-12 rounded-full" />
      <View>
        <Text style={styles.title}>{experience.title}</Text>
        <Text>{experience.companyname}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomWidth: 0.5,
    borderColor: "lightgray",
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 50,
    aspectRatio: 1,
    marginRight: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
  },
});

export default ExperienceListItem;
