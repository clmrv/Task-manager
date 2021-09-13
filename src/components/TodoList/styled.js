import styled from 'styled-components'


export const TodoListContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 40px;
  padding: 40px;
  background-color: white;
  border: solid white 1px;
  border-radius: 20px;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.08);
`

export const TitleWrapper = styled.div`
  padding: 19px 0;
  width: 100%;
`

export const TitleText = styled.h2`
  margin: 0;
  text-align: center;
  min-width: 100px;
`
export const TitleInputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 17px;
  margin-bottom: 18px;
`

export const AddNewTaskContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end; 
  max-height: 32px;  /* equals input size - container height doesn't clip */
`