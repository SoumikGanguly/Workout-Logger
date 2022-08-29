import { View, Text } from "react-native";
import GlobalStyles from "../GlobalStyles";

import { useNavigation } from "@react-navigation/native";

export default function Programs() {
  const navigation = useNavigation();
  const programList = [0, 1, 2, 3, 4];
  return (
    <View style={GlobalStyles.darkMode}>
      {programList.map((index) => (
        <Text
          key={index}
          style={[GlobalStyles.darkText, GlobalStyles.floatingSc]}
          onPress={() => navigation.navigate("Profile")}
        >
          Programs
        </Text>
      ))}
    </View>
  );
}
