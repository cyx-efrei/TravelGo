import { StyleSheet } from 'react-native';

import {AuthProvider} from './context/AuthContext';

import AppNav from './assets/navigation/AppNav';

export default function App() {
  return (
    <AuthProvider>
      <AppNav/>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
});
