import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './Header';
import AddRailyway from './AddRailyway';
import RailwayList from './RailwayList';

function App() {
  const LOCAL_STORAGE_KEY = 'railyways';
  const [railyways, setRailyways] = useState([]);
  const addRailywayHandler = (railyway) => {
    setRailyways([...railyways, railyway]);
  };
  useEffect(() => {
    const retrievedRailyways = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrievedRailyways) {
      setRailyways(retrievedRailyways);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(railyways));
  }, [railyways]);
  return (
    <div className="App">
      <Header className="App-header"/>
        <AddRailyway addAircraftHandler={addRailywayHandler} />
        <RailwayList railways={railyways} />
    </div>
  );
}

export default App;