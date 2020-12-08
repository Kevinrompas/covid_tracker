import React, {useEffect, useState } from 'react';
import axios from "axios"

const ProvinceData = () => {
  const [setDataProvinsi] = useState([]);

  useEffect(()=>{
    axios 
    .get("https://indonesia-covid-19.mathdro.id/api/provinsi")
    .then((res) => { 
        setDataProvinsi(res.data.data);
    })  
},  []);



}
export default ProvinceData;