import React from "react";
import * as Modal from "./CustomModal.styles";

const StyledModal = ({ showModal, setShowModal, Component }) => {
  return (
    <Modal.ModalOverlay style={{ display: showModal ? "flex" : "none" }}>
      <Modal.ModalContainer>
        <Modal.ModalClose
          draggable={false}
          onClick={() => setShowModal(!showModal)}
          src="images/cancel.png"
        />
        <Modal.ModalBody>{Component}</Modal.ModalBody>
      </Modal.ModalContainer>
    </Modal.ModalOverlay>
  );
};

export default StyledModal;
