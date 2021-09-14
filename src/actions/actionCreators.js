import * as actions from "./actions";

export const listAdded = () => ({
  type: actions.LIST_ADDED,
});

export const listTitleChanged = (listId, newTitle) => ({
  type: actions.LIST_TITLE_CHANGED,
  payload: {
    listId: listId,
    newTitle: newTitle,
  },
});

export const listItemAdded = (listId, newItemText) => ({
  type: actions.LIST_ITEM_ADDED,
  payload: {
    listId: listId,
    newItemText: newItemText,
  },
});

export const listItemMarked = (listId, itemId) => ({
  type: actions.LIST_ITEM_MARKED,
  payload: {
    listId: listId,
    itemId: itemId,
  },
});
