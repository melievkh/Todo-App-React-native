import React from "react";
import { Alert, Pressable, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

import styles from "./style";
import { taskCompleted, taskDeleted } from "../../redux/reducer/tasksReducer";

const Task = ({ item }) => {
  const dispatch = useDispatch();

  const onDeleteTask = () => {
    Alert.alert("Confirm", "Remove this task?", [
      {
        text: "Yes",
        onPress: () => dispatch(taskDeleted({ id: item?.id })),
      },
      { text: "No" },
    ]);
  };

  const onTaskCompleted = () => {
    dispatch(taskCompleted({ id: item?.id }));
  };

  return (
    <View style={styles.taskWrapper}>
      <Text
        style={{
          width: "56%",
          marginLeft: 10,
          textDecorationLine: item?.completed ? "line-through" : "none",
        }}
      >
        {item?.name}
      </Text>

      <View style={styles.buttonsWrapper}>
        {item?.completed ? (
          <Pressable
            style={styles.completedButton}
            onPress={() => onTaskCompleted()}
          >
            <Text style={{ color: "white" }}>Done</Text>
            <Ionicons name="checkmark-done-outline" size={18} color="white" />
          </Pressable>
        ) : (
          <Pressable
            style={styles.completeButton}
            onPress={() => onTaskCompleted()}
          >
            <Ionicons
              name="checkmark-done-circle-outline"
              size={18}
              color="#ffffff"
            />
          </Pressable>
        )}

        <Pressable style={styles.deleteButton} onPress={() => onDeleteTask()}>
          <Ionicons name="trash-outline" size={18} color="#ffffff" />
        </Pressable>
      </View>
    </View>
  );
};

export default Task;
