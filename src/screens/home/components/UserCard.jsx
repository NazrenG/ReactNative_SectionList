import {Text, View} from 'react-native';
import React from 'react';

const UserCard = ({user}) => {
  return (
    <View className="border-[1px] border-teal-800">
      <Text>{user.id}</Text>
      <Text>{user.name}</Text>
      <Text>{user.email}</Text>
    </View>
  );
};

export default UserCard;
