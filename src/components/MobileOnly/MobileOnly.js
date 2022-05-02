import styled from 'styled-components';

const MobileOnly = styled.div `
  @media ${(p) =>
      p.breakpoint === 'small'
        ? p.theme.breakpoints.mdAndLarger
        : p.theme.breakpoints.lgAndLarger} {
    display: none;
  }
`;

export default MobileOnly;