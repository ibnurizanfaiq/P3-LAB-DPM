import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Header from '../components/Header';
import JournalCard from '../components/JournalCard';
import { colors } from '../utils/Color';

const HomeScreen = () => {
  const [journals, setJournals] = useState([]);

  useEffect(() => {
    // Simulasi data fetch dari server
    const fetchJournals = async () => {
      const dummyData = [
        { id: '1', title: 'Hari yang Produktif', content: 'Belajar React Native lifecycle.' },
        { id: '2', title: 'Hari ini', content: 'Hari Ulang Tahun Saya 09 Desember' },
      ];
      setTimeout(() => setJournals(dummyData), 2000);
    };
    fetchJournals();
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Jurnal Harian" />
      <FlatList
        data={journals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <JournalCard title={item.title} content={item.content} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

export default HomeScreen;
