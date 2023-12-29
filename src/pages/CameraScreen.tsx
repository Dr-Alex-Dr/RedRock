import React, { useRef, useState } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { getAnswers } from '../api/getAnswers';

export function CameraScreen() {
  const cameraRef = useRef<any>(null);
  const [answers, setAnswers] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  function takePicture() {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true };

      cameraRef.current.takePictureAsync(options)
      .then((data: any) => {
          getAnswers(data.uri)
          .then((res: any) => {
            setAnswers(res.result)
            console.log('answers ' + res.result)
            setIsVisible(true)
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
      <View style={{width: '100%', height: 700, position: 'absolute', display: isVisible ? 'flex' : 'none', justifyContent: 'center', alignItems: 'center'}}>
        <View style={{
          width: 300, 
          height: 100, 
          position: 'absolute', 
          backgroundColor: '#fff', 
          borderRadius: 15,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: '#000',
          borderWidth: 2

          }}>
          <Text style={{fontSize: 22, fontWeight: 'bold', color: '#000'}}>Alex L</Text>
          <Text style={{fontSize: 22, fontWeight: 'bold', color: '#000'}}>7/8</Text>
        </View>
      </View>
     
    </View>
  );
};


