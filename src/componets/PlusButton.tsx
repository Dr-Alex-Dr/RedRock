import { PlusIcon } from './icons/PlusIcon';
import { View, TouchableOpacity } from 'react-native';

export function PlusButton({onPress}: any) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{ width: 60, height: 60 }}>
            <PlusIcon />
            </View>
        </TouchableOpacity>
    )
}