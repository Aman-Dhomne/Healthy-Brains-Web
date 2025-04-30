import React from "react";

const HighLightText = ({text}) =>{
    return(
        <span className="font-bold bg-gradient-to-t from-[#f4bc15e4] to-[#8c5532] text-transparent bg-clip-text">
            {text}
        </span>
    )
}

export default HighLightText;