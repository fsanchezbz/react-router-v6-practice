import React, { useRef } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';

const Search = () => {
  const searchInputRef = useRef();
  const navigate = useNavigate();

  const onSearchHandler = (e) => {
    e.preventDefault();

    const query = {
      title: searchInputRef.current.value
    }
    const queryString = createSearchParams(query);

    navigate({
      pathname: '/articles',
      search: `?${queryString}`
    })
  };

  return (
    <form onSubmit={onSearchHandler} className="search-form">
      <input type="text" className="search" ref={searchInputRef} />
      <button type="submit" className="search-button">
        🔎
      </button>
    </form>
  );
};

export default Search;
