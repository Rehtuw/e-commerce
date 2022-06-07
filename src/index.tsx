import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { BLACK, WHITE } from './constants'
import { Space, Text, CheckBox, ButtonReview } from './components'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BLACK
  },
  textStyle: {
    color: WHITE,
    fontSize: 25,
    paddingBottom: 10
  }
})

export default function App({}) {
  const { container, textStyle } = styles
  const [isEnabled, setIsEnabled] = useState(false)
  const [redCheckBoxValue, setRedCheckBoxValue] = useState(false)
  const [whiteCheckBoxValue, setWhiteCheckBoxValue] = useState(false)

  const toggleSwitch = () => setIsEnabled(previousState => !previousState)
  const toggleRedCheckBox = () => setRedCheckBoxValue(redCheckBoxValue => !redCheckBoxValue)
  const toggleWhiteCheckBox = () => setWhiteCheckBoxValue(whiteCheckBoxValue => !whiteCheckBoxValue)

  return (
    <View style={container}>
      <Text h0 title="CheckBox" />
      <Space height={30} />
      <CheckBox isPrimary={false} value={redCheckBoxValue} onToggle={toggleRedCheckBox} />
      <Space height={30} />
      <CheckBox isPrimary={true} value={whiteCheckBoxValue} onToggle={toggleWhiteCheckBox} />
      <Space height={30} />
      <Text title="ButtonReview" h0 />
      <Space height={15} />
      <ButtonReview />
    </View>
  )
}
