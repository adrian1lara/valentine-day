'use client'

import Image from "next/image";
import gatitoimg from "./assets/gatito.jpeg"
import gatitogif from  "./assets/gatitosgif.gif"
import "./styles/homeStyles.css"
import { useState } from "react";

export default function Home() {

  const [currentIndex, setIndex] = useState(0)
  const [yesButtonSize, setYesButtonSize] = useState(20)
  const [currentImage, setImage ] = useState(0)
  const [currentHeader, setHeader] = useState(0)
  const sentences = [
    "",
    "Creo que te equivocaste de boton",
    "Segura? piensalo dos veces",
    "Piensa una vez masss",
    "YAAA ME ESTOY ENOJANDO",
    "el verdecito es el correcto...",
    "y sigues con lo mismo??",
    "te encanta joderme no?",
    "si tocas el verde ganas 1 boleto a hawai",
    "yaya adoptamos un gato dale que si",
    "vas a romper el codigo",
    "hackeo tu pc si presionas una vez mas",
    "no quiero, yo decido jojojo"
  ]

  const headerArray = [
    "Quieres ser mi san valentín?",
    "YAYYY !!!!"
  ]

  const images = [
    gatitoimg,
    gatitogif
  ]


  const handleRedButton= () => {
    setIndex((prevIndex) => (prevIndex + 1)  % sentences.length)
    setYesButtonSize((prevSize) => prevSize + 20);
  }

  const handleGreenButton = () => {
    setYesButtonSize(20)
    setIndex(0)
    setImage(1)
    setHeader(1)
  }

  return (
    <main>
      <div className="valentine-box">
        <Image src={images[currentImage]} />
        <h2>{headerArray[currentHeader]}</h2>
        <p style={{ color:'red', fontSize: '15px'}}>{sentences[currentIndex]}</p>
        <div className="buttongroup">
          <button className="btnGreen" style={{ fontSize: `${yesButtonSize}px` }} onClick={handleGreenButton}>SI</button>
          <button className="btnRed" onClick={handleRedButton}>NO</button>
        </div>
      </div>
    </main>
  );
}
