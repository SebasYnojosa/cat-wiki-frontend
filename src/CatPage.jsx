import React,{useEffect, useState } from "react";
import "./Container.css"
import "./CatPage.css";
import Top from "./Top";
import Bottom from "./Bottom";
import axios from "axios";
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress'; 


function CatPage (props) {



    //const catName = decodeURIComponent(props.catName);
    const {catName} = useParams();
    const [catData, setCatData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [imageLoading, setImageLoading] = useState({
        images_1: true,
        images_2: true,
        images_3: true,
        images_4: true,
        images_5: true,
        images_6: true,
        images_7: true,
        images_8: true,
      });

    useEffect(() => {

        const url = `https://cat-wiki-api-8m0t.onrender.com/cat/${catName}`;

        const local = `http://localhost:3000/cat/${catName}`;

        axios.get(local)
          .then(response => {
            setCatData(response.data);
            setLoading(false);
          })
          .catch(error => {
            console.error('Error fetching cat data:', error);
            setLoading(false);
          });

      }, [catName]);


  useEffect(() => {
    
    axios.get(`https://cat-wiki-api-8m0t.onrender.com/cat/${catName}`)
    .then(response => {
      setCatData(response.data);
    })
    .catch(error => {
      console.error('Error fetching cat data:', error);
    });

    console.log("CatData" + catData);


        document.body.style.height = '170vh';
        document.documentElement.style.height = '100vh';
    

        return () => {
          document.body.style.height = 'auto';
          document.documentElement.style.height = 'auto';
        };


      }, []);

      const handleImageLoad = (imageKey) => {
        setImageLoading(prevState => ({ ...prevState, [imageKey]: false }));
      };


      function renderBars(score) {
        const maxScore = 5; // Puedes ajustar esto según el máximo posible
        const bars = [];
      
        for (let i = 0; i < maxScore; i++) {
          const barClassName = i < score ? 'bar-filled' : 'bar-empty';
          bars.push(<div className={`bar ${barClassName}`} key={i}></div>);
        }
      
        return bars;
      }

    return (<div className="container" id="container-cat-page">
        <div className="container-1">
            <Top></Top>
            <div className="container-1-container">
                <div className="container-1-image">                 
                    <div className="img-container" id="img-wiki">
                        {loading ? 
                        (<div className="loading-wrapper">
                            <CircularProgress size={80}  />
                          </div>) : (
                            <img src={catData.image_url} alt="" />
                        )}
                    </div>

                </div>
                <div> 
                    <div className="container-1-traits">
                        <h2>{catData.name}</h2>
                        <p>{catData.description}</p>
                       
                       <div><p className="traits"> Temperament: </p> &nbsp; <p className="trait">{catData.temperament}</p></div>
                        <div><p className="traits">Origin:</p> &nbsp; <p className="trait">{catData.origin}</p></div>
                        <div><p className="traits">Life Span:</p> &nbsp; <p className="trait">{catData.life_span} years</p></div>
                        <div className="trait-line"><p className="traits">Adaptability:</p>  <div className="bars"> {renderBars(catData.adaptability)}</div>   </div>
                        <div className="trait-line"><p className="traits">Affection level:</p>  <div className="bars">  {renderBars(catData.affection_level)} </div> </div>
                        <div className="trait-line"><p className="traits">Child friendly:</p> <div className="bars"> {renderBars(catData.child_friendly)}</div> </div> 
                        <div className="trait-line"><p className="traits">Grooming:</p> <div className="bars"> {renderBars(catData.grooming)} </div>  </div>
                        <div className="trait-line"><p className="traits">Intelligence:</p>  <div className="bars">  {renderBars(catData.intelligence)} </div> </div> 
                        <div className="trait-line"><p className="traits">Health issues:</p> <div className="bars"> {renderBars(catData.health_issues)}  </div> </div>
                        <div className="trait-line"><p className="traits">Social needs:</p> <div className="bars"> {renderBars(catData.social_needs)} </div> </div> 
                        <div className="trait-line"><p className="traits">Stranger friendly:</p> <div className="bars"> {renderBars(catData.stranger_friendly)} </div> </div> 

                    </div> 
                </div>
            </div>
        </div>
        
        <div className="container-2" id="container-2-cat-page"> 
            <div className="container-2-other-photos">
                <div className="container-2-text-row">
                    <h2>Other photos</h2>
                </div>
                
                <div className="container-2-photos-row" id="photos-1">
                {catData.images_1 && (
                    <div className="img-container wiki" id="right">
                    {imageLoading.images_1 && ( <div className="loading-wrapper-2">
                                <CircularProgress size={80}  />
                            </div>)}
                    <img 
                    src={catData.images_1} 
                    alt="" 
                    onLoad={() => handleImageLoad('images_1')} 
                    style={{ display: imageLoading.images_1 ? 'none' : 'block' }}
                    />
                </div>
                )}
                    
                {catData.images_2 && (
                    <div className="img-container wiki" id="right">
                    {imageLoading.images_2 && ( <div className="loading-wrapper-2">
                                <CircularProgress size={80}  />
                            </div>)}
                    <img 
                    src={catData.images_2} 
                    alt="" 
                    onLoad={() => handleImageLoad('images_2')} 
                    style={{ display: imageLoading.images_2 ? 'none' : 'block' }}
                    />
                </div>
                )}
                    
                    
                    {catData.images_3 && (
                        <div className="img-container wiki" id="right">
                        {imageLoading.images_3 && ( <div className="loading-wrapper-2">
                                    <CircularProgress size={80}  />
                                </div>)}
                        <img 
                        src={catData.images_3} 
                        alt="" 
                        onLoad={() => handleImageLoad('images_3')} 
                        style={{ display: imageLoading.images_3 ? 'none' : 'block' }}
                        />
                    </div>
                    )}
                    {catData.images_4 && (
                        <div className="img-container wiki" id="right">
                        {imageLoading.images_4 && ( <div className="loading-wrapper-2">
                                    <CircularProgress size={80}  />
                                </div>)}
                        <img 
                        src={catData.images_4} 
                        alt="" 
                        onLoad={() => handleImageLoad('images_4')} 
                        style={{ display: imageLoading.images_4 ? 'none' : 'block' }}
                        />
                    </div>
                    )}
                </div>
            <div className="container-2-photos-row" id="photos-2" style={{ justifyContent: catData.images_8 ? 'space-between' : 'space-evenly' }}>


                    {catData.images_5 && (
                        <div className="img-container wiki" id="right">
                        {imageLoading.images_5 && ( <div className="loading-wrapper-2">
                                    <CircularProgress size={80}  />
                                </div>)}
                        <img 
                        src={catData.images_5} 
                        alt="" 
                        onLoad={() => handleImageLoad('images_5')} 
                        style={{ display: imageLoading.images_5 ? 'none' : 'block' }}
                        />
                    </div>
                    )}
                    {catData.images_6 && (
                        <div className="img-container wiki" id="right">
                        {imageLoading.images_6 && ( <div className="loading-wrapper-2">
                                    <CircularProgress size={80}  />
                                </div>)}
                        <img 
                        src={catData.images_6} 
                        alt="" 
                        onLoad={() => handleImageLoad('images_6')} 
                        style={{ display: imageLoading.images_6 ? 'none' : 'block' }}
                        />
                    </div>
                    )}

            
                    {catData.images_7 && (
                        <div className="img-container wiki" id="right">
                        {imageLoading.images_7 && ( <div className="loading-wrapper-2">
                                    <CircularProgress size={80}  />
                                </div>)}
                        <img 
                        src={catData.images_7} 
                        alt="" 
                        onLoad={() => handleImageLoad('images_7')} 
                        style={{ display: imageLoading.images_7 ? 'none' : 'block' }}
                        />
                    </div>
                    )}
                    {catData.images_8 && (
                        <div className="img-container wiki" id="right">
                        {imageLoading.images_8 && ( <div className="loading-wrapper-2">
                                    <CircularProgress size={80}  />
                                </div>)}
                        <img 
                        src={catData.images_8} 
                        alt="" 
                        onLoad={() => handleImageLoad('images_8')} 
                        style={{ display: imageLoading.images_8 ? 'none' : 'block' }}
                        />
                    </div>
                    )}
            
            </div>
        </div>
            <Bottom></Bottom>
        </div>
    </div>);
}

export default CatPage;