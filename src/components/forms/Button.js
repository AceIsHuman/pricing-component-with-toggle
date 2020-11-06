import styled from 'styled-components';

const Button = styled.button`
  width: ${(props) => props.width || '100%'};
  margin: ${(props) => props.margin || '0.5rem'};
  padding: 0.6rem;
  background: ${(props) =>
    props.background ||
    'linear-gradient(to right, rgb(151,156,237), rgb(101,106,187))'};
  color: ${(props) => props.color || '#ffffff'};
  border-radius: 0.4rem;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
  border: 1px rgba(0, 0, 0, 0) solid;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    background: none;
    border: 1px ${(props) => props.background || 'rgba(151,156,237,1)'} solid;
    color: ${(props) => props.background || 'rgb(151,156,237)'};
  }
`;

export default Button;
