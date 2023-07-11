import * as React from 'react';
import './style.css'


 function Preloader() {
    return (
        <div className="container">
        <div className="wrapper">
           <div className="loader">
              <div className="dot"></div>
           </div>
           <div className="loader">
              <div className="dot"></div>
           </div>
           <div className="loader">
              <div className="dot"></div>
           </div>
           <div className="loader">
              <div className="dot"></div>
           </div>
           <div className="loader">
              <div className="dot"></div>
           </div>
           <div className="loader">
              <div className="dot"></div>
           </div>
        </div>
        <div className="text">
           Please wait
        </div>
     </div>

    );
}

export { Preloader };
