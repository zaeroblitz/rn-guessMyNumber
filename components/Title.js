import { StyleSheet, Text, View } from "react-native";

import Colors from "../constants/colors";

const Title = ({ children }) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: Colors.accent,
    borderRadius: 36,
    padding: 24,
    marginTop: 20,
    maxWidth: "80%",
    width: 300,
  },
  title: {
    color: Colors.primaryText,
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "Poppins_700Bold",
  },
});
