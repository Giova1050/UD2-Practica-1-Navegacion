import { Stack } from 'expo-router'
import {  StyleSheet, View } from 'react-native'
import React from 'react'

const _layout = () => {
  return (
    <Stack>
        <Stack.Screen name="profile"/>
    </Stack>
  )
}

export default _layout

const styles = StyleSheet.create({})