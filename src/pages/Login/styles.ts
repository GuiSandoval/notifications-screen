import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;

   >h2 {
    margin-bottom: 2rem;
   }
`;

export const InputField = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
`;
export const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
`;
