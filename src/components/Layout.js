import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing(6)};
  padding: ${(p) => p.theme.spacing(6)};
  max-width: 1200px;
`;