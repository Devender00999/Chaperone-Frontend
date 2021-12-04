import React, { useState } from "react";
import StyedModal from "./styledComponents/CustomModal/CustomModal";
import SignInForm from "./styledComponents/Form/SigninForm";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App" style={{ transition: "all ease-in 100ms" }}>
      <button onClick={() => setShowModal(true)}> Show Popup</button>
      <StyedModal
        showModal={showModal}
        setShowModal={setShowModal}
        Component={SignInForm}
      />
    </div>
  );
};

export default App;
