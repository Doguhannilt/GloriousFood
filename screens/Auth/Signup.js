import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import { useRegisterMutation } from '../../redux/api/userSlice';
import { setCredentials } from '../../redux/api/auth/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';


const Signup = () => {


  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);

  const [register] = useRegisterMutation()
  const dispatch = useDispatch();
  const navigation = useNavigation()

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      setPasswordMatch(false);
      return;
    }
    try {
      // const response = await axios.post(`http://192.168.1.203:5000/api/users/login`, { email, password });
       // const userData = response.data;
       const userData = await register({ email, password, name, nickname }).unwrap();
       console.log(userData);
       dispatch(setCredentials({ ...userData }));
       navigation.navigate('Home'); 
     } catch (err) {
       Alert.alert('Login Failed', err?.data?.message || err.message);
       console.log(err)
     }
    Alert.alert('Success', 'Account created successfully!');
  };

  return (
    <SafeAreaView className ='flex-1 bg-white p-6'>
      <View className ='flex-1 justify-center'>
        <Text className ='text-black text-3xl font-bold mb-6'>Sign Up</Text>
        
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Name"
          className ='bg-gray-200 p-3 rounded mb-4'
        />
        
        <TextInput
          value={nickname}
          onChangeText={setNickname}
          placeholder="Nickname"
          className ='bg-gray-200 p-3 rounded mb-4'
        />
        
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          keyboardType="email-address"
          className ='bg-gray-200 p-3 rounded mb-4'
        />
        
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry
          className ='bg-gray-200 p-3 rounded mb-4'
        />
        
        <TextInput
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="Confirm Password"
          secureTextEntry
          className ='bg-gray-200 p-3 rounded mb-4'
        />

        {!passwordMatch && (
          <Text className ='text-red-500 mb-4'>
            Passwords do not match.
          </Text>
        )}

        <TouchableOpacity
          onPress={handleSignUp}
          className ='bg-purple-600 p-3 rounded'
        >
          <Text className ='text-white text-center text-lg'>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Signup;
