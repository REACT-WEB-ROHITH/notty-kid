import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img_banner from "../componentsCss/data/banner-1.jpg";

function AllNotes() {
    const [dataNest,setDataNest]=useState([]);
    const [okClick,setokClick]=useState(true);
  useEffect(()=>
  {
    let savedData=JSON.parse(localStorage.getItem("block"));
    // console.log(savedData[0].firstName);
   
      setDataNest(savedData);
    //   console.log(savedData);

   

  },[okClick]);

  const viewing=(e)=>
  {
    // console.log(e);
    localStorage.setItem("view",JSON.stringify(e));
    let index=dataNest.indexOf(e);
    localStorage.setItem("viewInx",JSON.stringify(index));
  }

  const getIndex=(e)=>
  {

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
    
    // alert(dataNest.indexOf(e));
    let index=dataNest.indexOf(e);
    dataNest.splice(index,1);
    localStorage.setItem("block",JSON.stringify(dataNest));
    // console.log(dataNest);
    okClick===true?setokClick(false):setokClick(true);
    
  }
  return (
    <>
    <div className="container-fluid">
        <div className="row">
            <div className="col-12">
            <Link to={"/noty-kid"}>
            <button className="loadMore">CREATE ONE +</button>
            </Link>
            </div>
        </div>
        <div className="row">
        {dataNest && dataNest.map((go)=>
          (
            <div className="col-12 col-lg-3 col-md-6 col-sm-6" key={go.firstName}>
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

{!dataNest && <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <Link to={"/noty-kid"}><button className="loadMore">CREATE ONE PRESS ME !!! 🤐🤐🤐</button></Link>
              </div>
            </div>
          </div> }
        </div>
    </div>
    </>
  )
}

export default AllNotes
