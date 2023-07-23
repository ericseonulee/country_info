import { useState } from "react";

import PageHeader from "./components/PageHeader";
import SearchBar from "./components/search/SearchBar";
import SearchResult from "./components/search/SearchResult";

function App() {
  const [searchResult, setSearchResult] = useState({});

  const handleSearch = (searchQuery) => {
    setSearchResult(searchQuery);
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
