import {Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Input from './components/Input';
//scrollview
const Login = () => {
  const [formData, setFormData] = useState({});
  useEffect(() => {
    console.log(formData);
  }, [formData]);
  return (
    <View className="flex-1 justify-center items-center px-4 gap-4">
      <Text className="text-6xl text-red-950">Login</Text>

      <Input setFormData={setFormData} name="email" />
      <Input setFormData={setFormData} name="password" />

      <TouchableOpacity
        className="w-full border bg-lime-700 py-6"
        onPress={() => {
          console.log(formData);
        }}>
        <Text className="text-white text-center text-xl">Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
