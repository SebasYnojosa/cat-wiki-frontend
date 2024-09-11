import React, { useState, useEffect }  from "react";
import "./MainContainer.css"
import SearchBar from "./SearchBar";
import axios from "axios";
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from "@mui/material/CircularProgress";

function MainContainer () {
    const options = ['Option 1', 'Option 2'];
    const [mostSearchedCats, setMostSearchedCats] = useState([]);
    const [mostSearchedCatsLoading, setMostSearchedCatsLoading] = useState({
        image_1: true,
        image_2: true, 
        image_3: true,
        image_4: true
    });

    const handleImageLoad = (imageKey) => {

            setMostSearchedCatsLoading(
                prevState => ({
                    ...prevState,
                    [imageKey]: false,
                })
            );

        
    }

    const url = 'https://cat-wiki-api-8m0t.onrender.com/most_searched';
    const local = 'http://localhost:3000/most_searched';

    useEffect(() => {
      axios.get(local)
        .then(response => {
          setMostSearchedCats(response.data);
          console.log("Most searched ", response.data);
        })
        .catch(error => {
          console.error('Error al obtener los gatos más buscados:', error);
        });
    }, []);
    return <div className="main-cat-container">
        <div className="main-cat-container-img">
            <div className="main-cat-container-img-1">
                <div className="inside-cat-container-img-1">
                    <div>
                        <div className="logo-inverse-container">
                            CatWiki
                            <img src="../images/invertido.png" alt="" />

                        </div>
                        <div className="get"><p>Get to know more about your cat breed</p></div>
                        
                    </div>
                    <div>
                        <SearchBar></SearchBar>
                    </div>
                </div>

                <div>

                </div>

            </div>
            <div className="main-cat-container-img-2"></div>
        </div>
        <div className="main-cat-container-most-searched">

            <div className="most-searched">     
                <div className="most-searched-breed-2">  
                    <p>Most searched breeds</p>
                    <div class="mi-rectangulo"></div>

                </div>
                <div className="most-searched-discover"> 
                    <div className="breeds-to-discover">
                        <h2>66+ Breeds For you to discover</h2>
                    </div>
              
                    <div className="see-more">
                        <a href="#/most_searched">
                        <div className="see-more-2">
                            <p>SEE MORE</p> <img src="../images/arrow-right-alt_117700.svg" alt=""/> 
                        </div>
                        </a>
                    </div>

                
                </div>
                
                <div className="most-searched-photos">
                  

                    
                    <div className="img-container" id="left">
                        <div id="first-image">
                            {mostSearchedCatsLoading.image_1 && (<div className="loading-wrapper"> <CircularProgress sx={80} /> </div>
                                
                            )}
                            <img onLoad={() => handleImageLoad('image_1')} src={mostSearchedCats.length > 0 && mostSearchedCats[0].image_url} 
                            style={{display : mostSearchedCatsLoading.image_1 ? 'none' : ''}} alt="" />
                        </div>
                        <a href={`/#/cat/${mostSearchedCats.length > 0 && mostSearchedCats[0].name}`}> <p>{mostSearchedCats.length > 0 && mostSearchedCats[0].name}</p> </a>
                    </div>
                    <div className="img-container" id="right">
                        {mostSearchedCatsLoading.image_2 && (<div className="loading-wrapper-main"> <CircularProgress sx={80} /> </div>
                                
                            )}
                            <img 
                            style={{display : mostSearchedCatsLoading.image_2 ? 'none' : ''}}
                            onLoad={() => handleImageLoad('image_2')} src={mostSearchedCats.length > 0 && mostSearchedCats[1].image_url} alt="" />
                        <a href={`/#/cat/${mostSearchedCats.length > 0 && mostSearchedCats[1].name}`}> <p>{mostSearchedCats.length > 0 && mostSearchedCats[1].name}</p> </a>
                        
                    </div>
                  
                
                    <div className="img-container" id="left">
                        {mostSearchedCatsLoading.image_3 && (<div className="loading-wrapper-main">
                            <CircularProgress sx={80} />
                        </div>)}
                        <img src={mostSearchedCats.length > 0 && mostSearchedCats[2].image_url} 
                        onLoad={() => handleImageLoad('image_3')}
                        style={{display: mostSearchedCatsLoading.image_3 ? 'none' : ''}}
                        alt="" />
                        <a href={`/#/cat/${mostSearchedCats.length > 0 && mostSearchedCats[2].name}`}> <p>{mostSearchedCats.length > 0 && mostSearchedCats[2].name}</p> </a>
                    </div>
                    <div className="img-container" id="right">
                        {mostSearchedCatsLoading.image_4 && (<div className="loading-wrapper-main">
                            <CircularProgress sx={80} />
                        </div>)}
                        <img src={mostSearchedCats.length > 0 && mostSearchedCats[3].image_url} 
                        onLoad={() => handleImageLoad('image_4')}
                        style={{display: mostSearchedCatsLoading.image_4 ? 'none' : ''}}
                        alt="" />
                        <a href={`/#/cat/${mostSearchedCats.length > 0 && mostSearchedCats[3].name}`}> <p>{mostSearchedCats.length > 0 && mostSearchedCats[3].name}</p> </a>
                    </div>
           
                    
                </div>
            </div>
        </div>
    </div>

}

export default MainContainer; 