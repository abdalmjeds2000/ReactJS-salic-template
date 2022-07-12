import React, { useState } from 'react';
import './GoogleTranslate.css';


import GoogleTranslateLogo from '../../../../../icons/home/Google Translate Logo.svg'
import axios from 'axios';


function GoogleTranslate() {



  const [value, setValue] = useState(['','']);
  let [result, setResult] = useState({lang: '', text: ''});

  function translate() {
    if(value[1] === '') {
        alert('Write Something!')
    } else if(value[0] === 'en') {
      const encodedParams = new URLSearchParams();
      encodedParams.append("q", value[1]);
      encodedParams.append("target", "ar");
      encodedParams.append("source", "en");

      const options = {
        method: 'POST',
        url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          // 'Accept-Encoding': 'application/gzip',
          'X-RapidAPI-Key': 'fc26b570cfmsh369e1e8afe6acd1p1c75a8jsncae3965f1f88',
          'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        data: encodedParams
      };

      axios.request(options)
      .then(function (response) {
        console.log(response.data.data.translations[0].translatedText);
        setResult({lang: 'ar', text: response.data.data.translations[0].translatedText})
      })
      .then(() => {
        console.log(result  )
      })
      .catch(function (error) {
        console.error(error);
      });
        
    } else if(value[0] === 'ar') {
        
      const encodedParams = new URLSearchParams();
      encodedParams.append("q", value[1]);
      encodedParams.append("target", "en");
      encodedParams.append("source", "ar");

      const options = {
        method: 'POST',
        url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          // 'Accept-Encoding': 'application/gzip',
          'X-RapidAPI-Key': 'fc26b570cfmsh369e1e8afe6acd1p1c75a8jsncae3965f1f88',
          'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        data: encodedParams
      };

      axios.request(options)
      .then(function (response) {
        setResult({lang: 'en', text: response.data.data.translations[0].translatedText})
      })
      .catch(function (error) {
        console.error(error);
      });

    }
  }
  function reset() {
    setValue(['', '']);
    setResult({lang: '', text: ''});
    document.querySelectorAll('textarea').forEach(ta => ta.value = '')
  }

  return (
    <div className='google-translate-container'>
      <div className='header'>
        <h2>Google Translation</h2>
        <img src={GoogleTranslateLogo} alt="" />
      </div>

      <div className="text-fields">
        <div className="field en-field">
          <h3>English</h3>
          <textarea value={result.lang === 'en' ? result.text : undefined} name="en-field" rows="4" onChange={e => setValue(['en', e.target.value])} placeholder='Write text here and click on (Translate) button'></textarea>
        </div>
        <div className="field ar-field">
          <h3>عربي</h3>
          <textarea value={result.lang === 'ar' ? result.text : undefined} name="ar-field" rows="4" onChange={e => setValue(['ar', e.target.value])} placeholder='Write text here and click on (Translate) button'></textarea>
        </div>
      </div>
      <button onClick={translate}>Translate</button>
      { 
        result.lang !== '' && result.text !== '' 
        ? <button onClick={reset} className='resetTrans'>Reset</button> 
        : null
      }
    </div>
  )
}

export default GoogleTranslate