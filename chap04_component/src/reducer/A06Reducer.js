export const reducer = (state, action) => {
  switch (action.type) {
    case 'A06HOOK/CHANGENUMBER':
      // action.payload => evt.target
      let value = Number(action.payload.value);
      if (Number.isNaN(value)) value = '';
      return { ...state, [action.payload.name]: value }
    case 'A06HOOK/CHANGESTRING':
      // action.payload => evt.target
      return { ...state, [action.payload.name]: action.payload.value }
    case 'A06HOOK/CHANGETODAY':
      return { ...state, today: new Date() }
    case 'A06HOOK/ADDLIST':
      if (state.avg >= 1) {
        const newList = state.list.concat(state.avg)
        return { ...state, list: newList }
      } else {
        return state;
      }

    default:
      return state;
  }
};
export const init = {
  num: '',
  str: 'A',
  today: new Date(),
  avg: '',
  list: []
}