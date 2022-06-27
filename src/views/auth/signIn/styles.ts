import { StyleSheet } from 'react-native';
import { COLORS } from '../../../themes/colors';

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    content:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:20,
    },
    logo:{
        width:200,
        height:78,
        resizeMode:'contain'
    },
    linking:{
        alignSelf:'flex-end',
        fontWeight:'bold',
        color:COLORS.primary,
        textDecorationLine:'underline',
        marginBottom:20
    }

});

export default styles;