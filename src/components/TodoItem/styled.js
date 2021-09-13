import styled, { css } from "styled-components";

export const TodoItemContainer = styled.div`
  margin: 0;
  padding: 0;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`

export const ItemText = styled.p`
  color: black;
  margin-left: 10px;
  pointer-events: none;
  transition: color 250ms;

  ${props => props.completed && css`
    color: #bbbbbb;
    text-decoration: line-through;
    font-style: italic;
  `}
`