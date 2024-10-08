// Declare initialEntries before the reducer function
const initialEntries = [
    {
      id: 1,
      description: "Work Income Redux",
      value: 1000,
      isExpense: false
    },
    {
      id: 2,
      description: "Water Bill Redux",
      value: 20000,
      isExpense: true
    },
    {
      id: 3,
      description: "Rent",
      value: 3000,
      isExpense: true
    },
    {
      id: 4,
      description: "Power Bill",
      value: 3000,
      isExpense: true
    },
];

const entriesReducers = (state = initialEntries, action) => {
  switch (action.type) {
    case 'ADD_ENTRY':
      const newEntries_add = state.concat({ ...action.payload });
      return newEntries_add;

    case 'REMOVE_ENTRY':
      const newEntries_remove = state.filter(entry => entry.id !== action.payload.id);
      return newEntries_remove;

    default:
      return state;
  }
};

export default entriesReducers;
