import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Image, Pressable, StyleSheet } from "react-native";
import CalenderView from "./pages/calender";
import Exercises from "./pages/exercises";
import Home from "./pages/home";
import Programs from "./pages/programs";
import Stats from "./pages/stats";
import CurrentSes from "./pages/currentSes";
import Profile from "./pages/profile";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Push Notifications to be sent
// Notify users after 7 days of constant weight to recalculate weight
// Notify users around the time of their usual sessions for a workout
// Last reminder of the day as "Oops you seem too busy for a workout today. But will it be too difficult to do atleast some pushups now?""

const CurrentSession = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: () => (
          <Pressable
            onPress={() => navigation.navigate("Profile")}
            style={{ marginRight: 8 }}
          >
            <Image
              style={{ width: 30, height: 30, marginRight: 7 }}
              source={require("./assets/nav-icons/woman.png")}
            />
          </Pressable>
        ),
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="Home Prev"
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: "#202A33",
          },
          title: "Home",
        }}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#202A33",
          },
        }}
        name="Current Session"
        component={CurrentSes}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#202A33",
          },
        }}
        name="Profile"
        component={Profile}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: "#202A33" },
          tabBarShowLabel: false,
          headerRight: () => (
            <Pressable
              onPress={() => {
                console.log("profile");
              }}
              style={{ marginRight: 8 }}
            >
              <Image
                style={{ width: 30, height: 30, marginRight: 7 }}
                source={require("./assets/nav-icons/woman.png")}
              />
            </Pressable>
          ),
        }}
      >
        <Tab.Screen
          name="Home"
          component={CurrentSession}
          options={{
            headerStyle: {
              backgroundColor: "#202A33",
            },
            headerTintColor: "#fff",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Image
                style={focused ? styles.iconActive : styles.iconNonActive}
                source={require("./assets/nav-icons/home.png")}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Programs"
          component={Programs}
          options={{
            headerStyle: {
              backgroundColor: "#202A33",
            },
            headerTintColor: "#fff",
            tabBarIcon: ({ focused }) => (
              <Image
                style={focused ? styles.iconActive : styles.iconNonActive}
                source={require("./assets/nav-icons/notes.png")}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Exercises"
          component={Exercises}
          options={{
            headerStyle: {
              backgroundColor: "#202A33",
            },
            headerTintColor: "#fff",
            tabBarIcon: ({ focused }) => (
              <Image
                style={focused ? styles.iconActive : styles.iconNonActive}
                source={require("./assets/nav-icons/dumbell.png")}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Calender"
          component={CalenderView}
          options={{
            headerStyle: {
              backgroundColor: "#202A33",
            },
            headerTintColor: "#fff",
            tabBarIcon: ({ focused }) => (
              <Image
                style={focused ? styles.iconActive : styles.iconNonActive}
                source={require("./assets/nav-icons/calendar.png")}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Stats"
          component={Stats}
          options={{
            headerStyle: {
              backgroundColor: "#202A33",
            },
            headerTintColor: "#fff",
            tabBarIcon: ({ focused }) => (
              <Image
                style={focused ? styles.iconActive : styles.iconNonActive}
                source={require("./assets/nav-icons/analytics.png")}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  iconActive: {
    width: 40,
    height: 40,
  },
  iconNonActive: {
    width: 30,
    height: 30,
  },
});
