import './App.css';
import { useEffect, useState } from "react";
import { createMockRecords } from "./shared/mockResponse";
import HomePage from "./page/homepage";
import  SearchResultPage from "./page/SearchResultPage" 

function App() {
  const [state, setState] = useState([]);
  useEffect(() => {
    setState(createMockRecords(20));
  }, []);
  return (
    <>
    {/* <HomePage data={state} /> */}
    <SearchResultPage data={state} updateProduct= {setState}/>
    </>
  );
}

export default App;
