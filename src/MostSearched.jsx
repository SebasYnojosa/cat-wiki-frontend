import React, {useState, useEffect} from "react";
import Top from "./Top"
import Bottom from "./Bottom";
import "./MostSearched.css";
import axios from "axios";



function MostSearched() {

    useEffect(()=>{
        document.body.style.height = '190vh';
        document.documentElement.style.height = '100vh';
    

        return () => {
          document.body.style.height = 'auto';
          document.documentElement.style.height = 'auto';
        };

    }, []) 
    
    const [mostSearchedCats, setMostSearchedCats] = useState([])
    useEffect(()=>{
        axios.get('https://cat-wiki-api-8m0t.onrender.com/most_searched'). 
        then(response => {setMostSearchedCats(response.data);
            console.log("Most searched  most searched", response.data);
        })
        .catch(error => {
            console.error('Error al obtener los gatos más buscados:', error);
          });
    },[])

    return (
        <div className="container" id="container-most-searched">
            <div className="container-1" id="container-1-most-searched">
                <Top></Top>
                <div>
                    <div>   

                    <h1 style={{textAlign:'left', fontWeight:'700', marginTop:'0'}}>Top 10 most searched breeds</h1>
                    </div>
                    
                    <div className="m-searched-container">

                    
                    <div className="most-searched-container">
                    <div className="img-container searched" id="searched">
                        <img src={mostSearchedCats.length > 0 && mostSearchedCats[0].image_url} alt="" />

                        
                    </div>
                        <div className="most-searched-text-container">
                           <a href={`/cat/${mostSearchedCats.length > 0 && mostSearchedCats[0].name}`}> <h2>1. {mostSearchedCats.length > 0 && mostSearchedCats[0].name}</h2> </a>
                            <p> {mostSearchedCats.length > 0 && mostSearchedCats[0].description} </p>
                        </div>
                    </div>


                    <div className="most-searched-container">
                    <div className="img-container searched" >
                        <img src={mostSearchedCats.length > 0 && mostSearchedCats[1].image_url} alt="" />

                        
                    </div>
                        <div className="most-searched-text-container">
                        <a href={`/cat/${mostSearchedCats.length > 0 && mostSearchedCats[1].name}`}> <h2>2. {mostSearchedCats.length > 0 && mostSearchedCats[1].name}</h2> </a>
                            <p> {mostSearchedCats.length > 0 && mostSearchedCats[1].description} </p>
                        </div>
                    </div>


                    <div className="most-searched-container">
                    <div className="img-container searched" >
                        <img src={mostSearchedCats.length > 0 && mostSearchedCats[2].image_url} alt="" />

                        
                    </div>
                        <div className="most-searched-text-container">
                        <a href={`/cat/${mostSearchedCats.length > 0 && mostSearchedCats[2].name}`}> <h2>3. {mostSearchedCats.length > 0 && mostSearchedCats[2].name}</h2> </a>
                            <p> {mostSearchedCats.length > 0 && mostSearchedCats[2].description} </p>
                        </div>
                    </div>



                    <div className="most-searched-container">
                    <div className="img-container searched" >
                        <img src={mostSearchedCats.length > 0 && mostSearchedCats[3].image_url} alt="" />

                        
                    </div>
                        <div className="most-searched-text-container">
                        <a href={`/cat/${mostSearchedCats.length > 0 && mostSearchedCats[3].name}`}> <h2>4. {mostSearchedCats.length > 0 && mostSearchedCats[3].name}</h2> </a>
                            <p> {mostSearchedCats.length > 0 && mostSearchedCats[3].description} </p>
                        </div>
                    </div>


                    <div className="most-searched-container">
                    <div className="img-container searched" >
                        <img src={mostSearchedCats.length > 0 && mostSearchedCats[4].image_url} alt="" />

                        
                    </div>
                        <div className="most-searched-text-container">
                        <a href={`/cat/${mostSearchedCats.length > 0 && mostSearchedCats[4].name}`}> <h2>5. {mostSearchedCats.length > 0 && mostSearchedCats[4].name}</h2> </a>
                            <p> {mostSearchedCats.length > 0 && mostSearchedCats[4].description}  </p>
                        </div>
                    </div>


                    <div className="most-searched-container">
                    <div className="img-container searched" >
                        <img src={mostSearchedCats.length > 0 && mostSearchedCats[5].image_url} alt="" />

                        
                    </div>
                        <div className="most-searched-text-container">
                        <a href={`/cat/${mostSearchedCats.length > 0 && mostSearchedCats[5].name}`}> <h2>6. {mostSearchedCats.length > 0 && mostSearchedCats[5].name}</h2> </a>
                            <p> {mostSearchedCats.length > 0 && mostSearchedCats[5].description}  </p>
                        </div>
                    </div>


                    <div className="most-searched-container">
                    <div className="img-container searched" >
                        <img src={mostSearchedCats.length > 0 && mostSearchedCats[6].image_url} alt="" />

                        
                    </div>
                        <div className="most-searched-text-container">
                        <a href={`/cat/${mostSearchedCats.length > 0 && mostSearchedCats[6].name}`}> <h2>7. {mostSearchedCats.length > 0 && mostSearchedCats[6].name}</h2> </a>
                            <p> {mostSearchedCats.length > 0 && mostSearchedCats[6].description} </p>
                        </div>
                    </div>


                    <div className="most-searched-container">
                    <div className="img-container searched" >
                        <img src={mostSearchedCats.length > 0 && mostSearchedCats[7].image_url} alt="" />

                        
                    </div>
                        <div className="most-searched-text-container">
                        <a href={`/cat/${mostSearchedCats.length > 0 && mostSearchedCats[7].name}`}> <h2>8. {mostSearchedCats.length > 0 && mostSearchedCats[7].name}</h2> </a>
                            <p> {mostSearchedCats.length > 0 && mostSearchedCats[7].description}  </p>
                        </div>
                    </div>


                    <div className="most-searched-container">
                    <div className="img-container searched">
                        <img src={mostSearchedCats.length > 0 && mostSearchedCats[8].image_url} alt="" />

                        
                    </div>
                        <div className="most-searched-text-container">
                        <a href={`/cat/${mostSearchedCats.length > 0 && mostSearchedCats[8].name}`}> <h2>9. {mostSearchedCats.length > 0 && mostSearchedCats[8].name}</h2> </a>
                            <p> {mostSearchedCats.length > 0 && mostSearchedCats[8].description}</p>
                        </div>
                    </div>


                    <div className="most-searched-container">
                    <div className="img-container searched">
                        <img src={mostSearchedCats.length > 0 && mostSearchedCats[9].image_url} alt="" />

                        
                    </div>
                        <div className="most-searched-text-container">
                        <a href={`/cat/${mostSearchedCats.length > 0 && mostSearchedCats[9].name}`}> <h2>10. {mostSearchedCats.length > 0 && mostSearchedCats[9].name}</h2> </a>
                            <p> {mostSearchedCats.length > 0 && mostSearchedCats[9].description}</p>
                        </div>
                    </div>
                    </div>
                </div>



                
                <Bottom></Bottom>
            


            </div>

            

            

            
        </div>
    )
}

export default MostSearched;