import { View, Text, TouchableOpacity } from "react-native";
import { Avatar, Icon } from "react-native-elements";
import React from "react";
import { NavigationProp } from "@react-navigation/native";
import { FIREBASE_AUTH } from "../../FirebaseConfig";

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const Dashboard = ({ navigation }: RouterProps) => {
  const userData = FIREBASE_AUTH.currentUser;
  console.log(userData);

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 16,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Avatar
            rounded
            source={{ uri: userData?.photoURL ?? undefined }}
            size="medium"
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 18 }}>{userData?.displayName}</Text>
            <Text>Welcome back!</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Icon name="settings" />
        </TouchableOpacity>
      </View>

      {/* Other content of your Dashboard */}
    </View>
  );
};

export default Dashboard;
