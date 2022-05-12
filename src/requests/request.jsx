/** @format */

import post from "./PostDataFunction/postdata";
import put from "./putDataFunction/putdata";
import get from "./GetDataFunction/getdata";
import del from "./deleteDataFunction/deleteData";

const http = {
  post,
  put,
  get,
  del,
};

export default http;
