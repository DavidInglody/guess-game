import { Text, StyleSheet, Platform } from "react-native";

export default function Title({ children }: { children: React.ReactNode }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    // borderWidth: Platform.OS === "android" ? 2 : 0,
    // borderWidth : Platform.select({android: 2, ios: 0}),
    borderColor: "white",
    padding: 10,
    maxWidth: "80%",
    width: 300,
  },
});
