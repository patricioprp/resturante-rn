import {useState,useEffect} from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState([]);

    const searchApi = async(searchTerm) => {
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
    useEffect(() => {
        searchApi('pasta')
      }, [])

      return [searchApi,results,errorMessage];
};