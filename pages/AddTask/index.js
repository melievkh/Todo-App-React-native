import React, { useEffect, useState } from "react";
import { Alert, Modal, Pressable, Text, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

import styles from "./style";
import { addTask } from "../../redux/reducer/tasksReducer";
import { closeModal } from "../../redux/reducer/modalReducer";

const AddTask = () => {
  const [enteredTask, setEnteredTask] = useState("");
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const inputHandler = (value) => {
    setEnteredTask(value);
  };

  const onAddTask = () => {
    if (enteredTask.trim().length === 0) {
      Alert.alert("Error", "Enter a task before adding !!");
      return;
    }
    dispatch(addTask(enteredTask));
    dispatch(closeModal());
    setEnteredTask("");
    Alert.alert("Success", "Task added successfully!");
  };

  return (
    <Modal animationType="slide" visible={modal}>
      <View style={styles.addTaskHeader}>
        <Text style={styles.addTaskTitle}>Add new task</Text>
        <Pressable
          onPress={() => dispatch(closeModal())}
          android_ripple={{ color: "#d47d85", borderless: true }}
          style={styles.closeModalWrapper}
        >
          <Ionicons name="close-outline" size={24} />
        </Pressable>
      </View>
      <View style={styles.addTaskWrapper}>
        <TextInput
          style={styles.textInput}
          placeholder="enter here"
          onChangeText={inputHandler}
          value={enteredTask}
        />
        <Pressable
          android_ripple={{ color: "#147819", borderless: true }}
          style={styles.saveButton}
          onPress={onAddTask}
        >
          <Text style={styles.saveButtonText}>Save</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

export default AddTask;
