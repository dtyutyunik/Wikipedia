// import './App.css';
import ReactAutocomplete from 'react-autocomplete';
import {useState,useEffect} from 'react';
import {useSearch, useDebounce} from './hooks.js'


function App() {
  
  const [value,setValue]=useState('');
  //custom hook

  // const {articles,status,error}=useSearch(value);
  //we set a delay of half a second to our useSearch
  const {articles}=useSearch(useDebounce(value));


  return (
    <>
      {/* <p>Status {status}</p>
      <p>Error: {error}</p> */}

      <ReactAutocomplete
          items={articles}
          shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
          getItemValue={item => item.label}
          renderItem={(item, highlighted) =>
            <div
              key={item.id}
              style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
            >
              {item.label}
            </div>
          }

          value={value}
          onChange={e=>setValue(e.target.value)}
        
        />

    </>
  );
}

export default App;
