import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #eee;
`;

export const AreaNotification = styled.div`
  width: 100%;
  max-width: 20rem;
`;
export const Title = styled.h4`
  margin-bottom:.6rem;
`;
export const Description = styled.p`
  color: #666;
  font-size: .9rem;
`;

export const CloseButton = styled.button`
  background: red;
  color: #fff;
  border:1px solid #000;
  border-radius: 50%;
  text-align: center;
  height: 1.1rem;
  width: 1.1rem;
  font-size: .6rem;
  line-height: 1rem;
  font-weight: bold;
  cursor: pointer;
  padding: 0;
  margin: 0;
`;
