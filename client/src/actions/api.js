// *** From food-lookup-demo; checks status
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    console.log(response)
    return response;
  } else {
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    window.location.replace(`/maps`);
    console.log(error);
  }
}

// *** Homepage map loading function ***
export function startMap(event, data) {
    event.preventDefault()
    if (data.id){
      window.location.replace(`/maps/${data.id}`)
    } else {
      fetch(`/api/maps/`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(checkStatus)
      .then(res => res.json())
      .then(data =>  window.location.replace(`/maps/${data.id}`))
  }
}

//*** Loads map information when you drill down on ID
export function fetchMapInfo(id) {
  return (dispatch) => {
    dispatch ({type: 'LOADING_MAP'});
    fetch(`/api/maps/${id}`)
    .then(checkStatus)
    .then(res => res.json())
    .then(json => dispatch({type: 'LOAD_PINS', json}))
  }
}

export function createPin(data, id) {
  return (dispatch) => {
    dispatch ({type: 'CREATING_PIN'});
    fetch(`/api/maps/${id}/pins`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(checkStatus)
    .then(res => res.json())
    .then(data => dispatch({type: 'CREATE_PIN', data}));
  }
}

export function deletePin(map_id, id){
  return (dispatch) => {
    dispatch ({type: 'DELETING_PIN'});
    fetch(`/api/maps/${map_id}/pins/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        }
      })
    .then(checkStatus)
    .then(res => res.json())
    .then(data => dispatch({type: 'DELETE_PIN', data}));
  }
}

export function editPin(data) {
  return (dispatch) => {
    dispatch ({type: 'EDITING_PIN'});
    fetch(`/api/pins/${data.id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(checkStatus)
    .then(res => res.json())
    .then(data => dispatch({type: 'EDIT_PIN', data}))
  }
}

export function setFilter(data){
  return (dispatch) => {
    dispatch({type: data.type, criteria: data.criteria})
  }
}
