import React,{useEffect,useState} from 'react';
import Card from '../components/card';
import {withRouter} from 'react-router-dom';
import "./dataLoader.css";
import CircularProgress from '@material-ui/core/CircularProgress';


function Dataloader() {
    const [Data,Datahandler]=useState({loading:true});
   
        useEffect(()=>{
            async function Loader (){

                fetch('https://fakestoreapi.com/products')
                    .then(res => res.json())
                    .then((json) =>{ console.log(json)
                    Datahandler({loading:false ,data:json})} )
                    

            }
        Loader();
    },[Data.loading])
    

    return (
        <div className="Outer__Container" >
            {Data.loading?<CircularProgress/>:Data.data.map((txt,index)=>{return <Card content={txt} />})}
            
        </div>
    )
}

export default withRouter(Dataloader); 
