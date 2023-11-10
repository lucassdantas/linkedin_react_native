import {Stack} from 'expo-router'

export default function Layout(){
    return(
        <Stack>
            <Stack.Screen name='login' options={{headerShow:false}}/>
            <Stack.Screen name='register' options={{headerShow:false}}/>
        </Stack>
    )
}