import React, { useRef, useState } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { getAnswers } from '../api/getAnswers';

export function CameraScreen() {
  const cameraRef = useRef<any>(null);
  const [answers, setAnswers] = useState('');

  function takePicture() {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true };

      cameraRef.current.takePictureAsync(options)
      .then((data: any) => {
          getAnswers(data.uri)
          .then((res: any) => {
            setAnswers(res.result)
            console.log('answers ' + res.result)
          })
      })
    }
  };

  return (
    <View style={{ flex: 1, position: 'relative' }}>
      <RNCamera
        ref={(ref) => (cameraRef.current = ref)}
        style={{ flex: 1 }}
        type={RNCamera.Constants.Type.back}
        captureAudio={false}
      >
      <View style={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        position: 'absolute',
        bottom: 30,
      }}>
        <TouchableOpacity 
          onPress={takePicture}
          style={{
            width: 65, 
            height: 65,
            backgroundColor: '#fff',
            borderRadius: 100,
            
          }}>
        </TouchableOpacity>
        </View>
      </RNCamera>
      <Text>{answers}</Text>
    </View>
  );
};


