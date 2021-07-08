import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home'
import Profile from './screens/Profile'
import Conversation from './screens/Conversation';

export default function App() {
  return (
    <Profile />
    // <Home />
    // <Conversation />
  );
}


