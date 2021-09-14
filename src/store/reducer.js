import * as actions from "./actions";
import testData from "./testData";

export default function reducer(store = testData, action) {
  const listId = action?.payload?.listId;

  switch (action.type) {
    case actions.listAdded:
      return [
        ...store,
        {
          id: store.length > 0 ? store[store.length - 1].id + 1 : 1,
          title: "",
          items: [],
        },
      ];

    case actions.listTitleChanged:
      const newTitle = action.payload.newTitle;
      return store.map((list) =>
        list.id !== listId ? list : { ...list, title: newTitle }
      );

    case actions.listItemAdded:
      const newItemText = action.payload.newItemText;
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

    case actions.listItemMarked:
      const itemId = action.payload.itemId;
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

    default:
      return store;
  }
}
