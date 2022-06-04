import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  TextInput,
} from "react-native";

import { useState } from "react";

import GlobalStyles from "../GlobalStyles";
import Exercises from "./exercises";

//Log the time of the sessions and maintain a log of it to send notifications

const routineList = {
  name: "chest+back",
  exerciseAr: ["Chest Press", "sdukjs", "tfghgf"],
};
const setRep = {
  exerciseBreakdown: {
    set: 1,
    rep: 1,
    rpe: 10,
    weight: 60,
    name: "chest press",
  },
  startTime: 0,
};

function SetDetails() {
  const setNo = 1;
  return (
    <View style={{ flexDirection: "row" }}>
      <Text style={{ color: "white" }}>Set : {setNo}</Text>
      <Text style={{ color: "white" }}>Reps : </Text>
      <TextInput
        keyboardType="numeric"
        placeholder="0"
        placeholderTextColor="#eafff3"
        autoFocus={true}
      />
      <Text>Weight : </Text>
      <Text>RPE : </Text>
    </View>
  );
}

export default function CurrentSes() {
  const [pressState, setState] = useState("none");
  return (
    <View style={GlobalStyles.darkMode}>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginBottom: 10,
        }}
      >
        <View>
          <Image
            style={{ width: 35, height: 35 }}
            source={require("../assets/nav-icons/chronometer.png")}
          ></Image>
          <Text style={[GlobalStyles.darkText, { marginTop: 5 }]}>0 min</Text>
        </View>

        <View>
          <Image
            style={{ width: 35, height: 35 }}
            source={require("../assets/nav-icons/flame.png")}
          ></Image>
          <Text style={[GlobalStyles.darkText, { marginTop: 5 }]}>0 cals</Text>
        </View>

        <View>
          <Image
            style={{ width: 35, height: 35 }}
            source={require("../assets/nav-icons/weight.png")}
          ></Image>
          <Text style={[GlobalStyles.darkText, { marginTop: 5 }]}>0 Kgs</Text>
        </View>

        <View>
          <Image
            style={{ width: 35, height: 35 }}
            source={require("../assets/nav-icons/point.png")}
          ></Image>
          <Text style={[GlobalStyles.darkText, { marginTop: 5 }]}>0 Sets</Text>
        </View>

        <View>
          <Image
            style={{ width: 35, height: 35 }}
            source={require("../assets/nav-icons/dumbell.png")}
          ></Image>
          <Text style={[GlobalStyles.darkText, { marginTop: 5 }]}>0 Reps</Text>
        </View>
      </View>
      {/* Header End */}

      {/* Timer Start */}
      <Pressable style={{ borderRadius: 20 }}>
        <View
          style={{
            padding: 15,
            width: 70,
            backgroundColor: "#8ae231",
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
          }}
        ></View>
        <Text
          style={{
            color: "rgba(255, 255, 255, 0.6)",
            position: "absolute",
            marginLeft: 10,
            marginTop: 5,
          }}
        >
          Tap to stop the Rest Timer
        </Text>
        <Text
          style={{
            color: "rgba(255, 255, 255, 0.6)",
            position: "absolute",
            right: 10,
            marginTop: 5,
          }}
        >
          30.2 sec
        </Text>
      </Pressable>

      {/* SetRep Info */}
      <ScrollView>
        {routineList.exerciseAr.map((exercise, index) => (
          <View
            key={index}
            style={{
              paddingHorizontal: 10,
              marginTop: 20,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  backgroundColor: [
                    "#2960FF",
                    "#F25220",
                    "#0D0D0D",
                    "#010101",
                    "teal",
                    "cyan",
                    "purple",
                    "#2B62FF",
                    "pink",
                    "#ff8c00",
                    "#9effce",
                    "#ffb342",
                    "#ff89d0",
                    "black",
                  ][Math.floor(Math.random() * 10)],
                  borderRadius: 40,
                  paddingVertical: 15,
                  paddingHorizontal: 20,
                }}
              >
                <Text style={[GlobalStyles.darkText, { fontSize: 25 }]}>
                  {exercise[0].toUpperCase()}
                </Text>
              </View>
              <View
                style={{
                  marginLeft: 50,
                  flexDirection: "row",
                  width: 180,
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={GlobalStyles.darkText}>{exercise}</Text>
                <Pressable key={index} onPress={() => setState("flex")}>
                  <Image
                    style={{ width: 25, height: 25 }}
                    source={require("../assets/nav-icons/plus.png")}
                  />
                </Pressable>
              </View>
            </View>
            <View style={[GlobalStyles.floatingSc, { display: pressState }]}>
              <SetDetails />
            </View>
          </View>
        ))}
      </ScrollView>
      <View
        style={{
          position: "absolute",
          flexDirection: "row",
          width: 120,
          justifyContent: "space-around",
          backgroundColor: "#00afef",
          padding: 10,
          borderRadius: 30,
          left: "40%",
          bottom: 20,
        }}
      >
        <Image
          style={{ width: 25, height: 25 }}
          source={require("../assets/nav-icons/check.png")}
        />
        <Text style={GlobalStyles.darkText}>Complete</Text>
      </View>
    </View>
  );
}
