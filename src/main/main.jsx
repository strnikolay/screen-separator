import React from "react";

import PoligonScreenSeparator from "./PoligonScreenSeparator/PoligonScreenSeparator"

import MainSecondScreen from "./scr2/screen2";
import MainThirdScreen from "./scr3/screen3";
import Waveone from "./wave-one/wave-one";



function Main () {

    return(    
        <>
            <PoligonScreenSeparator />
            <MainSecondScreen/>
            <MainThirdScreen/>
            <Waveone />
        </>
    )
}

export default Main; 