import styled from 'styled-components';

const SideBySide = styled.div `
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: auto;
  margin-top: 36px;
  margin-bottom: 48px;
  padding: 16px;
  margin-left: -16px;
  margin-right: -16px;
  grid-gap: 16px;
  border: 1px solid var(--color-gray-200);

  @media ${p => p.theme.breakpoints.smAndSmaller} {
    padding: 0;
    margin-left: 0;
    margin-right: 0;
    grid-template-columns: 1fr;
    border: none;
  }
`;

export default SideBySide;