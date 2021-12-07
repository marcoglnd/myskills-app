import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text, StyleSheet } from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
  skill: string;
}

export function SkillCard({ skill, ...rest } : SkillCardProps) {
  return (
    <TouchableOpacity
      style={ styles.buttonSkill }
      { ...rest }
    >
      <Text style={ styles.textSkill }>
        { skill }
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonSkill: {
    alignItems: 'center',
    backgroundColor: '#1f1f1f',
    borderRadius: 50,
    marginVertical: 10,
    padding: 20,
  },
  textSkill: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
