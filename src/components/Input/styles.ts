import { StyleSheet } from 'react-native';
import { COLORS } from '../../themes/colors';

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:55,
        borderRadius:4,
        backgroundColor:COLORS.background,

        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    label:{
        alignSelf:'flex-start',
        fontWeight:'bold',
        marginLeft:5,
        marginBottom:5,
    },
    leftContent:{
        width:'15%',
        height:55,
        borderTopLeftRadius:4,
        borderBottomLeftRadius:4,
        
        backgroundColor:COLORS.light,
        justifyContent:'center',
        alignItems:'center'
    },
    input:{
        paddingHorizontal:5,
        height:55,
    },
    rightContent:{
        width:'15%',
        height:55,
        borderTopRightRadius:4,
        borderBottomRightRadius:4,

        
        justifyContent:'center',
        alignItems:'center'
    },
    errorMessage:{
        color:COLORS.danger,
        alignSelf:'flex-start',
        marginTop:5,
        marginLeft:5,
    }
});

export default styles;