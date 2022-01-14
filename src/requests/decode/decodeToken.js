import jwt_decode from "jwt-decode";

const getUserDetails = () => {
	const token = localStorage.getItem("token");
   if (token) {
      const user = jwt_decode(token);
      return user;
   } else {
      return null;
   }
};

export default getUserDetails;

/*
   if(user.createAccount === true){
      dispatch(Actions.createAccount({
         id: user.id,
         email: user.email,
         name: user.name,
         number: user.number
      }))
      }
      else{
      dispatch(Actions.userLoggedIn({
         id: user.id,
         email: user.email,
         name: user.name,
         number: user.number,
         enrollNo: user.enrollNo,
         collegeName: user.collegeName,
         profileImg: user.profileImg,
         interests: user.interests,
         sem: user.sem,
         branch: user.branch
      }))
   }
*/
