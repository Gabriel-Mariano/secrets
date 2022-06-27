import { StyleSheet } from 'react-native';
import { COLORS } from '../../themes/colors';

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height: 50,
        
        justifyContent:'center',
        alignItems:'center',

        marginVertical:10,
        borderRadius:4,
        borderWidth:2,
        borderColor:COLORS.primary
    },
    title:{
        fontSize:16
    }
})

export default styles;