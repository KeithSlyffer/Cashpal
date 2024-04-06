import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Avatar, Icon } from "react-native-elements";
import { NavigationProp } from "@react-navigation/native";
import { FIREBASE_AUTH } from "../../FirebaseConfig";

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const Dashboard = ({ navigation }: RouterProps) => {
  const userData = FIREBASE_AUTH.currentUser;
  // Assuming you have a variable for the balance
  const balance = "13,315.51"; // Example balance, replace with your logic to fetch the actual balance

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Avatar
            rounded
            source={{
              uri:
                userData?.photoURL ||
                "https://static.vecteezy.com/system/resources/thumbnails/007/140/806/small/profile-glyph-circle-background-icon-vector.jpg",
            }}
            size="medium"
            containerStyle={styles.icon}
          />
          <View style={styles.userInfoText}>
            <Text style={styles.userName}>
              Hey, {userData?.displayName || "Test name"}
            </Text>
            <Text style={styles.text}>Welcome back!</Text>
          </View>
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
            <Icon color={"#fff"} name="settings" style={styles.iconMargin} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => FIREBASE_AUTH.signOut()}>
            <Icon color={"#fff"} name="logout" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Section for displaying balance */}
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>Your balance</Text>
        <Text style={styles.balanceAmount}>€{balance}</Text>
      </View>

      {/* Divider line */}
      <View style={styles.divider} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 20,
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
    color: "#fff",
  },
  text: {
    color: "#fff",
  },
  icon: {
    marginRight: 10,
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconMargin: {
    marginRight: 16,
  },
  balanceContainer: {
    marginTop: 10,
    padding: 16,
  },
  balanceText: {
    fontSize: 20,
    color: "#fff",
  },
  balanceAmount: {
    fontSize: 64,
    color: "#fff",
    fontWeight: "bold",
  },
  divider: {
    borderBottomColor: "#B3B3B3",
    borderBottomWidth: 0.5,
    marginVertical: 10,
    marginHorizontal: -20,
  },
});

export default Dashboard;
