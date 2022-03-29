import React from 'react';
import { useParams } from "react-router-dom";


function Teste({match}) {
  let params = useParams();
  console.log('match ->', params)
  return ( 
    <>
    <h1>Teste</h1>
    </>
   );
}

export default Teste;