import { useState, useEffect } from "react"
//import  { getGifs } from '../helpers/getGifs';
import { getGifs } from '../components/helpers/getGifs';

export const useFetchGifs = (category) => {
    
    const [state, setStaSe] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(category)
            .then(imgs => {
                setStaSe({
                    data: imgs,
                    loading: false
                });
            })
    }, [category]);


    return state; // {data:[], loading: true}

}
