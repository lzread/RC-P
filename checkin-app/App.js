import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, Text, Button, StyleSheet } from 'react-native';

export default function App() {
  const [checkIns, setCheckIns] = useState([]);

  const handleCheckIn = () => {
    const now = new Date();
    setCheckIns([{ key: now.toISOString(), time: now.toLocaleString() }, ...checkIns]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Check In" onPress={handleCheckIn} />
      </View>
      <FlatList
        data={checkIns}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.time}</Text>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  item: {
    padding: 10,
    fontSize: 18,
  },
});
