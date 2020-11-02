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
  font-variant: all-petite-caps;
`;

export default Button;
