import React from 'react';

import './App.css'
import Cards from './components/Cards';
import logo from './assets/logo.png'
import { useFetch } from './apis/useFetch';


const App = () => {

  const url = "https://covid19.mathdro.id/api/countries/india"
  const { data, loading } = useFetch(url)

  console.log(data)

  if (loading) {
    return null
  }

  return (
    <div className="container">
      <img src={logo} alt="logo" className="logo" />
      <h4>Covid Statistic of India</h4>
      <Cards data={data} />
    </div>
  );
}

export default App;
