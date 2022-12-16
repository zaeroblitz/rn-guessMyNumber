import { View, Text, Pressable, StyleSheet } from "react-native";

import Colors from "../constants/colors";

const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: Colors.primary500 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 8,
    borderRadius: 12,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 8,
    elevation: 2,
  },
  buttonText: {
    color: Colors.primaryText,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Poppins_600SemiBold",
  },
  pressed: {
    backgroundColor: Colors.primary500,
  },
});
