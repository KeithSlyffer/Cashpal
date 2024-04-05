import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";
import { Avatar, Icon } from "react-native-elements";
import React from "react";
import { NavigationProp } from "@react-navigation/native";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import LottieView from "lottie-react-native";

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const Dashboard = ({ navigation }: RouterProps) => {
  const userData = FIREBASE_AUTH.currentUser;
  console.log(userData);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Avatar
            rounded
            source={{ uri: userData?.photoURL ?? undefined }}
            size="medium"
          />
          <View style={styles.userInfoText}>
            <Text style={styles.userName}>{userData?.displayName}</Text>
            <Text>Welcome back!</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Icon name="settings" />
        </TouchableOpacity>
      </View>

      <Button onPress={() => FIREBASE_AUTH.signOut()} title="Logout" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#264653",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  userInfoText: {
    marginLeft: 10,
  },
  userName: {
    fontSize: 18,
  },
  animation: {
    width: 400,
    height: 400,
  },
});

export default Dashboard;
