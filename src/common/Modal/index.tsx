/* eslint-disable react/function-component-definition */
import React from "react";
import * as S from "./styles";

interface IPropsModal {
  ButtonHandle: React.ReactNode;
  isShowing: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<IPropsModal> = ({
  ButtonHandle,
  isShowing,
  onClose,
  children,
}) => (
  <>
    {ButtonHandle}
    {isShowing && (
      <S.ModalContainer>
        <S.ModalHeader>
          <S.ButtonCloseModalIcon onClick={onClose}>
            X
          </S.ButtonCloseModalIcon>
        </S.ModalHeader>
        <S.ModalContent>

          {children}
        </S.ModalContent>
      </S.ModalContainer>
    )}
  </>
);

export { Modal };
