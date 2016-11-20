/**
 * Created by zh355245849 on 2016/11/19.
 */
let userReducer = function reducer(user = {}, action) {
    switch(action.type) {
        case  'CREATE_USER_ID':
            return {
                    username: user.username,
                    id: action.id
                }
        default:
            return user;
    }
}

export default userReducer