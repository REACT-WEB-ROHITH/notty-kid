import React, { useState } from "react";
import HomeFirstHalf from "./HomeFirstHalf";
import HomeSecondHalf from "./HomeSecondHalf";

function HomeJoinBlock() {
  const [reloadPara,setreloadPara]=useState(true);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-6 col-md-12 col-sm-12 Block-1">
            <HomeFirstHalf para={reloadPara} setIt={setreloadPara} />
          </div>
          <div className="col-12 col-lg-6 col-md-12 col-sm-12 Block-2">
            <HomeSecondHalf para={reloadPara} />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeJoinBlock;
