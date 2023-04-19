import React, { useEffect, useState } from 'react';
import { apiUrl } from '../../services/apiUrl';
import * as S from './styles';
import { Header } from '../../components/Header';

function NotificationsPage() {
  const [notifications, setNotifications] = useState([] as any[]);

  async function loadNotifications() {
    const { data: notificationsresponse } = await apiUrl.get('/posts?userId=1');
    setNotifications(notificationsresponse);
  }

  useEffect(() => {
    loadNotifications();
  }, []);

  if (!notifications) return <div>Loading...</div>;

  return (
    <S.Container>
      <Header />
    </S.Container>
  );
}

export { NotificationsPage };
