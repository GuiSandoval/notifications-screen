import React from 'react';
import * as S from './styles';
import { NotificationIcon } from '../common/icons/NotificationIcon';

function Header() {
  function handleShowNotifications() {
    console.log('show notifications');
  }

  return (
    <S.Container>
      <S.Button onClick={() => handleShowNotifications()}>
        <NotificationIcon />
      </S.Button>
    </S.Container>
  );
}

export { Header };
