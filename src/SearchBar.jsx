import React, { useState, useEffect } from "react";
import "./SearchBar.css";
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import CircularProgress from '@mui/material/CircularProgress'; 

function SearchBar() {
  const [searchValue, setSearchValue] = useState(null);
  const [options, setOptions] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate
  const [isLoading, setIsLoading] = useState(true);

  const handleInputChange = (event, newValue) => {
    setSearchValue(newValue);
  };

  useEffect(() => {
    const url = 'https://cat-wiki-api-8m0t.onrender.com/';
    const local = 'http://localhost:3000/';
    
  
      axios.get(local)
      .then(response => {
        //console.log("respuestas ", response);
        
        const optionNames = response.data.map(option => option.name);
        setOptions(optionNames);
        setIsLoading(false);
      })
      .catch(error => {
        //console.log("el error es", error);
        console.error('Error fetching autocomplete options:', error);
        setIsLoading(false);
      });

  }, []);

  const [placeholder, setPlaceholder] = useState('');

  useEffect(() => {
    function updatePlaceholder() {
      if (window.innerWidth <= 768) {
        setPlaceholder('Search');
      } else {
        setPlaceholder('Enter your breed');
      }
    }

    updatePlaceholder();

    window.addEventListener('resize', updatePlaceholder);
    return () => {
      window.removeEventListener('resize', updatePlaceholder);
    };
  }, []);

  const handleOptionSelect = (event, selectedOption) => {
    const url = `https://cat-wiki-api-8m0t.onrender.com/incrementSearchCount/${encodeURIComponent(selectedOption)}`;
    const localCat = `http://localhost:3000/incrementSearchCount/${encodeURIComponent(selectedOption)}`;
    if (selectedOption) {
      axios.put(localCat)
        .then(response => {
          // Si la solicitud fue exitosa, redirige a la página del gato
          navigate(`/cat/${encodeURIComponent(selectedOption)}`);
        })
        .catch(error => {
          console.log("El error es: ", error)
          console.error('Error al incrementar searchCount:', error);
        });
    }
  };

  return (
    <div className="wrapper">
      <div className="searchBar">
        <Autocomplete
          sx={{
            display: 'inline-block',
            width: "100%",
          }}
          
          id="searchQueryInput"
          options={options}
          value={searchValue}
          onChange={handleOptionSelect}
          onInputChange={handleInputChange}
          loading={isLoading}
          //renderOption={(option) => <li key={option}>{option}</li>}
          renderInput={(params) => (
            <div ref={params.InputProps.ref}>
              <input
                type="text"
                {...params.inputProps}
                name="searchQueryInput"
                placeholder={placeholder}
              />
            </div>
            
          )}
          noOptionsText={isLoading ? <CircularProgress size={24} /> : "No options"} 
        />
        <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit">
          <svg viewBox="0 0 24 24">
          <path fill="#666666" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;

