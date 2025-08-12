'use client'
import axios from "axios"

import { SetStateAction, useEffect, useState } from "react";


export default function User() {

  const [loading, settLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    axios.get("https://week-13-ofline.kirattechnologies.wrkers.dev/api/v1/users/details").then((response: { data: SetStateAction<undefined>; }) => {
      setData(response.data)
    })
  }, [])

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
