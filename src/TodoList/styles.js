
export const inputContainer = { 
  width: "100%",
}

export const titleInputContainer = {
  ...inputContainer,
  display: "flex",
  alignItems: "center",
  marginTop: "17px",
  marginBottom: "18px",
}

export const addNewTaskButtonContainer = {
  width: "100%",
  maxHeight: "32px",  // equals input size - container height doesn't clip
  display: "flex",
  justifyContent: "flex-end", 
}