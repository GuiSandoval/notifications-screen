import React, { useState } from 'react';
import * as S from './styles';
import { NotificationIcon } from '../../common/icons/NotificationIcon';
import { Modal } from '../../common/Modal';
import { NotificationField } from '../NotificationField';

interface INotificationBff {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface IHeader {
  notifications: INotificationBff[];
}

function Header({ notifications }: IHeader) {
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
        {!notifications ? 'carregando...'
          : notifications.map((notification) => (
            <NotificationField
              key={notification.id}
              title={notification.title}
              description={notification.body}
            />
          ))}
      </Modal>
    </S.Container>
  );
}

export { Header };
