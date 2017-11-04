const activeUserReducer = (state = {
    id: 0,
    first: "select",
    last: "user..."
}, action) => {
    switch (action.type) {
        case "USER_SELECTED":
                return action.payload;
            break;
    }
    return state;
}

export default activeUserReducer;