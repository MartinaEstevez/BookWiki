import React, { useState, useEffect } from "react";
import Tittle from "../Tittle";
import Count from "../Count";
import getFetch from "../../helpers/getFetch";

const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    getFetch
    .then((answer)=> {
      return answer
    })
    .then((resp) => setProducts(resp))
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))    
  }, [])
  
    const onAdd = (cant) => {
       console.log(cant) 
    }

  console.log(products)

  return (
    <div>
      <div style={{ width: 300, margin: "auto", alignContent: "space-around" }}>
        <Tittle
          tittle={"Tittle"}
          subtittle="Subtittle"
          greeting={() => console.log("Greeting")}
        />
        <Count initial={1} stock={9} onAdd={onAdd} />
      </div>
      <div>
        <h1>{ greeting }</h1>
        {   loading ? <h1>Loading...</h1>
            :
            products.map((prod) => <div 
                                        key={prod.id}
                                        className='card col-md-4'
                                        style={{width: 170, margin: 50, display: 'inline-block',}}
                                    >   <div className='card-img-top'>
                                          <img src={prod.foto} alt='' className='w-100' style={{height: "240px"}}/>
                                        </div>  
                                        <div className='card-tittle'>
                                          {`${prod.name} - ${prod.categoria}`}
                                        </div>   
                                        <div className='card-text'>
                                          {prod.price} 
                                        </div>               
                                        <div className="card-footer">
                                          {/* <Link to={`/detalle/${prod.id}`}> */}
                                            <button className="btn btn-outline-primary btn-block">
                                              product details
                                            </button>                                              
                                          {/* </Link>                                             */}                                                                   
                                        </div>
                                      </div>
                                    
                                    
            
            )
        }
    </div>
  </div>
  );
};

export default ItemListContainer;
