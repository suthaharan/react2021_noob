import React, {useRef} from 'react';

const SearchBar = (props) => {
  const inputSearch  = useRef("");
  const getSearchTerm = () => {
    //console.log(inputSearch.current.value);
    props.searchKeyword(inputSearch.current.value);
  }

  return (<div className='ui search right floated '>
    <div className='ui icon input'>
        <input ref={inputSearch} type="text" placeholder='Search contact list' className='prompt' term={props.term} onChange={getSearchTerm} />
        <i className='search icon'></i>
    </div>
  </div>);
};

export default SearchBar;
