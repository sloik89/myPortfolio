import styled from "styled-components";
const Wrapper = styled.div`
  .work-container {
    width: 90%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    justify-content: center;
    border: 1px solid red;
    margin: 9rem auto;
  }
  .work-text {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
    }
  }
`;
export default Wrapper;
