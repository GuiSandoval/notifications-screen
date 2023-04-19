import React, { useState } from 'react';
import * as S from './styles';
import { NotificationIcon } from '../../common/icons/NotificationIcon';
import { Modal } from '../../common/Modal';

function Header() {
  const [isShowing, setIsShowing] = useState(false);

  const handleOpen = () => (isShowing ? setIsShowing(false) : setIsShowing(true));
  const handleClose = () => setIsShowing(false);

  return (
    <S.Container>

      <Modal
        isShowing={isShowing}
        onClose={handleClose}
        ButtonHandle={(
          <S.Button onClick={() => handleOpen()}>
            <NotificationIcon />
          </S.Button>
        )}
      >
        <h1>Olá</h1>
      </Modal>
    </S.Container>
  );
}

export { Header };
