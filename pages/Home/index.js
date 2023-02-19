import { FlatList, Pressable, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";

import styles from "./style";
import Task from "../Task";
import AddTask from "../AddTask";
import { showModal } from "../../redux/reducer/modalReducer";

const Home = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  return (
    <View style={styles.appWrapper}>
      {/* HEADER */}

      <View style={styles.header}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>

        <View stylele={styles.addButtonWrapper}>
          <Pressable
            android_ripple={{ color: "#67a5f0", borderless: true }}
            style={styles.addButton}
            onPress={() => dispatch(showModal())}
          >
            <Ionicons name="add-outline" size={30} />
          </Pressable>

          <AddTask />
        </View>
      </View>

      {/* BODY */}

      <View style={styles.tasksListWrapper}>
        <View>
          <FlatList
            data={tasks}
            renderItem={({ item }) => {
              return <Task item={item} />;
            }}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
