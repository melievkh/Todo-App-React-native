import { Pressable, Text, View } from "react-native";
import styles from "./style";

const Footer = ({ navigation }) => {
  return (
    <>
      <View style={styles.footer}>
        <Pressable
          style={styles.switchButton}
          onPress={() => navigation.navigate("main")}
        >
          <Text>All</Text>
        </Pressable>
        <Pressable
          style={styles.switchButton}
          onPress={() => navigation.navigate("completed")}
        >
          <Text>Completed</Text>
        </Pressable>
      </View>
    </>
  );
};

export default Footer;
