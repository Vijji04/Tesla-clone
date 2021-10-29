import{StyleSheet} from "react-native";

const styles= StyleSheet.create({

    menuItems:{
        marginTop:20,
        marginLeft:20,
        marginRight:20
    },

    menuRow:{
        marginTop:15,
        flexDirection:"row",
        alignItems:"center",
    },

    menuTextBox:{
        flexGrow:1
    },

    icon:{
        color:"white"
    },
    menuText:{
        color:"white",
        fontSize:16,
        fontWeight:"bold",
        marginLeft:15,
        textTransform:"uppercase"
    },
    arrowIcon:{
        color:"#4D4D4E"
    }
})

export default styles;