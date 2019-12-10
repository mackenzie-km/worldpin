export function fetchMapInfo(id) {
  return (dispatch) => {
    dispatch ({type: 'LOADING_MAP'});
    fetch(`/maps/${id}`)
    .then(res => res.json())
    .then(json => dispatch({type: 'LOAD_PINS', json}))
  }
}

export function createPin(data, id) {
  return (dispatch) => {
    dispatch ({type: 'CREATING_PIN'});
    fetch(`/maps/${id}/pins`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => dispatch({type: 'CREATE_PIN', data}));
  }
}

export function deletePin(map_id, id){
  return (dispatch) => {
    dispatch ({type: 'DELETING_PIN'});
    fetch(`/maps/${map_id}/pins/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        }
      })
    .then(res => res.json())
    .then(data => dispatch({type: 'DELETE_PIN', data}));
  }
}

export function editPin(data) {
  return (dispatch) => {
    dispatch ({type: 'EDITING_PIN'});
    fetch(`/pins/${data.id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => dispatch({type: 'EDIT_PIN', data}))
  }
}

export function setFilter(data){
  return (dispatch) => {
    dispatch({type: data.type, criteria: data.criteria})
  }
}
