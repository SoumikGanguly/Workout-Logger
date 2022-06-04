import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

import { useState } from "react";

export let userAge;

export default function Home() {
  const navigation = useNavigation();
  const [age, updateAge] = useState(null);

  userAge = age;

  console.log(userAge);

  return (
    <View style={GlobalStyles.darkMode}>
      {/* 1st element */}

      <Pressable
        style={GlobalStyles.floatingSc}
        onPress={() => console.log("Add Google and Facebook Auth")}
      >
        <Text style={GlobalStyles.darkText}>Sign In with Google</Text>
      </Pressable>
      <View style={GlobalStyles.floatingSc}>
        <Text
          style={[
            GlobalStyles.darkText,
            { fontWeight: "bold", fontSize: 15, marginBottom: 10 },
          ]}
        >
          Some Basic Info :
        </Text>
        <TextInput
          style={{
            width: 250,
            height: 30,
            borderRadius: 5,
            borderColor: "#606060",
            borderWidth: 1,
            color: "white",
            paddingHorizontal: 8,
            marginBottom: 8,
          }}
          placeholderTextColor="#eafff3"
          placeholder="Enter your Weight"
          keyboardType="numeric"
        />
        <TextInput
          style={{
            width: 250,
            height: 30,
            borderRadius: 5,
            borderColor: "#606060",
            borderWidth: 1,
            color: "white",
            paddingHorizontal: 8,
            marginBottom: 8,
          }}
          placeholderTextColor="#eafff3"
          placeholder="Enter your Height"
          keyboardType="numeric"
        />
        <TextInput
          style={{
            width: 250,
            height: 30,
            borderRadius: 5,
            borderColor: "#606060",
            borderWidth: 1,
            color: "white",
            paddingHorizontal: 8,
            marginBottom: 8,
          }}
          placeholderTextColor="#eafff3"
          placeholder="Enter your Age"
          keyboardType="numeric"
          onChangeText={(age) => updateAge(age)}
        />
        <TextInput
          style={{
            width: 250,
            height: 30,
            borderRadius: 5,
            borderColor: "#606060",
            borderWidth: 1,
            color: "white",
            paddingHorizontal: 8,
            marginBottom: 8,
          }}
          placeholderTextColor="#eafff3"
          placeholder="Enter your estimated Muscle Mass"
          keyboardType="numeric"
        />
        <Pressable
          onPress={() => {
            console.log("info submitted");
          }}
        >
          <Image
            style={{ width: 30, height: 30 }}
            source={require("../assets/nav-icons/check-mark.png")}
          />
        </Pressable>
      </View>

      <View style={GlobalStyles.floatingSc}>
        <Text style={GlobalStyles.darkText}>Stats Preview</Text>
      </View>

      {/* 2nd Element */}
      <View style={GlobalStyles.floatingSc}>
        <Text style={GlobalStyles.darkText}>
          Select a workout split : Push-Pull-Leg
        </Text>
      </View>

      {/* 3rd element */}
      <View style={GlobalStyles.floatingSc}>
        <Text style={GlobalStyles.darkText}>Add a program to your split</Text>
      </View>

      {/* 4th element */}
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text style={{ color: "white", flexBasis: "20%" }}>
          todays's workout
        </Text>
        <View style={GlobalStyles.floatingSc}>
          <Text style={[GlobalStyles.darkText, styles.secSc]}>
            Today's Workout Preview{" "}
            <Pressable
              onPress={() => navigation.navigate("Current Session")}
              style={{
                backgroundColor: "#202A33",
                padding: 10,
                borderRadius: 25,
              }}
            >
              <Image
                style={{ width: 20, height: 20 }}
                source={require("../assets/nav-icons/play.png")}
              />
            </Pressable>
          </Text>
        </View>
      </View>

      {/* 5th element */}
      <View style={{ flexDirection: "row" }}>
        <Text style={{ color: "white", flexBasis: "20%" }}>last workout</Text>
        <View style={[GlobalStyles.floatingSc, styles.secSc]}>
          <Text style={GlobalStyles.darkText}>Last Workout Preview</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={GlobalStyles.darkText}>Avg RPE : 8</Text>
            <Text style={GlobalStyles.darkText}>Completion : 85% </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  secSc: { width: 230 },
});
