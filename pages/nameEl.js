import { View, Pressable, Text, Image } from "react-native";

import GlobalStyles from "../GlobalStyles";

export default function NameEl(props) {
  return (
    <View
      style={[
        GlobalStyles.floatingSc,
        { flexDirection: "row", justifyContent: "space-between" },
      ]}
    >
      <Text style={GlobalStyles.darkText}>{props.name}</Text>
      <Pressable onPress={() => props.deletion(props.name)}>
        <Image
          style={{ width: 20, height: 20 }}
          source={require("../assets/nav-icons/delete.png")}
        />
      </Pressable>
    </View>
  );
}
