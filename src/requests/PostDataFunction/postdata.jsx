const post = async(url= '', data = {}, header = { "Content-Type": "application/json" }) => {
   const res = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: header,
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data)
   });
   return res.json();
}

export default post

/*
import axios from "axios"

const post = async(url= '', data = {}, header = { "Content-Type": "application/json" }) => {
   const res = await axios.post(url,data)
}

export default post
*/