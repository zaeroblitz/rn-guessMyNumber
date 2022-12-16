import { StyleSheet, View, Dimensions } from "react-native";

import Colors from "../constants/colors";

const deviceWidth = Dimensions.get("window").width;

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: deviceWidth < 380 ? 20 : 32,
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 16,
    backgroundColor: Colors.bgColor2,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
