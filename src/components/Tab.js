import styled from 'styled-components';

export default styled.div`
  cursor: pointer;
  filter: opacity(${(props) => (props.active ? '100%' : '50%')})
    grayscale(${(props) => (props.active ? '0%' : '100%')});
`;
