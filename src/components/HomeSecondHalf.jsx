import React, { useEffect, useState } from "react";
import "../componentsCss/HomeSecondHalf.css";
import img_banner from "../componentsCss/data/banner-1.jpg";
import { Link } from "react-router-dom";

function HomeSecondHalf(props) {
  const [dataNest,setDataNest]=useState([]);
  const [okClick,setokClick]=useState(true);
  useEffect(()=>
  {
    let savedData=JSON.parse(localStorage.getItem("block"));
    // console.log(savedData[0].firstName);
    if(savedData)
    {
      if(savedData.length<=6)
      {
        setDataNest(savedData);
        // console.log(savedData);
      }
      else if(savedData.length>6)
      {
        const newSave=savedData.slice(0,5);
        setDataNest(newSave);
        // console.log(newSave);
      }
    }
    
   

  },[props.para,okClick]);
  

  const getIndex=(e)=>
  {
    // alert(dataNest.indexOf(e));
    
    // localStorage.setItem("deleted",JSON.stringify(e));
    let arr=[];
    let localCabin=localStorage.getItem("deleted");
    // console.log(localCabin);
    if(localCabin===null)
    {
      arr.unshift(e);
      localStorage.setItem("deleted",JSON.stringify(arr));
    }
    else if(localCabin!==null)
    {
      // console.log("working");
      arr.unshift(e,...JSON.parse(localCabin));
      // console.log(arr);
      localStorage.setItem("deleted",JSON.stringify(arr));
    }
    
    let index=dataNest.indexOf(e);
    dataNest.splice(index,1);
    localStorage.setItem("block",JSON.stringify(dataNest));
    // console.log(dataNest);
    okClick===true?setokClick(false):setokClick(true);
    
  }

  const viewing=(e)=>
  {
    // console.log(e);
    localStorage.setItem("view",JSON.stringify(e));
    let index=dataNest.indexOf(e);
    localStorage.setItem("viewInx",JSON.stringify(index));
  }
  return (
    <>
      <div className="container-fluid taskDim">
        <div className="row d-flex rowDim">
          {dataNest && dataNest.map((go)=>
          (
            <div className="col-12 col-lg-6 col-md-6 col-sm-6" key={go.firstName}>
            <div className="row">
              <div className="card cardBlock">
                <img src={img_banner} className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">{go.importance}</h5>
                  <h6 className="card-title">{`${go.firstName} ${go.lastName}`}
                  </h6>
                  <h5 className="card-title">{`${go.date}  ${go.time}`}</h5>
                  <h5 className="card-title">{go.month}</h5>
    
                  <p className="card-text cardDim">
                   {go.description}
                  </p>

                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-6">
                      <button onClick={()=>{getIndex(go)}} className="deleteIt"><i className="fa-sharp fa-solid fa-trash"></i></button>
                      </div>
                      <div className="col-6">
                        <Link to={"/view"}>
                        <button className="viewIt" onClick={()=>{viewing(go)}}><i className="fa-solid fa-eye"></i></button>
                        </Link>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          ))}
          {dataNest && <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <Link to={"/allnotes"}><button className="loadMore">LOAD MORE 😊😁</button></Link>
                
              </div>
            </div>
          </div> }
          
          {!dataNest && <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <h6>Please create NOtes !!👌👌👌</h6>
              </div>
            </div>
          </div>
          }
        </div>
      </div>
    </>
  );
}

export default HomeSecondHalf;
