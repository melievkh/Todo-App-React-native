import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  addTaskWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  addTaskHeader: {
    paddingHorizontal: 20,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  addTaskTitle: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "monospace",
  },
  textInput: {
    width: "70%",
    height: 50,
    borderWidth: 1,
    borderColor: "#cccccc",
    padding: 10,
    borderRadius: 10,
  },
  saveButton: {
    width: "20%",
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
    borderRadius: 10,
    marginLeft: 10,
  },
  saveButtonText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },
  closeModalWrapper: {
    justifyContent: "center",
    alignItems: "center",
    padding: 6,
  },
});

export default styles;
