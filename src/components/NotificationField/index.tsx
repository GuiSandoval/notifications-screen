import React from 'react';
import * as S from './styles';

interface IPropsNotificationField {
  title: string;
  description: string;
}

function NotificationField({ title, description }: IPropsNotificationField) {
  return (
    <S.Container>
      <S.AreaNotification>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.AreaNotification>
      <S.CloseButton>X</S.CloseButton>
    </S.Container>
  );
}

export { NotificationField };
