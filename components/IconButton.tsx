import { Ionicons } from '@expo/vector-icons';
import { ComponentProps } from 'react';
import { Pressable, StyleSheet } from 'react-native';

type IoniconsProps = ComponentProps<typeof Ionicons>;

type IconButtonProps = {
  onPress?: () => void;
  icon: IoniconsProps['name'];
  color?: IoniconsProps['color'];
};

const IconButton = ({ onPress, icon, color }: IconButtonProps) => {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
