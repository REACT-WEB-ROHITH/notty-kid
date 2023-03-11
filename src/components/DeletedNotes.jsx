import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import img_banner from "../componentsCss/data/banner-1.jpg";

function AllNotes() {
    const [dataNest,setDataNest]=useState([]);
    const [okClick,setokClick]=useState(true);
  useEffect(()=>
  {
    let savedData=JSON.parse(localStorage.getItem("deleted"));
    // console.log(savedData[0].firstName);
   
      setDataNest(savedData);
    //   console.log(savedData);

   

  },[okClick]);

//   const viewing=(e)=>
//   {
//     console.log(e);
//     localStorage.setItem("view",JSON.stringify(e));
//     let index=dataNest.indexOf(e);
//     localStorage.setItem("viewInx",JSON.stringify(index));
//   }

  const getIndex=(e)=>
  {
    // alert(dataNest.indexOf(e));
    let localData=localStorage.getItem("block");
    let arr=[];
    arr.unshift(e,...JSON.parse(localData));
    localStorage.setItem("block",JSON.stringify(arr));


    let index=dataNest.indexOf(e);
    dataNest.splice(index,1);
    localStorage.setItem("deleted",JSON.stringify(dataNest));
    // console.log(cloner);
    // console.log(dataNest.indexOf(e));

    okClick===true?setokClick(false):setokClick(true);
    
  }

  const perDelete=(e)=>
  {
    let index=dataNest.indexOf(e);
    dataNest.splice(index,1);
    localStorage.setItem("deleted",JSON.stringify(dataNest));
    // console.log(dataNest.indexOf(e));
    okClick===true?setokClick(false):setokClick(true);
  }
  return (
    <>
    <div className="container-fluid">
        <div className="row">
            {/* <div className="col-12">
            <Link to={"/"}>
            <button className="loadMore">CREATE ONE +</button>
            </Link>
            </div> */}
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
                      <div className="col-12">
                      <button onClick={()=>{getIndex(go)}} className="deleteIt">RESTORE <i className="fa-regular fa-window-restore"></i></button>
                      </div>
                      <div className="col-12 mt-3">
                        
                        <button className="viewIt" onClick={()=>{perDelete(go)}}><i className="fa-solid fa-tent-arrow-down-to-line"></i></button>
                    
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          ))}

{/* {!dataNest && <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <Link to={"/"}><button className="loadMore">CREATE ONE PRESS ME !!! 🤐🤐🤐</button></Link>
              </div>
            </div>
          </div> } */}
        </div>
    </div>
    </>
  )
}

export default AllNotes
