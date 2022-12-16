import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
} from "react-native";

import { PrimaryButton, Title } from "../components";
import Colors from "../constants/colors";

const GameOverScreen = ({ userNumber, guessRounds, onStartNewGame }) => {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 300) {
    imageSize = 200;
  }

  if (width > 600) {
    imageSize = 100;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView>
      <View style={styles.rootContainer}>
        <Title>GAME OVER!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            source={require("../assets/images/success.png")}
            style={[styles.image]}
            resizeMode="cover"
          />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed{" "}
          <Text style={styles.highlightText}>{guessRounds}</Text> rounds to
          guess the number{" "}
          <Text style={styles.highlightText}>{userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onStartNewGame}>New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    marginTop: 24,
    borderWidth: 4,
    borderColor: Colors.bgColor3,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    marginVertical: 24,
    fontSize: 18,
    fontFamily: "Poppins_400Regular",
    textAlign: "center",
    color: Colors.primaryText,
  },
  highlightText: {
    fontFamily: "Poppins_700Bold",
  },
});
