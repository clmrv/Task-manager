import * as actions from "./actions"


export const listAdded = () => ({
  type: actions.listAdded,
})

export const listTitleChanged = (listId, newTitle) => ({
  type: actions.listTitleChanged,
  payload: {
    listId: listId,
    newTitle: newTitle,
  }
})

export const listItemAdded = (listId, newItemText) => ({
  type: actions.listItemAdded,
  payload: {
    listId: listId,
    newItemText: newItemText,
  }
})

export const listItemMarked = (listId, itemId) => ({
  type: actions.listItemMarked,
  payload: {
    listId: listId,
    itemId: itemId,
  }
})