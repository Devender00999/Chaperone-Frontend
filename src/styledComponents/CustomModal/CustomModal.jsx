import React from "react";
import {
  ModalContainer,
  ModalClose,
  ModalOverlay,
  ModalBody,
} from "./CustomModal.styles";

const StyedModal = ({ showModal, setShowModal, Component }) => {
  return (
    <ModalOverlay style={{ display: showModal ? "flex" : "none" }}>
      <ModalContainer>
        <ModalClose
          onClick={() => setShowModal(!showModal)}
          src="images/cancel.png"
        />
        <ModalBody>{<Component />}</ModalBody>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default StyedModal;
