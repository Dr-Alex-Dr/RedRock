import { Button } from 'react-native-paper';

export function ButtonComponent({text, onPress}: any) {
    return (
        <Button 
                mode="contained" 
                onPress={onPress}  
                textColor='#fff'
                buttonColor='#870D1A'
                style={{borderRadius: 5}}
                labelStyle={{fontSize: 18}}>
                {text}
        </Button>
    )
}