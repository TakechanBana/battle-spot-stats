import * as types from './../constants/action-types.jsx'

export function changeSelected(context, selected) {
  return {
    type: types.CHANGE_SELECTED,
    context: context,
    selected: selected
  }
}

export function changeSortBy(sortBy) {
  return {
    type: types.CHANGE_SORTBY,
    sortBy: sortBy
  }
}
