import React, { useState } from "react";
import { Modal, Pressable, Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "./style";

const AddTask = ({ visible, setIsModalOpen, onAddTask }) => {
  const [enteredTask, setEnteredTask] = useState("");

  const inputHandler = (value) => {
    setEnteredTask(value);
  };

  const addTaskHandler = () => {
    onAddTask(enteredTask);
    setEnteredTask("");
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal animationType="slide" visible={visible}>
      <View style={styles.addTaskHeader}>
        <Text style={styles.addTaskTitle}>Add new task</Text>
        <Pressable
          onPress={closeModal}
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
          onPress={addTaskHandler}
        >
          <Text style={styles.saveButtonText}>Save</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

export default AddTask;
