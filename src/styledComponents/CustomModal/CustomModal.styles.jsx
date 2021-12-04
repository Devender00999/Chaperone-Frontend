import styled from "styled-components";

const ModalOverlay = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.15);
  position: fixed;
  z-index: 1;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  position: relative;
  background: white;
  padding: 20px;
  min-width: 130px;
  border-radius: 10px;
`;

const ModalClose = styled.img`
  position: absolute;
  width: 20px;
  opacity: 0.5;
  right: 20px;
  top: 15px;
  cursor: pointer;
`;
const ModalBody = styled.div``;
export { ModalOverlay, ModalContainer, ModalClose, ModalBody };
