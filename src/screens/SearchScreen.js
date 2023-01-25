import React, {useState} from "react";
import { Text,View,StyleSheet } from "react-native";
import  SearchBar from '../components/SearchBar';
import yelp from "../api/yelp";

const SearchScreen = () => {
    const [term,setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState([]);

    const searchApi = async(searchTerm) => {
        console.log('ejecutando la api')
        try{
        const response = await yelp.get('/search',{
            params: {
                limit: 50,
                term: searchTerm,
                location: 'san jode'
            }
        });
        setResults(response.data.businesses)
        setErrorMessage('');
        }catch(err){
            setErrorMessage('Algo anda mal...');
        }
    };

    //llamar a searchApi cuando el componente se renderiza por
    //primera vez / mala eleccion
    // searchApi('pasta')
    return (
    <View>
        <SearchBar 
        term={term} 
        onTermChange={setTerm}
        onTermSubmit = {() => searchApi(term)}
        />
        { errorMessage ? <Text>{errorMessage}</Text> : null}
        <Text>Encontramos {results.length} resultados</Text>
    </View>
    );
}

const styles = StyleSheet.create({

});

export default SearchScreen;