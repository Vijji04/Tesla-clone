import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
        carContainer:{
        width: "100%",
        height: "100%",
        backgroundColor:"orange"
        },
        header:
        {
            marginTop:33,
            marginLeft:20,
            marginRight:20,
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",
            marginBottom:2
        },
        headerTitle:
        {
                color:"white",
                fontSize: 16,
                fontWeight: "bold"
        },
        icons:
        {
            color:"white"
        },
        backgroundImage:
        {
            width:"100%",
            height:"100%",
            resizeMode:"cover",
            position:"absolute"
        },
        batterySection:
        {
            marginTop:5,
            flexDirection:"row",
            justifyContent:"center",
            marginBottom:5
        },
        batteryImage:{
            height:26,
            width:70,
            marginRight:12
        },
        batteryText:{
            color:"white",
            fontSize:23,
            fontWeight:"bold"
        },

        controls:{
        flexDirection:"row",
        justifyContent:"center",
        marginTop:175
        },

        controlsButton:{
            borderWidth:1,
            borderColor:"white",
            borderRadius:50,
            padding:18,
            marginLeft:25
        }

})

export default styles