import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/Color';

const Header = ({ title }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    padding: 16,
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Header;
