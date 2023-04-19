import styled from "styled-components";

export const ModalContainer = styled.div`
  background: #fff;
  position: absolute;
  top: 5rem;
  right: 1rem;
  box-shadow: 0 0 0 1rem rgba(0, 0, 0, 0.1), 0 4px 11px rgba(0, 0, 0, 0.1);

  width: 100%;
  max-width: 36rem;
  padding: 1.4rem;
`;

const ModalBaseLayout = styled.div`
  width: 100%;
`;

export const ModalHeader = styled(ModalBaseLayout)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ModalContent = styled(ModalBaseLayout)`
  height: 90%;
`;
export const ModalFooter = styled(ModalBaseLayout)``;

export const ButtonOpenModal = styled.button`
  /* display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.purple};
  color: ${({ theme }) => theme.white};
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 600;

  width: 100%;
  padding: 1rem;
  transition: all 0.2s;

  > span {
    margin-left: 0.5rem;
  }

  &:hover {
    filter: brightness(0.9);
  } */
`;
export const ButtonCloseModalIcon = styled.span`
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`;
