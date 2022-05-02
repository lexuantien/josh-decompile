import styled from 'styled-components';

const Blockquote = styled.blockquote `
  font-style: italic;
  color: var(--color-gray-700);
  padding: 0 32px;
  margin-top: 24px;
  margin-bottom: 48px;

  @media ${p => p.theme.breakpoints.mdAndSmaller} {
    padding: 0 2rem;
  }

  @media ${p => p.theme.breakpoints.smAndSmaller} {
    padding: 0 1rem;
  }
`;

export default Blockquote;