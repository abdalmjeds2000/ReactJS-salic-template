import React from "react";
import './TranslateConverterNotes.css';


import GoogleTranslate from "./Google Translate/GoogleTranslate";
import CurrencyConverter from "./Currency Converter/CurrencyConverter";
import StickyNotes from "./Sticky Notes/StickyNotes";

const TranslateConverterNotes = (props) => {

  return <div className="translate-converter-notes-container">
    
    <GoogleTranslate />
    <CurrencyConverter />
    <StickyNotes />
    
  </div>
}

export default TranslateConverterNotes