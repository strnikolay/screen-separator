import "./wave-two.css"
import upwave from "./img/upwave.svg"
import downwave from "./img/downwave.svg"

function Wavetwo () {

return(
  
  <div className="screen5">
    <div className="five">
    <section className="section section-white">
        Светлая секция
    </section>    
    <div className="separator-white">
        <img src={upwave} alt="" />
    </div>
    <section className="section section-color">
        Темная секция    
    </section>    
    <div className="separator-color">
        <img src={downwave} alt="" />
    </div>
    <section className="section section-white">
        Светлая секция
    </section>

</div>
    
  </div>

)}

export default Wavetwo;   
