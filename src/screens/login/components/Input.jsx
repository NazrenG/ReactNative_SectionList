import {TextInput} from 'react-native';
import React from 'react';

const Input = ({setFormData, name}) => {
  const handleInputChange = text => {
    setFormData(prevState => ({...prevState, [name]: text}));
  };
  return (
    <TextInput
      className="w-full border"
      placeholder={`Enter ${name}`}
      onChangeText={text => {
        handleInputChange(text);
      }}
    />
  );
};

export default Input;
