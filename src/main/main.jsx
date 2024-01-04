import React from "react";

import PoligonScreenSeparator from "./PoligonScreenSeparator/PoligonScreenSeparator"

import MainSecondScreen from "./scr2/screen2";
import MainThirdScreen from "./scr3/screen3";
import ThirdScreen from "./scr6/screen6";
import Waveone from "./wave-one/wave-one";
import Wavetwo from "./wave-two/wave-two";



function Main () {

    return(    
        <>
            <PoligonScreenSeparator />
            <MainSecondScreen/>
            <MainThirdScreen/>
            <Waveone />
            <Wavetwo />
            <ThirdScreen/>
        </>
    )
}

export default Main; 