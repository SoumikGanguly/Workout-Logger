import { View, Text, Image, Pressable, TextInput } from "react-native";
import GlobalStyles from "../GlobalStyles";
import { useState, useRef } from "react";
// import OutsideView from "react-native-detect-press-outside";

import Modal from "react-native-modal";

import { userAge } from "./home";

var weightLog = [{ date: 10, weightOnDay: 0 }];
var muscleMassLog = [{ date: 10, muscleMassOnDay: 0 }];

export default function Profile() {
  const [weight, updateWeight] = useState(76);
  const [weightVisible, updateVisibilityWeight] = useState(false);

  const [height, updateHeight] = useState(173);
  const [heightVisible, updateVisibilityHeight] = useState(false);

  const [musclemass, updateMuscleMass] = useState(17);
  const [muscleMassVisible, updateVisibilityMuscleMass] = useState(false);

  const weightChange = () => updateVisibilityWeight(!weightVisible);

  console.log(weight);
  console.log(height);
  console.log(userAge);

  const updateWeightList = () => {
    //the if statement prevents any duplicates which will help in graph plotting
    if (weight != weightLog[weightLog.length - 1].weightOnDay.weight) {
      weightLog = [...weightLog, { date: 11, weightOnDay: { weight } }];
      console.log(weightLog);
    }
    updateVisibilityWeight(!weightVisible);
  };

  const [tdee, updateTdee] = useState(
    66 + 13.7 * weight + 5 * height - 6.8 * userAge
  );
  const [ree, updateRee] = useState(
    10 * weight + 6.25 * height - 5 * userAge + 5
  );

  const updatingTdee = () => {
    let a = 66 + 13.7 * weight + 5 * height - 6.8 * userAge;
    let b = 10 * weight + 6.25 * height - 5 * userAge + 5;
    updateTdee(a);
    updateRee(b);
  };

  // console.log(tdee);

  const updateMuscleMassList = () => {
    //the if statement prevents any duplicates which will help in graph plotting
    if (
      musclemass !=
      muscleMassLog[muscleMassLog.length - 1].muscleMassOnDay.musclemass
    ) {
      muscleMassLog = [
        ...muscleMassLog,
        { date: 11, muscleMassOnDay: { musclemass } },
      ];
      console.log(muscleMassLog);
    }
    updateVisibilityMuscleMass(!muscleMassVisible);
  };

  return (
    <View style={GlobalStyles.darkMode}>
      <View>
        <Image
          style={{
            width: 120,
            height: 120,
            borderRadius: 120,
            marginBottom: 10,
          }}
          resizeMethod="scale"
          resizeMode="cover"
          source={require("../assets/nav-icons/profilepic.jpg")}
        />
      </View>
      {/* User Info */}

      <View style={GlobalStyles.floatingSc}>
        <View>
          <Text
            style={[
              GlobalStyles.darkText,
              { fontWeight: "bold", fontSize: 20, marginBottom: 5 },
            ]}
          >
            Soumik Ganguly
          </Text>
        </View>

        {/* Weight */}
        <View>
          <Pressable
            style={{ flexDirection: "row" }}
            onPress={() => weightChange()}
          >
            <Text style={GlobalStyles.darkText}>Weight : {""}</Text>
            <Text
              style={[GlobalStyles.darkText, { marginLeft: 20, color: "grey" }]}
            >
              {weight} Kg
            </Text>
            <Image
              style={{ width: 15, height: 15 }}
              source={require("../assets/nav-icons/edit.png")}
            />
          </Pressable>
          <Modal
            visible={weightVisible}
            avoidKeyboard={true}
            onBackdropPress={() => updateVisibilityWeight(false)}
          >
            <View
              style={{
                flexDirection: "row",
                position: "absolute",
                right: 0,
                top: "34%",
              }}
            >
              <TextInput
                style={{
                  width: 140,
                  height: 30,
                  borderRadius: 5,
                  borderColor: "#606060",
                  borderWidth: 1,
                  color: "white",
                  paddingHorizontal: 8,
                }}
                onChangeText={(text) => {
                  updateWeight(text);
                  updatingTdee();
                }}
                keyboardType="numeric"
                placeholder="Enter Weight"
                placeholderTextColor="#eafff3"
              />
              <Pressable onPress={() => updateWeightList()}>
                <Image
                  style={{ width: 25, height: 25, marginLeft: 5 }}
                  source={require("../assets/nav-icons/check-mark.png")}
                />
              </Pressable>
            </View>
          </Modal>
        </View>

        {/* Height */}
        <View>
          <Pressable
            style={{ flexDirection: "row" }}
            onPress={() => updateVisibilityHeight(!heightVisible)}
          >
            <Text style={GlobalStyles.darkText}>Height : {""}</Text>
            <Text
              style={[GlobalStyles.darkText, { marginLeft: 20, color: "grey" }]}
            >
              {" "}
              {height} cm
            </Text>
            <Image
              style={{ width: 15, height: 15 }}
              source={require("../assets/nav-icons/edit.png")}
            />
          </Pressable>
          <Modal
            visible={heightVisible}
            avoidKeyboard={true}
            onBackdropPress={() => updateVisibilityHeight(false)}
          >
            <View
              style={{
                flexDirection: "row",
                position: "absolute",
                right: 0,
                top: "37%",
              }}
            >
              <TextInput
                style={{
                  width: 150,
                  height: 30,
                  borderRadius: 5,
                  borderColor: "#606060",
                  borderWidth: 1,
                  color: "white",
                  paddingHorizontal: 8,
                }}
                onChangeText={(text) => {
                  updateHeight(text);
                  updatingTdee();
                }}
                keyboardType="numeric"
                placeholder="Update Height"
                placeholderTextColor="#eafff3"
              />
              <Pressable onPress={() => updateVisibilityHeight(false)}>
                <Image
                  style={{ width: 25, height: 25, marginLeft: 5 }}
                  source={require("../assets/nav-icons/check-mark.png")}
                />
              </Pressable>
            </View>
          </Modal>
        </View>

        {/* Muscle Mass */}

        <View>
          <Pressable
            style={{ flexDirection: "row" }}
            onPress={() => updateVisibilityMuscleMass(!muscleMassVisible)}
          >
            <Text style={GlobalStyles.darkText}>Muscle Mass : {""}</Text>
            <Text
              style={[GlobalStyles.darkText, { marginLeft: 20, color: "grey" }]}
            >
              {" "}
              {musclemass} %
            </Text>
            <Image
              style={{ width: 15, height: 15 }}
              source={require("../assets/nav-icons/edit.png")}
            />
          </Pressable>
          <Modal
            visible={muscleMassVisible}
            avoidKeyboard={true}
            onBackdropPress={() => updateVisibilityMuscleMass(false)}
          >
            <View
              style={{
                flexDirection: "row",
                position: "absolute",
                right: 0,
                top: "41%",
              }}
            >
              <TextInput
                style={{
                  width: 125,
                  height: 30,
                  borderRadius: 5,
                  borderColor: "#606060",
                  borderWidth: 1,
                  color: "white",
                  paddingHorizontal: 8,
                }}
                onChangeText={(text) => updateMuscleMass(text)}
                keyboardType="numeric"
                placeholder="Update Muscle Mass"
                placeholderTextColor="#eafff3"
              />
              <Pressable onPress={() => updateMuscleMassList()}>
                <Image
                  style={{ width: 25, height: 25, marginLeft: 5 }}
                  source={require("../assets/nav-icons/check-mark.png")}
                />
              </Pressable>
            </View>
          </Modal>
        </View>

        {/* TDEE */}
        <View style={{ flexDirection: "row" }}>
          <Text style={GlobalStyles.darkText}>TDEE : {""}</Text>
          <Pressable>
            <Image
              style={{ width: 10, height: 10 }}
              source={require("../assets/nav-icons/info.png")}
              resizeMethod="scale"
            />
          </Pressable>
          <Text
            style={[GlobalStyles.darkText, { marginLeft: 20, color: "grey" }]}
          >
            {" "}
            {Math.round(tdee)} cal
          </Text>
        </View>

        {/* REE */}
        <View style={{ flexDirection: "row" }}>
          <Text style={GlobalStyles.darkText}>REE : {""}</Text>
          <Pressable>
            <Image
              style={{ width: 10, height: 10 }}
              source={require("../assets/nav-icons/info.png")}
              resizeMethod="scale"
            />
          </Pressable>
          <Text
            style={[GlobalStyles.darkText, { marginLeft: 20, color: "grey" }]}
          >
            {" "}
            {Math.round(ree)} cal
          </Text>
        </View>

        {/* Split */}
        <View style={{ flexDirection: "row" }}>
          <Text style={GlobalStyles.darkText}>Current Split : {""}</Text>
          <Text
            style={[GlobalStyles.darkText, { marginLeft: 20, color: "grey" }]}
          >
            {" "}
            Twice a week
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={GlobalStyles.darkText}>Periodization : {""}</Text>
          <Text
            style={[GlobalStyles.darkText, { marginLeft: 20, color: "grey" }]}
          >
            {" "}
            Linear
          </Text>
          <Pressable>
            <Image
              style={{ width: 15, height: 15 }}
              source={require("../assets/nav-icons/edit.png")}
            />
          </Pressable>
        </View>
      </View>

      <View
        style={[
          GlobalStyles.floatingSc,
          {
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          },
        ]}
      >
        <View>
          <Image
            style={{ width: 50, height: 50 }}
            source={require("../assets/nav-icons/dumbell.png")}
          />
          <Text style={[GlobalStyles.darkText, { fontSize: 10 }]}>
            11 Day Streak
          </Text>
        </View>
        <View>
          <Image
            style={{ width: 50, height: 50 }}
            source={require("../assets/nav-icons/bench-press.png")}
          />
          <Text style={[GlobalStyles.darkText, { fontSize: 10 }]}>60 Kgs</Text>
        </View>
        <View>
          <Image
            style={{ width: 50, height: 50 }}
            source={require("../assets/nav-icons/gym-machine.png")}
          />
          <Text style={[GlobalStyles.darkText, { fontSize: 10 }]}>140 Kgs</Text>
        </View>
        <View>
          <Image
            style={{ width: 60, height: 60 }}
            source={require("../assets/nav-icons/weight-lifting.png")}
          />
          <Text
            style={[
              GlobalStyles.darkText,
              { fontSize: 10, justifyContent: "center" },
            ]}
          >
            100 Kgs
          </Text>
        </View>
      </View>
    </View>
  );
}
