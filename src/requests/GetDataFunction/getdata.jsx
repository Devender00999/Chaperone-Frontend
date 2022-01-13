const get = async(url= '', data = {}) => {
   const res = await fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
         'Content-Type' : 'application/json'
      },
      redirect: "follow",
      referrerPolicy: "no-referrer"
   });
   return res.json();
}

export default get