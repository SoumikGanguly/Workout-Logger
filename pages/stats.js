import { View, Text, ScrollView, Pressable } from "react-native";
import GlobalStyles from "../GlobalStyles";
import { VictoryChart, VictoryLine } from "victory-native";

import { collection, getDocs } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";

import { db } from "../firebaseConfig";

const weightData = [
  { date: "1 ", weight: 67 },
  { date: "2 ", weight: 67.5 },
  { date: "3 ", weight: 68 },
  { date: "4 ", weight: 67 },
  { date: "5 ", weight: 67.5 },
  { date: "6 ", weight: 68.5 },
  { date: "7 ", weight: 68.75 },
  { date: "8 ", weight: 67.75 },
  { date: "9 ", weight: 67.5 },
  { date: "10 ", weight: 67 },
  { date: "11 ", weight: 68 },
];

const volumeData = [
  { date: "1 ", weight: 1120 },
  { date: "2 ", weight: 1560 },
  { date: "3 ", weight: 1360 },
  { date: "4 ", weight: 1800 },
  { date: "5 ", weight: 1640 },
  { date: "6 ", weight: 1560 },
  { date: "7 ", weight: 1360 },
  { date: "8 ", weight: 1640 },
  { date: "9 ", weight: 1120 },
  { date: "10 ", weight: 1800 },
  { date: "11 ", weight: 1360 },
];

export default function Stats() {
  const getData = () => {
    const colRef = collection(db, "defaultExerciseList");
    getDocs(colRef).then((snapshot) => {
      console.log(snapshot.docs.map((doc) => doc.data()));
    });
  };

  // const setData = async () => {
  //   await setDoc(
  //     doc(db, "defaultExerciseList", `${Math.random().toString(36).slice(2)}`),
  //     {
  //       name: "Stawb Bose Sarkar",
  //       tdee: 3000,
  //       weight: weightData[0].weight,
  //     }
  //   );
  // };

  const fast = () => {
    defaultExercisesList.map((item) => {
      setData(item.name, item.type);
    });
  };

  const setData = async (name, type) => {
    await setDoc(
      doc(db, "defaultExerciseList", `${Math.random().toString(36).slice(2)}`),
      {
        name: { name },
        type: { type },
      }
    );
  };

  const chartTheme = {
    axis: {
      style: {
        tickLabels: {
          // this changed the color of my numbers to white
          fill: "white",
        },
      },
      grid: { stroke: "white", strokeWidth: 2 },
    },
  };

  return (
    <View style={GlobalStyles.darkMode}>
      <ScrollView>
        <View>
          <Pressable
            style={{ widht: 100, height: 30, backgroundColor: "lightblue" }}
            onPress={() => getData()}
          >
            <Text style={{ color: "white" }}>Press for console</Text>
          </Pressable>

          <Pressable
            style={{ widht: 100, height: 30, backgroundColor: "lightblue" }}
            onPress={() => fast()}
          >
            <Text style={{ color: "white" }}>Press for console</Text>
          </Pressable>
        </View>

        <View>
          <Text style={[GlobalStyles.darkText, { fontWeight: "bold" }]}>
            Weight Fluctuation in May
          </Text>
          <VictoryChart theme={chartTheme}>
            <VictoryLine
              style={{ data: { stroke: "orange", strokeWidth: 2 } }}
              animate
              data={weightData}
              x="date"
              y="weight"
            />
          </VictoryChart>
        </View>
        <View>
          <Text style={[GlobalStyles.darkText, { fontWeight: "bold" }]}>
            Total Volume in May
          </Text>
          <VictoryChart theme={chartTheme}>
            <VictoryLine
              style={{ data: { stroke: "orange", strokeWidth: 2 } }}
              animate
              data={volumeData}
              x="date"
              y="weight"
            />
          </VictoryChart>
        </View>
      </ScrollView>
    </View>
  );
}
