import {Text, View} from 'react-native';
import React from 'react';

const UserCard = ({user}) => {
  return (
    <View className="border-[1px] border-zinc-400 p-4">
      <Text>{user.name}</Text>
      <Text>{user.phone}</Text>
      <Text>{user.email}</Text>
    </View>
  );
};

export default UserCard;
