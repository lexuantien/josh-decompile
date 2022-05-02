import styled from 'styled-components';

import {
    BaseWrapper
} from '../Sidenote';
import {
    Wrapper as SpeechBubbleWrapper
} from '../SpeechBubble';

export default styled.p `
  font-size: calc(19 / 16 * 1rem);
  margin-bottom: 24px;

  ${BaseWrapper} & {
    font-size: calc(17 / 16 * 1rem);
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  ${SpeechBubbleWrapper} & {
    font-size: calc(17 / 16 * 1rem);
    margin-bottom: 16px;
  }

  @media ${(p) => p.theme.breakpoints.smAndSmaller} {
    font-size: calc(18 / 16 * 1rem);
    margin-bottom: 1.5rem;
  }
`;