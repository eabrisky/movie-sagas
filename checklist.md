MOVIELIST

[x] grab movie id on click
    [x] handleClick fn to send user to details page
    [x] dispatch movie to rootSaga

INDEX
[x] call fn*
    [x] send action.payload to movie reducer (yield put)
    [] save response from axios.get in genre.router.js
    [] send response.data to genre reducer (yield put)

DETAILS

[x] display movie that was clicked on this page
[] display all genres that apply to movie
    [] store data in redux

-- get request for specific movie
    -- req.params
    -- :id

[] back to list button
    -- takes user to list page