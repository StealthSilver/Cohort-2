'use client'
import axios from "axios"

import { SetStateAction, useEffect, useState } from "react";


export default async function User() {

  const response = await axios.get("some url");
  const data = response.data;


  if(loading){
return <div>
  loading...
</div>
  }

  return (
    <div>
      User page 
      {data.name}
      {data.email}
    </div>
  );
}
