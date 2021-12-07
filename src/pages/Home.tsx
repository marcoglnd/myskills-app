import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
} from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface SkillData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greeting, setGreeting] = useState('');

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    }
    setMySkills([...mySkills, data]);
  }


  function handleRemoveNewSkill(id: string) {
    setMySkills(mySkills.filter(skill => skill.id !== id));
  }

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreeting('Good morning');
    } else if (currentHour < 18) {
      setGreeting('Good afternoon');
    } else {
      setGreeting('Good evening');
    }
  }, []);

  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>Welcome, Marco</Text>
      <Text style={ styles.greeting }>{ greeting }</Text>
      <TextInput
        style={ styles.input }
        placeholder="Type a skill"
        placeholderTextColor='#555'
        onChangeText={setNewSkill}
      />

      <Button
        onPress={ handleAddNewSkill }
        title="Add skill"
      />

      <Text style={[ styles.title, { marginVertical: 20 } ]}>
        My skills
      </Text>

      <FlatList
        data={mySkills}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SkillCard
            skill={item.name}
            onPress={() => handleRemoveNewSkill(item.id)}
          />
        )}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121015',
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  greeting: {
    color: '#fff',
  },
  input: {
    backgroundColor: '#1f1f1f',
    borderRadius: 7,
    color: '#fff',
    fontSize: 21,
    marginTop: 20,
    padding: Platform.OS === 'ios' ? 15 : 10,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  }
})