import { useEffect, useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import {
  Card,
  Title,
  GuessList,
  PrimaryButton,
  InstructionText,
  NumberContainer,
} from "../components";

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't Lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newGuessNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newGuessNumber);
    setGuessRounds((prevGuessRounds) => [newGuessNumber, ...prevGuessRounds]);
  };

  let content = (
    <>
      <Title>Opponent's Guess</Title>
      <NumberContainer number={currentGuess} />
      <Card>
        <InstructionText>Higher or Lower?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <FontAwesome5 name="minus" size={16} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <FontAwesome5 name="plus" size={16} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );

  if (width > 600) {
    content = (
      <>
        <Title>Opponent's Guess</Title>
        <InstructionText>Higher or Lower?</InstructionText>
        <View style={styles.buttonsContainerWide}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <FontAwesome5 name="minus" size={16} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <NumberContainer number={currentGuess} />
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <FontAwesome5 name="plus" size={16} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }

  return (
    <ScrollView nestedScrollEnabled>
      <View style={styles.screen}>
        {content}
        <GuessList guessRounds={guessRounds} />
      </View>
    </ScrollView>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 24,
    marginTop: 16,
  },
  buttonsContainerWide: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
  },
});
