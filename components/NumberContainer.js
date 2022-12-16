import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import Colors from "../constants/colors";

const deviceWidth = Dimensions.get("window").width;

const NumberContainer = ({ number }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{number}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 4,
    borderColor: Colors.accent,
    borderRadius: 8,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
  },
  text: {
    color: Colors.accent,
    fontSize: deviceWidth < 380 ? 24 : 32,
    fontWeight: "600",
    fontFamily: "Poppins_600SemiBold",
  },
});
