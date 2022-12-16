import { useState } from "react";
import {
  Alert,
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  KeyboardAvoidingView,
} from "react-native";

import { Card, PrimaryButton, Title, InstructionText } from "../components";
import Colors from "../constants/colors";

const StartGameScreen = ({ onConfirm }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const { width, height } = useWindowDimensions();

  const numberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    const number = parseInt(enteredNumber);

    if (isNaN(number) || number <= 0 || number > 99) {
      Alert.alert(
        "Invalid Number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }

    onConfirm(number);
  };

  const marginTopDistance = height < 400 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
          <Title>Guess My Number App</Title>
          <Card>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCorrect={false}
              onChangeText={numberInputHandler}
              value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    alignItems: "center",
    marginBottom: 30,
  },
  numberInput: {
    width: 60,
    height: 60,
    padding: 12,
    marginTop: 16,
    borderRadius: 10,
    backgroundColor: "#2B2937",
    borderWidth: 2,
    borderColor: Colors.secondary,
    color: Colors.primaryText,
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  buttonContainer: {
    flex: 1,
  },
});
