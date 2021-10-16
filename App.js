import { StatusBar } from 'expo-status-bar';
import React, {useCallback} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NotificationProvider, useNotification } from 'react-native-internal-notification';

function Content() {
  const notification = useNotification();

    const handleNotificationTestClick = useCallback(() => {
        notification.showNotification({
            title: 'My first notification',
            message: 'Hello from my first message',
            onPress: () => {
                alert('Pressed');
            },
        });
    }, [notification]);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <TouchableOpacity onPress={handleNotificationTestClick} style={{margin: 20, border: 2, borderColor: '#000', backgroundColor: '#ccc', padding: 10}}>
          <Text>Show notification</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  return (
    <NotificationProvider>
      <Content />
    </NotificationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
