import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import Input from '../login/components/Input';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({});

  const addTodo = async () => {
    try {
      const response = await fetch('http://192.168.31.80:5001/cards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(todo),
      });

      if (response.ok) {
        const newTodo = await response.json();
        getTodo();
        console.log(newTodo);
      }
    } catch (error) {
      console.log('Hata:', error);
    }
  };

  const getTodo = async () => {
    try {
      const response = await fetch('http://192.168.31.80:5001/cards', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        setTodos(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const deleteTodo = async id => {
    try {
      const response = await fetch(`http://192.168.31.80:5001/cards/${id}`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
        },
      });
      if (response.ok) {
        getTodo();
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTodo();
  }, []);
  return (
    <View className="h-full p-5 gap-4">
      <Text className="text-6xl text-red-950">Todos</Text>

      <Input setFormData={setTodo} name="title" />
      <Input setFormData={setTodo} name="description" />

      <TouchableOpacity
        className="w-full border bg-lime-600 "
        onPress={addTodo}>
        <Text className="text-white text-center text-xl">Add</Text>
      </TouchableOpacity>

      <FlatList
        data={todos}
        keyExtractor={item => item._id}
        renderItem={({item}) => (
          <View className="border-[1px] border-zinc-400 p-4">
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
            <TouchableOpacity
              className="absolute right-2"
              onPress={() => {
                deleteTodo(item._id);
              }}>
              <Text className="text-red-600">X</Text>
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={{gap: 10}}
      />
    </View>
  );
};

export default Todo;
