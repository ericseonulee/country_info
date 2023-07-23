import { useState } from "react";

import PageHeader from "./components/PageHeader";
import SearchBar from "./components/search/SearchBar";
import SearchResult from "./components/search/SearchResult";

function App() {
  const [searchResult, setSearchResult] = useState({});

  const handleSearch = (searchQuery) => {
    try {
      fetch(`https://restcountries.com/v3.1/name/${searchQuery}`)
        .then((response) => response.json())
        .then((data) => {
          return setSearchResult(data);
        });
    } catch (err) {
      console.log(err.message);
    }
    return null;
  };

  return (
    <div>
      <PageHeader />
      <SearchBar onSearch={handleSearch} />
      <SearchResult searchResult={searchResult} />
    </div>
  );
}

export default App;
