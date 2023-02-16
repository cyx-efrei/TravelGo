import React from 'react'
import Svg, { Circle, Rect } from 'react-native-svg';
import { View } from 'react-native'

const ThreeDots = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

        <Svg width="120" height="30" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg" fill="black">
            <Circle cx="15" cy="15" r="15">
                <animate attributeName="r" from="15" to="15"
                        begin="0s" dur="0.8s"
                        values="15;9;15" calcMode="linear"
                        repeatCount="indefinite" />
                <animate attributeName="fill-opacity" from="1" to="1"
                        begin="0s" dur="0.8s"
                        values="1;.5;1" calcMode="linear"
                        repeatCount="indefinite" />
            </Circle>
            <Circle cx="60" cy="15" r="9" fill-opacity="0.3">
                <animate attributeName="r" from="9" to="9"
                        begin="0s" dur="0.8s"
                        values="9;15;9" calcMode="linear"
                        repeatCount="indefinite" />
                <animate attributeName="fill-opacity" from="0.5" to="0.5"
                        begin="0s" dur="0.8s"
                        values=".5;1;.5" calcMode="linear"
                        repeatCount="indefinite" />
            </Circle>
            <Circle cx="105" cy="15" r="15">
                <animate attributeName="r" from="15" to="15"
                        begin="0s" dur="0.8s"
                        values="15;9;15" calcMode="linear"
                        repeatCount="indefinite" />
                <animate attributeName="fill-opacity" from="1" to="1"
                        begin="0s" dur="0.8s"
                        values="1;.5;1" calcMode="linear"
                        repeatCount="indefinite" />
            </Circle>
        </Svg>

    </View>
  )
}

export default ThreeDots;