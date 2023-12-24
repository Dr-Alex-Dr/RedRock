import { PlusIcon } from './icons/PlusIcon';
import { View, TouchableOpacity } from 'react-native';

export function PlusButton({onPress}: any) {
    return (
        <TouchableOpacity style={{position: 'absolute', zIndex: 1, bottom: 32, right: 32}} onPress={onPress}  activeOpacity={0.8}>
            <View style={{ width: 60, height: 60}}>
            <PlusIcon />
            </View>
        </TouchableOpacity>
    )
}