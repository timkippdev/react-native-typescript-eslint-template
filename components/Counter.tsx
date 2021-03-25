import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export interface Props {
  startingCount?: number;
}

const Counter: React.FC<Props> = (props) => {
  const [count, setCount] = useState(props.startingCount ?? 0);
  return (
    <View>
      <Text style={styles.heading}>Count: {count}</Text>
      <Button title="Click Me" onPress={() => setCount(count + 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 22,
    marginBottom: 10,
  },
});

export default Counter;
