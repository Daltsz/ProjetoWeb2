import React from 'react';
import "./style.css";
import imglogo from '../../assets/mongodblogo.png'

export default function Header() {


  return (

    <header className="Header">
        <div className ="HeaderLogo">

            <a href="/">

                <img className="logo" src={imglogo} alt="Logo Mongo db"></img>    

            </a>


            
            

        </div>
    </header>
  );
}

