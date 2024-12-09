import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/Color';

const JournalCard = ({ title, content }) => (
  <View style={styles.card}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.content}>{content}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    color: colors.text,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 14,
    color: colors.text,
    marginTop: 8,
  },
});

export default JournalCard;
