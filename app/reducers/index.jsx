import { CHANGE_SELECTED, CHANGE_SORTBY } from './../constants/action-types.jsx'
import { defaultSelected } from './../constants/default-contexts.jsx'

const initialState = {
  context: 'Pokemon',
  selected: '700-0',
  sortBy: 'rank'
}

export default function counter(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SELECTED:
      var newSelected = action.selected ? action.selected : state.selected
      if (state.context !== action.context) {
        newSelected = defaultSelected[action.context]
      }
      return {
        context: action.context,
        selected: newSelected,
        sortBy: state.sortBy
      }
    case CHANGE_SORTBY:
      return {
        context: state.context,
        selected: state.selected,
        sortBy: action.sortBy
      }
    default:
      return state
  }
}
