import React, { useRef, useState } from "react";
import "../componentsCss/HomeFirstHalf.css";
import imageAdd from "../componentsCss/data/notebook-and-pencil.png";

function HomeFirstHalf(props) {

  const monthDude = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
  "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
];
    // These are ref elements to get the input from form
    const firstName=useRef();
    const lastName=useRef();
    // const month=useRef();
    const importance=useRef();
    const description=useRef();

    var d=new Date();
    // console.log(d);

    // Getting val
    const getVal=()=>
    {
      let Lobj=
      {
        firstName:firstName.current.value,
        lastName:lastName.current.value,
        // month:month.current.value,
        importance:importance.current.value,
        description:description.current.value,
        date:`${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`,
        time:`${d.getHours()}:${d.getMinutes()<10?`0${d.getMinutes()}`:`${d.getMinutes()}`} ${d.getHours()<=12?"AM":"PM"}`,
        month:`${monthDude[d.getMonth()]}`
      }

      let allData=[];
      let localData=localStorage.getItem("block");
      // console.log(localData);
      if(localData===null && firstName.current.value!=="" && lastName.current.value!=="" && importance.current.value!=="")
      {
        allData.unshift(Lobj);
        localStorage.setItem("block",JSON.stringify(allData));
      }
      else if(localData!==null && firstName.current.value!=="" && lastName.current.value!=="" && importance.current.value!=="" )
      {
        allData.unshift(Lobj,...JSON.parse(localData));
        localStorage.setItem("block",JSON.stringify(allData));
      }

      // After injection processes
      firstName.current.value="";
      lastName.current.value="";
      description.current.value="";
      importance.current.value="";


      props.para?props.setIt(false):props.setIt(true);
    }



const [toggler,settoggler]=useState(true);
    const addMe=()=>
    {
      // console.log("working");
      toggler?settoggler(false):settoggler(true);
    }
    // formMainBlock


  return (
    <>
      <div className="container-fluid full-first-block animeDim">
        <div className="row">
          <div className="col-12">
            <img src={imageAdd} className="card-img-top iconMe" alt="..." onClick={addMe} />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div
              className={toggler?"formMainBlock invisible":"formMainBlock"}
            >
              <div className="row formBlock">
                <div className="col-12">
                  <h2>👌👌ADD YOUR NOTES👌👌</h2>
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
                <div className="col-6">
                <label htmlFor="">DATE</label>
                </div>
                <div className="col-6">
                  <h6>{`${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`}</h6>
                </div>

                <div className="col-6">
                <label htmlFor="">TIME</label>
                </div>
                <div className="col-6">
                  <h6>{`${d.getHours()}:${d.getMinutes()<10?`0${d.getMinutes()}`:`${d.getMinutes()}`} ${d.getHours()<=12?"AM":"PM"}`}</h6>
                </div>

                <div className="col-6">
                <label htmlFor="">MONTH</label>
                </div>
                <div className="col-6">
                  <h6>{`${monthDude[d.getMonth()]}`}</h6>
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
  );
}

export default HomeFirstHalf;
