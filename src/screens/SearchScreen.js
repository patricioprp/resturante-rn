import React, {useState,useEffect} from "react";
import { Text,View,StyleSheet } from "react-native";
import  SearchBar from '../components/SearchBar';
import useResults from "../hook/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
    const [term,setTerm] = useState('');
    const [searchApi,results,errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
    <View>
        <SearchBar 
        term={term} 
        onTermChange={setTerm}
        onTermSubmit = {() => searchApi(term)}
        />
        { errorMessage ? <Text>{errorMessage}</Text> : null}
        <Text>Encontramos {results.length} resultados</Text>
        <ResultsList result = {filterResultsByPrice('$')} title ='Cost Effective'/>
        <ResultsList result = {filterResultsByPrice('$$')} title ='Bit Pricier'/>
        <ResultsList result = {filterResultsByPrice('$$$')} title ='Big Spencer'/>
    </View>
    );
}

const styles = StyleSheet.create({

});

export default SearchScreen;