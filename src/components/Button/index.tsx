import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type PropsType = {
  title: string;
  onPress?: () => void;
};

export function Button({ title, onPress }: PropsType) {
  return (
    <TouchableOpacity style={styles.containerButton} onPress={onPress}>
      <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
  );
}
