import React from 'react';
import styled from 'styled-components';

const Chunk = ({
    spacing = 48,
    children
}) => {
    return <Wrapper style = {
        {
            marginBottom: spacing
        }
    } > {
        children
    } < /Wrapper>;
};

const Wrapper = styled.div `
  display: flex;
  justify-content: center;
`;

export default Chunk;