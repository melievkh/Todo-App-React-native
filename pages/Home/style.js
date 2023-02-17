import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  appWrapper: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    marginTop: 60,
    paddingHorizontal: 20,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  tasksListWrapper: {
    paddingTop: 20,
    paddingHorizontal: 20,
    height: "80%",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "monospace",
  },
  addButton: {
    justifyContent: "center",
    alignItems: "center",
    padding: 6,
  },
  addButtonText: {
    fontSize: 26,
  },
});

export default styles;
