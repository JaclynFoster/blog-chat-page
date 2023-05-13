let myState = {
    limit: 45, 
    username: '', 
    password: ''
    
}


const setState = (obj) => {
        myState = Object.assign(myState, obj)
}

const getState = () => {
    return myState;
}