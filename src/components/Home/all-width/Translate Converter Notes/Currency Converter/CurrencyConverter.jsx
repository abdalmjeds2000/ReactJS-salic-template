import React, { useState, useEffect  } from 'react';
import { Select } from 'antd';

import './CurrencyConverter.css';
import 'antd/dist/antd.css';

import CurrencyConverterLogo from '../../../../../icons/home/CurrencyConverter.svg';
// import FlagUnitedStatesAmerica from '../../../../../icons/home/Flag-United-States-of-America.svg';
// import SaudiArabiaFlag from '../../../../../icons/home/saudi-arabia-flag.svg';


const { Option } = Select;


const CurrencyConverter = () => {
  const [options, setOptions ] = useState([]);

  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [amount, setAmount] = useState();

  const [resultConvertCurrancy, setResultConvertCurrancy] = useState(0);


  const axios = require("axios");
  const optionsReq = {
    method: 'GET',
    url: 'https://currency-converter18.p.rapidapi.com/api/v1/supportedCurrencies',
    headers: {
      'X-RapidAPI-Key': '700f3ec77amsh374abf9e06a720bp1363e1jsnbf5dead5ff88',
      'X-RapidAPI-Host': 'currency-converter18.p.rapidapi.com'
    }
  };
  useEffect(() => {
    axios.request(optionsReq).then(function (response) {
      setOptions(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }, [])

  const convertCurrancy = () => {
      const axios = require("axios");
      const options = {
        method: 'GET',
        url: 'https://currency-converter18.p.rapidapi.com/api/v1/convert',
        params: {from: from, to: to, amount: amount},
        headers: {
          'X-RapidAPI-Key': '700f3ec77amsh374abf9e06a720bp1363e1jsnbf5dead5ff88',
          'X-RapidAPI-Host': 'currency-converter18.p.rapidapi.com'
        }
      };
      axios.request(options).then(function (response) {
        response.data.success === true ? setResultConvertCurrancy(Number(response.data.result.convertedAmount).toFixed(3)) : setResultConvertCurrancy('No Value');
      }).catch(function (error) {
        console.error(error);
      });
  }

  function reset() {
    setAmount('');
    setResultConvertCurrancy(0);
  }


  return (
    <div className='currency-converter-container'>
      <div className='header'>
        <h2>Currency Converter</h2>
        <img src={CurrencyConverterLogo} alt="" />
      </div>
      <div className='fromToFields'>
        <div className="from">
        <Select showSearch style={{ width: '100%', }} placeholder="Search to Select" optionFilterProp="children"
          filterOption={(input, option) => option.children.includes(input)}
          onChange={(value) => setFrom(value)}
          // onSearch={onSearch}
          // filterSort={(optionA, optionB) => optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())}
        >
          {
            options?.map((c, i) => {
              return <Option key={i} value={c.symbol}>{c.symbol} - {c.name}</Option>
            })
          }
        </Select>
          <input type="text" name="from" placeholder='100' value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <div className="to">
          <Select showSearch style={{ width: '100%', }} placeholder="Search to Select" optionFilterProp="children"
            filterOption={(input, option) => option.children.includes(input)}
            onChange={(value) => setTo(value)}
            // filterSort={(optionA, optionB) => optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())}
          >
            {
              options?.map((c, i) => {
                return <Option key={i} value={c.symbol}>{c.symbol} - {c.name}</Option>
              })
            }
          </Select>
          <input type="text" name="to" placeholder='375' disabled value={resultConvertCurrancy} />
        </div>
      </div>
      <button onClick={convertCurrancy}>Convert</button>
      { 
        resultConvertCurrancy !== 0
        ? <button onClick={reset} className='resetTrans'>Reset</button> 
        : null
      }
    </div>
  )
}

export default CurrencyConverter