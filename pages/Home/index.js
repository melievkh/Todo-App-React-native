import { useEffect, useState } from "react";
import { Alert, FlatList, Pressable, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Task from "../Task";
import AddTask from "../AddTask";
import styles from "./style";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const onAddTask = (enteredTask) => {
    if (enteredTask !== "") {
      setTasks((currentTasks) => [
        ...currentTasks,
        { id: Math.random().toString(), name: enteredTask, completed: false },
      ]);
      setIsModalOpen(false);
      Alert.alert("Success", "Task added successfully!");
    } else {
      Alert.alert("Error", "Please, fill the field!");
    }
  };

  return (
    <View style={styles.appWrapper}>
      {/* HEADER */}

      <View style={styles.header}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>

        <View stylele={styles.addButtonWrapper}>
          <Pressable
            android_ripple={{ color: "#67a5f0", borderless: true }}
            style={styles.addButton}
            onPress={showModal}
          >
            <Ionicons name="add-outline" size={30} />
          </Pressable>

          <AddTask
            visible={isModalOpen}
            setTasks={setTasks}
            setIsModalOpen={setIsModalOpen}
            onAddTask={onAddTask}
          />
        </View>
      </View>

      {/* BODY */}

      <View style={styles.tasksListWrapper}>
        <View>
          <FlatList
            data={tasks}
            renderItem={({ item }) => {
              return <Task item={item} tasks={tasks} setTasks={setTasks} />;
            }}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
