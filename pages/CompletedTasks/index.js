import { FlatList, View } from "react-native";
import { useSelector } from "react-redux";

import Task from "../Task";
import styles from "./style";

const CompletedTasks = () => {
  const tasks = useSelector((state) => state.tasks);

  const filteredTasks = tasks.filter((task) => task.completed === true);

  return (
    <View style={styles.wrapper}>
      {filteredTasks ? (
        <FlatList
          data={filteredTasks}
          renderItem={({ item }) => {
            return <Task item={item} />;
          }}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <View>
          <Text style={{ marginTop: 20 }}>No completed tasks yet?</Text>
        </View>
      )}
    </View>
  );
};

export default CompletedTasks;
