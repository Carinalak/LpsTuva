import styled from "styled-components";

export const MemoryStyle = styled.div `

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  max-width: 400px;
  margin: 0 auto;
`;

export const MemoryCard = styled.div `
  width: 100px;
  padding: 2px;
  background-color: white;
  cursor: pointer;
  perspective: 1000px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const CardImage = styled.img `
    width: 100%;
    height: 100%;
    border-radius: 5px;

`;

export const CardMatched = styled.img `
    opacity: 0.6;
    pointer-events: none;

`;