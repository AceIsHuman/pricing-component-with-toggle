import styled from 'styled-components';

const Button = styled.button`
  width: ${(props) => props.width || '100%'};
  margin: ${(props) => props.margin || '0.5rem'};
  padding: 0.8rem;
  background-color: ${(props) => props.background || 'rgb(151,156,237)'};
  color: ${(props) => props.color || '#ffffff'};
  border-radius: 0.2rem;
`;

export default Button;
