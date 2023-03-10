import { StyleSheet, Text } from "react-native";

import Colors from "../constants/colors";

const InstructionText = ({ children }) => {
  return <Text style={styles.instructionText}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.secondary,
    fontSize: 28,
    fontWeight: "600",
  },
});
