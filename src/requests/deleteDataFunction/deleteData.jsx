const del = async(url= '', data = {}, header = { "Content-Type": "application/json" }) => {
   const res = await fetch(url, {
      method: "DELETE",
      mode: "cors",
      headers: header,
      redirect: "follow",
      referrerPolicy: "no-referrer"
   });
   return res.json();
}

export default del