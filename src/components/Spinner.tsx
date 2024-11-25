import styled from "styled-components";

// Stylingen för spinnern
const SpinnerWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
`;

const LdsDualRing = styled.div`
  display: inline-block;
  width: 64px;
  height: 64px;
  border: 8px solid #f3f3f3;
  border-top: 8px solid #3498db;
  border-radius: 50%;
  animation: lds-dual-ring 1.2s linear infinite;
  
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

// Spinner-komponenten
export const Spinner = () => {
  return (
    <SpinnerWrapper>
      <LdsDualRing />
    </SpinnerWrapper>
  );
};
