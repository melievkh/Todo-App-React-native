import React, { useEffect, useState } from "react";
import { Alert, Modal, Pressable, Text, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";

import styles from "./style";
import { addTask, setTasks } from "../../redux/reducer/tasksReducer";
import { closeModal } from "../../redux/reducer/modalReducer";

const AddTask = () => {
  const [enteredTask, setEnteredTask] = useState("");
  const modal = useSelector((state) => state.modal);
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    getTasksFromUserDevice();
  }, []);

  useEffect(() => {
    saveToUserDevice(tasks);
  }, [tasks]);

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

  const saveToUserDevice = async (tasks) => {
    try {
      const stringifyTasks = JSON.stringify(tasks);
      await AsyncStorage.setItem("tasks", stringifyTasks);
    } catch (error) {
      console.log(error);
    }
  };

  const getTasksFromUserDevice = async () => {
    try {
      const tasks = await AsyncStorage.getItem("tasks");
      console.log(JSON.parse(tasks));
      return tasks != null ? JSON.parse(tasks) : null;
    } catch (error) {
      console.log(error);
    }
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
          android_ripple={{ color: "#192ee6", borderless: true }}
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
