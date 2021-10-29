import React,{useState} from 'react'
import { View,Text,ImageBackground,Image,TouchableOpacity } from 'react-native'
import styles from "./styles"
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import { faCog,faFan,faKey,faLock,faToolbox, faUnlockAlt } from '@fortawesome/free-solid-svg-icons'
import Menu from '../Menu'

const Caritem   = () => {   
    const[locked,setLocked] = useState(true)
    const clickLock = () =>{
        if(locked)
        {
            setLocked(false)
        }
        else{
            setLocked(true)
        }
    }
    return (
        <View style={styles.carContainer}>
            {/* <Text>Let's GO 🔥 </Text> */}
            {/* Header  */}
            <ImageBackground
             source={require("../../assets/background.png")}
             style={styles.backgroundImage} />
             
            <View style={styles.header}>
                <TouchableOpacity>
                <FontAwesomeIcon style={styles.icons} icon={ faCog} size={24} />
                </TouchableOpacity>
                {/* <Text style={styles.headerTitle}> */}
                    {/* Devmobile */}
                {/* </Text> */}
                <TouchableOpacity>
                <FontAwesomeIcon style={styles.icons} icon={ faToolbox} size={24}/>
                </TouchableOpacity>
                </View>
            {/* batterySection */}
            <View style={styles.batterySection}>
                <Image
                    source={require("../../assets/battery.png")}
                    style={styles.batteryImage}>
                </Image>
                <Text style={styles.batteryText}>
                    150 mi
                </Text>
            </View>
        {/* ControlSection */}
         
         <View style={styles.controls}>
         <TouchableOpacity>
             <View style={styles.controlsButton}>
             <FontAwesomeIcon style={styles.icons} icon={ faFan} size={24} />
             </View>
             </TouchableOpacity>
             <TouchableOpacity>
             <View style={styles.controlsButton}>
             <FontAwesomeIcon style={styles.icons} icon={ faKey} size={24} />
             </View>
             </TouchableOpacity>
             <TouchableOpacity onPress={clickLock} >
             <View style={styles.controlsButton}>
             <FontAwesomeIcon style={styles.icons} icon={locked? faLock: faUnlockAlt} size={24} />
             </View>
             </TouchableOpacity>
         </View>
        <Menu />
        </View>
    )
}

export default Caritem;
