import {useEffect,useState, useRef, useCallback} from 'react';

import axios from 'axios';

export const useSearch=(query, limit=10)=>{

    const [state,setState]= useState({
        articles: [],
        status: 'IDLE',
        error: ''
    });


    const cancelToken= useRef(null);


    useEffect(async() => {
        
        if(query.length<3){
            return;
        }

        //if  request is null, then cancel it
        if(cancelToken.current){
            cancelToken.current.cancel();
        }

        //cancel token is created that if input changed we can cancel our request before the rest loads, helpful for slow browsers
        cancelToken.current=axios.CancelToken.source();

        try{
        //origin=* is a way of getting past cross origin
          let data=await axios.get(`https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${query}&limit=${limit}`,{
              cancelToken: cancelToken.current.token
          })
          
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
            if(axios.isCancel(e)){
                // console.log('catch canceled')
                return;
            }

          setState({
              articles:[],
              status: 'ERROR',
              error: e
          })

         
        }
        
      }, [query]);

      return state;
}

// we set a preset paramter for delay of 500 if nothing is sent through
export const useDebounce=(value,delay=500)=>{
  const [debouncedValue,setDebouncedValue]=useState(value);

  useEffect(()=>{

    const timer= setTimeout(()=>{
      setDebouncedValue(value)
    },delay)

    return ()=>{
      clearTimeout(timer)
    }

  },[value,delay])

  return debouncedValue;

}

export const useSearchForm=()=>{

  const [searchValue, setSearchValue]= useState('');

  const onSearchChange=useCallback(
    (e) => {
        setSearchValue(e.target.value)
    },
    [],
  )    

  return {
    searchValue,
    onSearchChange
  }
}