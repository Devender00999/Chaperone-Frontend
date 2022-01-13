const put = async(url= '', data = {}, header = { "Content-Type": "application/json" }) => {
   console.log(data);
   const res = await fetch(url, {
      method: "PUT",
      mode: "cors",
      headers: header,
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data)
   });
   return res.json();
}

export default put