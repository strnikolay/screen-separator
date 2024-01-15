import React from "react";

import PoligonScreenSeparator from "./PoligonScreenSeparator/PoligonScreenSeparator"

import MainSecondScreen from "./scr2/screen2";
import MainThirdScreen from "./scr3/screen3";
import ThirdScreen from "./scr6/screen6";
import MainTenScreen from "./separator10/screen3";
import SevenScreen from "./separator7/screen7";
import MainEightScreen from "./separator8/separator8";
import MainNineScreen from "./separator9/screen3";
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
            <SevenScreen />
            <MainEightScreen/>
            <MainNineScreen/>
            <MainTenScreen/>
        </>
    )
}

export default Main; 