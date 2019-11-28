export const SetFilter = filter => ({
  type: 'SET_FILTER',
  filter
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_PIN_BY_ID: 'SHOW_PIN_BY_ID',
  SHOW_PINS_BY_COLOR: 'SHOW_PINS_BY_COLOR'
}
