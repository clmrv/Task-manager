import {
  LIST_ADDED,
  LIST_TITLE_CHANGED,
  LIST_ITEM_ADDED,
  LIST_ITEM_MARKED,
} from "../../actions/actions";
import testData from "./testData";

export default function reducer(store = testData, action) {
  const { type, payload } = action;

  switch (type) {
    case LIST_ADDED:
      return [
        ...store,
        {
          id: store.length > 0 ? store[store.length - 1].id + 1 : 1,
          title: "",
          items: [],
        },
      ];

    case LIST_TITLE_CHANGED: {
      const listId = payload.listId;
      const newTitle = payload.newTitle;

      return store.map((list) =>
        list.id !== listId ? list : { ...list, title: newTitle }
      );
    }

    case LIST_ITEM_ADDED: {
      const listId = payload.listId;
      const newItemText = payload.newItemText;

      return store.map((list) =>
        list.id !== listId
          ? list
          : {
              ...list,
              items: [
                ...list.items,
                {
                  id:
                    list.items.length > 0
                      ? list.items[list.items.length - 1].id + 1
                      : 1,
                  text: newItemText,
                  completed: false,
                },
              ],
            }
      );
    }

    case LIST_ITEM_MARKED: {
      const listId = payload?.listId;
      const itemId = payload.itemId;

      return store.map((list) =>
        list.id !== listId
          ? list
          : {
              ...list,
              items: list.items.map((item) =>
                item.id !== itemId
                  ? item
                  : {
                      ...item,
                      completed: !item.completed,
                    }
              ),
            }
      );
    }

    default:
      return store;
  }
}
