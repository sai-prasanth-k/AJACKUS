import styled from 'styled-components';

export const UserCardPage = styled.div`
  width: 350px;
  padding: 10px;
  background-color: #697565;
  border-radius: 10px;
`;

export const UserCardName = styled.h1`
  font-size: 22px;
`;

export const UserValueField = styled.p`
  font-size: 16px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 20px;
`;

export const IconButton = styled.button`
  font-size: 16px;
  font-weight: 600px;
  padding: 10px 30px;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
`;