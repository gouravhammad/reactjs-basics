import React from 'react'

const UserContext = React.createContext('default_name')

const UserContextProvider = UserContext.Provider
const UserContextConsumer = UserContext.Consumer

export { UserContextProvider, UserContextConsumer}

export default UserContext
