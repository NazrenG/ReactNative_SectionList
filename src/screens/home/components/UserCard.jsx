import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const UserCard = ({user}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('UserDetails', {user: user});
      }}
      className="border-[1px] border-zinc-400 p-4">
      <Text>{user.name}</Text>
      <Text>{user.phone}</Text>
      <Text>{user.email}</Text>
    </TouchableOpacity>
  );
};

export default UserCard;
