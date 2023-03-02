import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  taskWrapper: {
    height: "auto",
    padding: 14,
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
    padding: 10,
    backgroundColor: "green",
    borderRadius: 8,
    marginRight: 10,
  },

  completedButton: {
    width: 70,
    padding: 8,
    backgroundColor: "green",
    borderRadius: 8,
    marginRight: 10,
    justifyContent: "space-around",
    flexDirection: "row",
  },

  deleteButton: {
    padding: 10,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
});

export default styles;
