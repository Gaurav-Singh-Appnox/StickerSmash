import { View, Text, StyleSheet } from "react-native";
import React from "react";

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#25292e",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  text: { fontSize: 32, color: "red", fontWeight: "700" },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});

export default About;
