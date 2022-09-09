import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:55,

        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',

        borderWidth:1,
        borderRadius:5,
        borderColor:'#CCC',
        backgroundColor:'#F8F9FA'
    },
    label:{
        alignSelf:'flex-start',
        marginVertical:2,
        fontSize:13,
        fontWeight:'bold'
    },
    placeholder:{
        color:'#555',
        paddingHorizontal:12
    },
    arrowDown:{
        height:55,
       justifyContent:'center',
       alignItems:'center',
       paddingHorizontal:12
    },
    btnRemove:{
       height:55,
       justifyContent:'center',
       alignItems:'center',
       paddingHorizontal:12
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomColor:'#ddd',
        borderBottomWidth:1,
    },
    touchGoBack:{
        paddingHorizontal: 12,
        paddingVertical:10
    },
    headerTitle:{
        fontWeight:'bold'
    },
    cancel:{
        color:'red',
        fontWeight:'bold',
        paddingHorizontal: 12,
        paddingVertical:10
    },
    option:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignContent:'center',
        borderBottomColor:'#eee',
        borderBottomWidth:1,
        paddingHorizontal:20,
        paddingVertical:20
    }
})

export default styles;