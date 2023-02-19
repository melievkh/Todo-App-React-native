import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  taskWrapper: {
    height: "auto",
    padding: 10,
    backgroundColor: "#ffffff",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 4,
    margin: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  buttonsWrapper: {
    width: "40%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  completeButton: {
    padding: 6,
    backgroundColor: "blue",
    borderRadius: 8,
    marginRight: 10,
  },
  deleteButton: {
    padding: 6,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
});

export default styles;
