import styled from "styled-components";
const Wrapper = styled.section`
  .contact {
    border: 1px solid white;
    width: min(80%, 1200px);
  }
  .form {
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .form-row {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .input,
  .textarea {
    background-color: transparent;
    padding: 0.5rem 1rem;
    font: inherit;
    text-transform: capitalize;
    color: var(--txt-clr-darker);
    border-radius: 5px;
    border: 2px solid var(--nav-bg);
  }
  .input::placeholder,
  .textarea::placeholder {
    color: var(--txt-clr);
    opacity: 0.5;
  }
  .textarea {
    height: 200px;
  }
  .input:focus,
  .textarea:focus {
    outline: none;
    border: 2px solid var(--red-darker-border);
  }
  .form-btn {
    display: flex;
    align-items: center;
    outline: none;
    border: 2px solid var(--nav-bg);
    align-self: start;
    padding: 0.5rem 1.5rem;
    border-radius: 1rem;
    & svg {
      font-size: 2rem;
      transform: translateX(0);
      transition: 0.3s ease-in-out;
    }
  }
  .form-btn:hover {
    border: 2px solid var(--red-darker-border);
    svg {
      transform: translateX(20px);
    }
  }
  @media screen and (min-width: 800px) {
    .form-row {
      flex-direction: row;
      & > * {
        flex: 1;
      }
    }
  }
`;
export default Wrapper;
