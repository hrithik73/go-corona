import React from "react"
import "./App.css"
import Cards from "./components/Cards"
import logo from "./assets/logo.png"
import { useFetch } from "./apis/useFetch"
import NavbarComponent from "./components/Navbar"

const App = () => {
  const url = "https://corona.lmao.ninja/v2/countries/india"
  const { data, loading } = useFetch(url)

  // console.log(data)

  if (loading) {
    return null
  }

  return (
    <div className="container">
      <NavbarComponent />
      <img src={logo} alt="logo" className="logo" />
      <h4>Covid Statistics of India</h4>
      <Cards data={data} />
    </div>
  )
}

export default App
