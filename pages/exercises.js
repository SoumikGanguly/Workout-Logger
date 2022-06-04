import { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TextInput,
  Image,
  Pressable,
  Keyboard,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import Modal from "react-native-modal";

import GlobalStyles from "../GlobalStyles";

import NameEl from "./nameEl";

import { collection, getDocs } from "firebase/firestore";

import { db } from "../firebaseConfig";

const defaultExercisesList = [
  { name: "Flat Bench Press", type: "chest" },
  { name: "Inclined Bench Press", type: "chest" },
  { name: "Inclined Dumbell Press", type: "chest" },
  { name: "Machine Flies", type: "chest" },
  { name: "Dumbell Flies", type: "chest" },
  { name: "Pull Overs", type: "chest" },
  { name: "Cable Crossovers (High)", type: "chest" },
  { name: "Cable Crossovers (Middle)", type: "chest" },
  { name: "Cable Crossovers (Low)", type: "chest" },
  { name: "Pull Ups", type: "back" },
  { name: "Chin Ups", type: "back" },
  { name: "Deadlift", type: "back" },
  { name: "Bent-over Barbell Row", type: "back" },
  { name: "Bent-over Dumbell Row", type: "back" },
  { name: "T-Bar Row", type: "back" },
  { name: "Lat Pull Down", type: "back" },
  { name: "Cable Rows", type: "back" },
  { name: "Superman", type: "back" },
  { name: "Cable Rope Pullover ", type: "back" },
  { name: "Crunches ", type: "abs" },
  { name: "Barbell Squats", type: "legs" },
];

// const defaultExercisesList = () => {
//   const colRef = collection(db, "defaultExerciseList");
//   getDocs(colRef).then((snapshot) => {
//     console.log(snapshot.docs.map((doc) => doc.data()));
//   });
// };

let exercisesList = [...defaultExercisesList];
export default function Exercises() {
  const [exercise, addExercise] = useState();
  const [exerciseType, addExerciseType] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [list, updateList] = useState(exercisesList);

  const AddExercise = () => {
    Keyboard.dismiss();
    updateList(() => {
      exercisesList = [
        ...exercisesList,
        { name: `${exercise}`, type: `${exerciseType}` },
      ];
    });
    addExercise(null);
    addExerciseType(null);
    setModalVisible(!modalVisible);
  };
  const addNewExercise = () => {
    setModalVisible(!modalVisible);
  };

  const deletion = (name) => {
    let number = 0;
    exercisesList.map((item, index) =>
      item.name == name ? (number = index) : ""
    );
    updateList(() => exercisesList.splice(number, 1));
  };

  return (
    <View style={GlobalStyles.darkMode}>
      <ScrollView styles={{}}>
        {/* list of exercises */}
        <Text style={styles.exerciseTitle}>Chest</Text>
        {exercisesList
          .filter(
            (item) =>
              item.type.toLowerCase() == "chest" ||
              item.type.toLowerCase() == "pecs" ||
              item.type.toLowerCase() == "pecks"
          )
          .map((item, index) => (
            <NameEl name={item.name} key={index} deletion={deletion} />
          ))}

        <Text style={styles.exerciseTitle}>Back</Text>
        {exercisesList
          .filter((item) => item.type.toLowerCase() == "back")
          .map((item, index) => (
            <NameEl name={item.name} key={index} deletion={deletion} />
          ))}

        <Text style={styles.exerciseTitle}>Legs</Text>
        {exercisesList
          .filter(
            (item) =>
              item.type.toLowerCase() == "legs" ||
              item.type.toLowerCase() == "leg"
          )
          .map((item, index) => (
            <NameEl name={item.name} key={index} deletion={deletion} />
          ))}

        <Text style={styles.exerciseTitle}>Bicep</Text>
        {exercisesList
          .filter(
            (item) =>
              item.type.toLowerCase() == "bicep" ||
              item.type.toLowerCase() == "biceps"
          )
          .map((item, index) => (
            <NameEl name={item.name} key={index} deletion={deletion} />
          ))}

        <Text style={styles.exerciseTitle}>Tricep</Text>
        {exercisesList
          .filter(
            (item) =>
              item.type.toLowerCase() == "tricep" ||
              item.type.toLowerCase() == "triceps"
          )
          .map((item, index) => (
            <NameEl name={item.name} key={index} deletion={deletion} />
          ))}

        <Text style={styles.exerciseTitle}>Shoulders</Text>
        {exercisesList
          .filter(
            (item) =>
              item.type.toLowerCase() == "shoulder" ||
              item.type.toLowerCase() == "shoulders"
          )
          .map((item, index) => (
            <NameEl name={item.name} key={index} deletion={deletion} />
          ))}

        <Text style={styles.exerciseTitle}>Abs</Text>
        {exercisesList
          .filter(
            (item) =>
              item.type.toLowerCase() == "abs" ||
              item.type.toLowerCase() == "ab"
          )
          .map((item, index) => (
            <NameEl name={item.name} key={index} deletion={deletion} />
          ))}

        <Text style={styles.exerciseTitle}>Traps</Text>
        {exercisesList
          .filter(
            (item) =>
              item.type.toLowerCase() == "trap" ||
              item.type.toLowerCase() == "traps"
          )
          .map((item, index) => (
            <NameEl name={item.name} key={index} deletion={deletion} />
          ))}

        <Text style={styles.exerciseTitle}>Forearms</Text>
        {exercisesList
          .filter(
            (item) =>
              item.type.toLowerCase() == "forearm" ||
              item.type.toLowerCase() == "forearms"
          )
          .map((item, index) => (
            <NameEl name={item.name} key={index} deletion={deletion} />
          ))}
      </ScrollView>
      {/* Add new button */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.addExerciseWrapper}
      >
        <Modal
          backdropOpacity={0.6}
          onRequestClose={() => setModalVisible(!modalVisible)}
          visible={modalVisible}
          onBackdropPress={() => setModalVisible(false)}
        >
          <View style={styles.modalSc}>
            <TextInput
              style={styles.textInput}
              onChangeText={(exercise) => addExercise(exercise)}
              value={exercise}
              placeholder="Add New Exercise"
            />

            <TextInput
              style={styles.textInput}
              onChangeText={(exerciseType) => addExerciseType(exerciseType)}
              value={exerciseType}
              placeholder="Specify the Muscle Group"
            />
            <Pressable
              style={{
                backgroundColor: "#202A33",
                width: 50,
                height: 50,
                borderRadius: 60,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => AddExercise()}
            >
              <Image
                style={{ width: 25, height: 25 }}
                source={require("../assets/nav-icons/check-mark.png")}
              />
            </Pressable>
          </View>
        </Modal>
        <Pressable
          style={{
            backgroundColor: "#202A33",
            width: 60,
            height: 60,
            borderRadius: 60,
            borderWidth: 2,
            borderColor: "white",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => addNewExercise()}
        >
          <Image
            style={{ width: 15, height: 15 }}
            source={require("../assets/nav-icons/plus.png")}
          />
        </Pressable>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  addExerciseWrapper: {
    bottom: 10,
    left: "20%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  textInput: {
    backgroundColor: "white",
    borderRadius: 5,
    width: 240,
    height: 40,
    marginBottom: 10,
    paddingLeft: 5,
  },

  exerciseTitle: {
    marginBottom: 10,
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
  modalSc: {
    width: "90%",
    backgroundColor: "#232d35",
    top: "17%",
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
  },
});
