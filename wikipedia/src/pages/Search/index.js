import React from 'react';
import {useSearch} from '../../hooks';
import Container from '../../components/Containers'
import Autocomplete from '../../components/Autocomplete'
import ListItem from '../../components/ListItem';

const Search= ({...props})=>{
    const search=props.location.search;
    const params= new URLSearchParams(search);
    const query= params.get('query')
    
    const {articles,status} = useSearch(query, 50)
    if(!articles.length && status === 'SUCCESS'){
        return <h3>No articles for query: {query}</h3>
    }
    return (
        <div>
             <Container>
                {({searchValue, onSearchChange,articles})=> <Autocomplete 
                    searchValue={searchValue}
                    onSearchChange={onSearchChange}
                    articles={articles}
                    />}
            </Container>

            {!articles.length && status === 'SUCCESS'?
                <h3>No articles for query: {query}</h3>

                :articles.map(article=>{
                    return <ListItem {...article} key={article.id}/>
            })}
        </div>
    )
}

export default Search;