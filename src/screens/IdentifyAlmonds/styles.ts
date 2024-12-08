import { StyleSheet } from "react-native";
import { Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#A3CFA9",
    paddingHorizontal: 16,
    paddingTop: Platform.OS === "android" ? 56 : 0,
  },
  animatedContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },

  title: {
    fontWeight: "700",
    fontSize: 19,
    color: "#fff",
    marginTop: 15,
  },

  textP: {
    color: "#fff",
    textAlign: "center",
    marginTop: 10,
  },
});
