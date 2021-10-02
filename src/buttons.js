
import { StyleSheet, Text, View,TextInput,Button, TouchableOpacity, Dimensions} from 'react-native';

export default function HomeButton({text, onPress}){

    return(
      <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
      </TouchableOpacity>
    )
  
}