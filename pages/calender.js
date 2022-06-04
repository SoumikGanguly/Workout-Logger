import { View, Text, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";
import { ScrollView } from "react-native-gesture-handler";
import GlobalStyles from "../GlobalStyles";

const PrevExercise = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 15,
      }}
    >
      <View style={{ width: "10%" }}>
        <Text style={[GlobalStyles.darkText, styles.fontSize]}>
          {props.month}
        </Text>
        <Text style={{ fontSize: 30, color: "white" }}>{props.date}</Text>
      </View>
      <View
        style={[
          GlobalStyles.floatingSc,
          { flexGrow: 2, marginLeft: 10, height: "100%" },
        ]}
      >
        <Text style={GlobalStyles.darkText}>Workout Info</Text>
      </View>
    </View>
  );
};
export default function CalenderView() {
  return (
    <View style={GlobalStyles.darkMode}>
      <Calendar
        theme={{
          calendarBackground: "transparent",
          textSectionTitleColor: "#EF2E00",
          todayTextColor: "#EF2E00",
          selectedDayBackgroundColor: "#EF2E00",
          selectedDayTextColor: "white",
          dayTextColor: "white",
          textDisabledColor: "grey",
          arrowColor: "#EF2E00",
          monthTextColor: "white",
          dotColor: "#EF2E00",
        }}
        onDayPress={(day) => {
          console.log("selected day", day);
        }}
        markedDates={{
          "2022-05-05": { marked: true },
          "2022-05-16": { marked: true },
          "2022-05-17": { marked: true },
          "2022-05-18": { marked: true },
          "2022-05-19": { marked: true },
        }}
      />
      <ScrollView>
        <PrevExercise date={5} month={"May"} />
        <PrevExercise date={16} month={"May"} />
        <PrevExercise date={17} month={"May"} />
        <PrevExercise date={18} month={"May"} />
        <PrevExercise date={19} month={"May"} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  fontSize: {
    fontSize: 10,
  },
});
