import React, { PropsWithChildren } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Subtitle = ({ children }: PropsWithChildren) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: '#e2b497',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitleContainer: {
    padding: 6,
    borderBottomWidth: 2,
    borderBottomColor: '#e2b497',
    marginVertical: 4,
    marginHorizontal: 12,
  },
});
