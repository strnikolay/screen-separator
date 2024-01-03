import "./wave-one.css"
import upwave from "./img/upwave.svg"
import downwave from "./img/downwave.svg"

function Waveone () {

return(
  
<div className="wave-one">
    <section className="section section-white">
        Светлая секция
    </section>    
    <div className="separator-white">
        <img src={upwave} alt="" srcset="" />
    </div>
    <section className="section section-color">
        Темная секция    
    </section>    
    <div className="separator-color">
        <img src={downwave} alt="" srcset="" />
    </div>
    <section className="section section-white">
        Светлая секция
    </section>
</div>


)}

export default Waveone;   
