import React from "react";
import { Alert, Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "./style";

const Task = ({ item, tasks, setTasks }) => {
  const onDeleteTask = (id) => {
    Alert.alert("Confirm", "Remove this task?", [
      {
        text: "Yes",
        onPress: () =>
          setTasks((currentTasks) => {
            return currentTasks.filter((task) => task.id !== id);
          }),
      },
      { text: "No" },
    ]);
  };

  const onTaskCompleted = (taskId) => {
    const newTask = tasks.map((item) => {
      if (item.id == taskId) {
        return { ...item, completed: true };
      }
      return item;
    });
    setTasks(newTask);
  };

  const onTaskUndo = (taskId) => {
    const newTask = tasks.map((item) => {
      if (item.id == taskId) {
        return { ...item, completed: false };
      }
      return item;
    });
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
            onPress={() => onTaskCompleted(item.id)}
          >
            <Text style={{ color: "white" }}>completed</Text>
          </Pressable>
        ) : (
          <Pressable
            style={styles.completedButton}
            onPress={() => onTaskUndo(item.id)}
          >
            <Text style={{ color: "white" }}>undone</Text>
          </Pressable>
        )}

        <Pressable
          style={styles.deleteButton}
          onPress={() => onDeleteTask(item?.id)}
        >
          <Ionicons name="trash-outline" size={18} color="#ffffff" />
        </Pressable>
      </View>
    </View>
  );
};

export default Task;
