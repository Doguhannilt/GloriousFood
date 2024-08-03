import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';


// URLS
import {BASE_URL, USERS_URL} from '../../redux/constant'


// AXIOS
import axios from 'axios'

// REDUX
import { useDispatch } from 'react-redux'
// import { useLoginMutation } from '../../redux/api/userSlice';
import { setCredentials } from '../../redux/api/auth/authSlice';
import { useLoginMutation } from '../../redux/api/userSlice';

const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

   const [login, { isLoading }] = useLoginMutation();



  const submitHandler = async () => {
    try {
     // const response = await axios.post(`http://192.168.1.203:5000/api/users/login`, { email, password });
      // const userData = response.data;
      const userData = await login({ email, password }).unwrap();
      console.log(userData);
      dispatch(setCredentials({ ...userData }));
      navigation.navigate('Home'); 
    } catch (err) {
      Alert.alert('Login Failed', err?.data?.message || err.message);
      console.log(err)
    }
  };

  return (
    <View className='flex-1 justify-center bg-gray-100 p-6'>
      <Text className='text-3xl font-bold text-gray-800 mb-6'>Login</Text>

      <TextInput
        className='bg-white p-4 rounded-lg mb-4 border border-gray-300'
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        className='bg-white p-4 rounded-lg mb-6 border border-gray-300'
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />

      <TouchableOpacity
        onPress={submitHandler}
        className='bg-purple-500 p-4 rounded-lg'>
        <Text className='text-white text-center text-lg font-semibold'>
          Login
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Sign Up')}
        className='mt-4'>
        <Text className='text-purple-500 text-center'>
          Don't have an account? Sign up
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
