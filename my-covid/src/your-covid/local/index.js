import React from 'react';
// import { View, Text, StyleSheet} from 'react-native';
import axios from "axios"
import { Local } from '..';

// class Global extends React.Component{
//     constructor(){
//         super();
//         this.state = {
//             api: [],
//             positive: '',
//             meninggal: '',
//             sembuh: '',
//         }
//     }

    // componentDidMount = () => {
    //     this.getDataApi();
    // }

    // getDataApi = async () => {
    //     const response = await fetch('https://covid19.mathdro.id/api');
    //     //  const json = await response.json();
    //     this.setState({positive: /*json.*/confirmed.value})
    //     this.setState({sembuh: /*json.*/recovered.value})
    //     this.setState({meninggal: /*json.*/deaths.value})
    // }

    function Local () {
        const [confirmed, setConfirmed] = useState("");
        const [deaths, setDeaths] = useState("");
        const [recovered, setRecovered] = useState("");
    
    useEffect(()=> {
        axios 
         .get("https://covid19.mathdro.id/api")
         .then((response) => { 
            this.setState({positive: /*json.*/confirmed.value})
            this.setState({sembuh: /*json.*/recovered.value})
            this.setState({meninggal: /*json.*/deaths.value})
        })  
     }, []);
    
   
   // render(){
        return (
                   <View style={styles.container}>
                   <View style={styles.box1}>
                       <Text style={styles.text}> Positif {this.state.positive}</Text>
                   </View>
                   <View style={styles.box2}>
                       <Text style={styles.text}> Sembuh {this.state.sembuh}</Text>
                   </View>
                   <View style={styles.box3}>
                   <Text style={styles.text}> Meninggal {this.state.meninggal}</Text>
                   </View>
               </View>
        )
   // }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'relative',
    },
    box1: {
        width: 120,
        height: 100,
        backgroundColor: 'yellow',
        fontSize: 18, 
        marginHorizontal: 10, height: 90, width: 100, 
        borderRadius: 16, justifyContent: "center" 
    },
    box2: {
        width: 120,
        height: 100,
        backgroundColor: 'lime',
        marginHorizontal: 10, 
        height: 90, 
        width: 100, 
        borderRadius: 16, 
        justifyContent: "center" 
    },
    box3: {
        width: 120,
        height: 100,
        backgroundColor: 'red',
        marginHorizontal: 10, 
        height: 90, 
        width: 100, 
        borderRadius: 16, 
        justifyContent: "center" 
    },
    text: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    }
})


export default Local;