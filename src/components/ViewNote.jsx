import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import img_banner from "../componentsCss/data/banner-1.jpg";

function ViewNote() {
    const [toggler,settoggler]=useState(true);
    const [dataNest,setDataNest]=useState([]);
    const [okClick,setokClick]=useState(true);

    // These are ref elements to get the input from form
    const firstName=useRef();
    const lastName=useRef();
    // const month=useRef();
    const importance=useRef();
    const description=useRef();


    


    const getVal=()=>
    {
        let objClone=dataNest;
        // console.log(objClone);
        objClone.firstName=firstName.current.value;
        objClone.lastName=lastName.current.value;
        objClone.importance=importance.current.value;
        objClone.description=description.current.value;
        // console.log(objClone);
        // setDataNest(objClone);
        localStorage.setItem("view",JSON.stringify(objClone));

        let index=JSON.parse(localStorage.getItem("viewInx"));
        // console.log(index);

        let clone=JSON.parse(localStorage.getItem("block"));
        // console.log(clone);
        // console.log(clone[index]);
        clone[index]=objClone;

        localStorage.setItem("block",JSON.stringify(clone));





        okClick===true?setokClick(false):setokClick(true);
        toggler?settoggler(false):settoggler(true);
        
    }


  useEffect(()=>
  {
    let savedData=JSON.parse(localStorage.getItem("view"));
    // console.log(savedData[0].firstName);
   
      setDataNest(savedData);
      // console.log(savedData);

    //   Assigning refs
    firstName.current.value=savedData.firstName;
    lastName.current.value=savedData.lastName;
    importance.current.value=savedData.importance;
    description.current.value=savedData.description;
   
   

  },[toggler,okClick]);

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
      arr.unshift(e,...JSON.parse(localCabin));
      // console.log(arr);
      localStorage.setItem("deleted",JSON.stringify(arr));
    }



    // alert(dataNest.indexOf(e));
    let index=JSON.parse(localStorage.getItem("viewInx"));
    let clone=JSON.parse(localStorage.getItem("block"));
    clone.splice(index,1);
    localStorage.setItem("block",JSON.stringify(clone));
    // console.log(clone);
    okClick===true?setokClick(false):setokClick(true);
    
  }

 
    // const addMe=()=>
    // {
    //   console.log("working");
    //   toggler?settoggler(false):settoggler(true);
    // }
  const editing=(e)=>
  {
    // console.log(e);
    toggler?settoggler(false):settoggler(true);
    
  }
  return (
    <>
    <div className="container">
        <div className="row">
            <div className={!toggler?"col-12 invisible":"col-12"}>
             
            {dataNest && <div className="col-12" key={dataNest.firstName}>
            <div className="row">
              <div className="card dimCard">
                <img src={img_banner} className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">{dataNest.importance}</h5>
                  <h6 className="card-title">{`${dataNest.firstName} ${dataNest.lastName}`}
                  </h6>
                  <h5 className="card-title">{`${dataNest.date}  ${dataNest.time}`}</h5>
                  <h5 className="card-title">{dataNest.month}</h5>
    
                  <p className="card-text cardDim">
                   {dataNest.description}
                  </p>

                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-6">
                        <Link to={"/allnotes"}>
                        <button onClick={()=>{getIndex(dataNest)}} className="deleteIt"><i className="fa-sharp fa-solid fa-trash"></i></button>
                        </Link>
                      
                      </div>
                      <div className="col-6">
                        <button className="viewIt" onClick={()=>{editing(dataNest)}}><i className="fa-sharp fa-solid fa-pen"></i></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>} 

            </div>
        </div>


        <div className="row">
            <div className="col-12">
            <div
              className={toggler?"formMainBlock invisible":"formMainBlock"}
            >
              <div className="row formBlock">
                <div className="col-12">
                  <h2>👌👌EDIT YOUR NOTES👌👌</h2>
                </div>
                <div className="col-6">
                  <label htmlFor="">FIRST NAME</label>
                </div>
                <div className="col-6">
                  <input type="text" name="" id="" placeholder="HANMA" ref={firstName} />
                </div>
                <div className="col-6">
                  <label htmlFor="">LAST BNAME</label>
                </div>
                <div className="col-6">
                  <input type="text" name="" id="" placeholder="CORP" ref={lastName} />
                </div>
                <div className="col-6">
                  <label htmlFor="">IMPORTANCE</label>
                </div>
                <div className="col-6">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Rising sun on my head !!!"
                    ref={importance}
                  />
                </div>
                
                <div className="col-12">
                  <label htmlFor="">DESCRIPTION</label>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                      style={{ height: "100px" }} ref={description}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <button className="formButton" onClick={getVal}>SUBMIT</button>
              </div>
            </div>
            </div>
        </div>





    </div>
    </>
  )
}

export default ViewNote
