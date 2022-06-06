import React from "react";
import { GoogleLogin } from "react-google-login";
import config from "../config";
import http from "../services/httpService";
import { loginWithJwt } from "../services/authService";
import { toast } from "react-toastify";
import { StyledButtons } from "../styledComponents/common/Common/Common.styles";
import GoogleIcon from "@mui/icons-material/Google";

if (!process.env["REACT_APP_CLIENT_ID"]) {
   console.log("Cliet ID not found");
}

const GoogleLoginButton = () => {
   const handleSuccess = async (googleData) => {
      const { data, status } = await http.post(
         config.apiUrl + "/users/auth/google",
         {
            token: googleData.tokenId,
         }
      );

      if (status === 200) {
         const { token } = data;
         toast.success("Login Sucessful.");
         console.log("Login SUccess");
         loginWithJwt(token);
         window.location = "/dashboard";
      } else {
         toast.error(data.message);
      }
   };

   const handleError = (res) => {
      toast.error(res);
   };
   console.log("clientID:", process.env["REACT_APP_CLIENT_ID"]);
   return (
      <div>
         <GoogleLogin
            clientId={process.env["REACT_APP_CLIENT_ID"]}
            render={(props) => (
               <StyledButtons
                  onClick={props.onClick}
                  disabled={props.disabled}
                  startIcon={<GoogleIcon />}
               >
                  Sign in with Google
               </StyledButtons>
            )}
            onSuccess={handleSuccess}
            onFailure={handleError}
         />
      </div>
   );
};

export default GoogleLoginButton;
