import { FlatList, StyleSheet, Text, View } from "react-native";

import Colors from "../constants/colors";

const GuessList = ({ guessRounds }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Guess Logs</Text>
      </View>
      <FlatList
        nestedScrollEnabled
        style={styles.listContainer}
        data={guessRounds}
        renderItem={({ item, index }) => (
          <View style={styles.listItem}>
            <Text style={styles.itemItex}>#{guessRounds.length - index}</Text>
            <Text style={styles.itemItex}>Opponent Guess: {item}</Text>
          </View>
        )}
        keyExtractor={(item, index) => `Guess ${index}: ${item}`}
      />
    </View>
  );
};

export default GuessList;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: "100%",
    marginTop: 20,
    marginHorizontal: 12,
  },
  titleContainer: {
    alignItems: "flex-start",
  },
  titleText: {
    color: Colors.primaryText,
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Poppins_600SemiBold",
    paddingBottom: 4,
    borderBottomWidth: 2,
    borderBottomColor: Colors.secondary,
  },
  listContainer: {
    marginTop: 16,
  },
  listItem: {
    margin: 8,
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: Colors.secondary,
    borderRadius: 32,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.bgColor3,
  },
  itemItex: {
    color: Colors.bgColor2,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Poppins_600SemiBold",
  },
});
