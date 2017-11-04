export const selectedUser = (user) => {
    console.log(`Selected User is ${user.first}`);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};