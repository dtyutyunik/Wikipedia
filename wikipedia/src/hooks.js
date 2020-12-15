import {useEffect,useState} from 'react';

import axios from 'axios';

const useSearch=(query)=>{

    const [state,setState]= useState({
        articles: [],
        status: 'IDLE',
        error: ''
    });

    useEffect(async() => {
        try{
        //origin=* is a way of getting past cross origin
          let data=await axios.get(`const url='https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search='${query}`)
          
          let parsedResponse=[];
    
          for(let i=0;i<data.data[1].length;i++){
            parsedResponse.push({
              id: data.data[3][i],
              label: data.data[1][i]
            })
          }
         
          setState({
              articles: parsedResponse,
              status: 'SUCCESS',
              error: ''
          })
          
        }catch(e){

          setState({
              articles:[],
              status: 'ERROR',
              error: e
          })

        }
        
      }, [query])

      return state;
}

export default useSearch;