// import React, { Component } from "react";
import Header from "./components/Header";
import Workers from "./components/Workers";
import SearchBar from "./components/SearchBar";
import "./App.css";

import { useState, useEffect } from "react";

function App() {
  const [employeeArray, setEmployeeArray] = useState([]);

  // FETCHING THE API
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=20&nat=us")
      .then((response) => {
        return response.json();
      })
      .then((employees) => {
        setEmployeeArray(employees.results);
      });
  }, []);

  // THIS IS SORTING THE NAMES I MADE TWO FUNCTIONS ONE FOR GOING UP AND ONE FOR GOING DOWN.
  const sortNameAtoZ = () => {
    let sortFirstNamesArray = employeeArray.sort((a, b) => {
      return a.name.first > b.name.first ? 1 : -1;
    });
    setEmployeeArray([...sortFirstNamesArray]);
  };

  const sortNameZtoA = () => {
    let sortFirstNamesArray = employeeArray.sort((a, b) => {
      return a.name.first < b.name.first ? 1 : -1;
    });
    setEmployeeArray([...sortFirstNamesArray]);
  };
  // LAST NAME SORT
  const sortLastNameAtoZ = () => {
    let sortLastNamesArray = employeeArray.sort((a, b) => {
      return a.name.last > b.name.last ? 1 : -1;
    });
    setEmployeeArray([...sortLastNamesArray]);
  };

  const sortLastNameZtoA = () => {
    let sortLastNamesArray = employeeArray.sort((a, b) => {
      return a.name.last < b.name.last ? 1 : -1;
    });
    setEmployeeArray([...sortLastNamesArray]);
  };

  // SEARCH BAR
  const formBarThing = (e) => {
    e.preventDefault();
  };

    const searchNames = (e) => {
    let smallerArray = employeeArray.filter((each) => {
      return (
        each.name.first.toLowerCase().includes(e.target.value.toLowerCase()) ||
        each.name.last.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });
    setEmployeeArray(smallerArray);
  };

  return (
    <>
      <Header />

      <SearchBar searchNames={searchNames}
      formBarThing={formBarThing}/>
      
      <Workers
        employeeArray={employeeArray}
        sortNameAtoZ={sortNameAtoZ}
        sortNameZtoA={sortNameZtoA}
        sortLastNameAtoZ={sortLastNameAtoZ}
        sortLastNameZtoA={sortLastNameZtoA}
        
      />
    </>
  );
}

export default App;
