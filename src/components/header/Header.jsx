import React from 'react';
import './header.css';

import hands1 from '../../assets/hands1.png';
import hands2 from '../../assets/hands2.png';

import underline from '../../assets/underline1.png';

const Header = () => {
    return (
        <section className="header" id="home">
            <div className="header-image">
                <div className="header-image-1">
                    <img src={hands1} alt="hands" />
                </div>
                <div className="header-image-2">
                    <img src={hands2} alt="hands" />
                </div>
            </div>
            <div className="header-content">
                <h1 className="hello-text">
                    Hi, I'm <strong>Will</strong>.
                </h1>
                <div className="header-underline">
                    <img src={underline} alt="underline" />
                </div>
            </div>
        </section>
    );
};

export default Header;

document.addEventListener('DOMContentLoaded',function(event){
    var dataText = [ "Hi, I'm <b>Will</b>"];
    
    function typeWriter(text, i, fnCallback) {
      if (i < (text.length)) {
        if (text.length >= 3 && text.substring(i, i + 3) == '<b>') {
            document.querySelector("h1").innerHTML = text.substring(0, i + 3) + '<span aria-hidden="true"></span>'
            setTimeout(function() {
                typeWriter(text, i + 3, fnCallback)
            }, 100);
        } else if (text.length >= 4 && text.substring(i, i + 4) == '</b>') {
            document.querySelector("h1").innerHTML = text.substring(0, i + 4) + '<span aria-hidden="true"></span>'
            setTimeout(function() {
                typeWriter(text, i + 4, fnCallback)
            }, 100);
        }
        else {
            if (text.substring(i, i + 1) == "W") {
                document.querySelector(".header-image-2").classList.add("header-image-2-animation");
                document.querySelector(".header-image-1").classList.add("header-image-1-animation");
            }
            document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
            setTimeout(function() {
                typeWriter(text, i + 1, fnCallback)
            }, 100);
        }
      } else {
            document.querySelector(".header-underline").classList.add("header-underline-animation");
      }
    }
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 20000);
       }
      if (i < dataText[i].length) {
       typeWriter(dataText[i], 0, function(){
         StartTextAnimation(i + 1);
       });
      }
    }
    StartTextAnimation(0);
  });