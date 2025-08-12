import axios from "axios"


export default async function User() {

  const response = await axios.get("some url");
  const data = response.data;

  return (
    <div>
      User page 
      {data.name}
      {data.email}
    </div>
  );
}
