import styled from "styled-components";

export const LoadMoreBtnStyled = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: ${({ theme }) => theme.radii.sm};
  cursor: pointer;
  margin: 20px auto;
  display: block;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonAccent};
  }
`;
