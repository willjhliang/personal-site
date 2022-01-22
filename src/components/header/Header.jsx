import React from 'react';
import './header.css';

import header_image from '../../assets/header.png';

const Header = () => {
    return (
        <section className="header" id="home">
            <div className="header-image">
                <img src={header_image} alt={header_image} />
            </div>
            <div className="header-content">
                <h1 className="hello-text"> </h1>
                <h2 className="description-text">
                    I'm a student at the <strong>University of Pennsylvania</strong> pursuing a <strong>BSE in Computer Science</strong>.
                </h2>
            </div>
        </section>
    );
};

export default Header;

document.addEventListener('DOMContentLoaded',function(event){
    setTimeout(() => {
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
                    document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
                    setTimeout(function() {
                        typeWriter(text, i + 1, fnCallback)
                    }, 100);
                }
            } else {
                document.querySelector(".header-content").classList.add("header-content-animation");
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
    }, 1500);
  });