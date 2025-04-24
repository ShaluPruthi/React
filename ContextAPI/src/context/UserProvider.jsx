import React from "react";
import UserContext from "./UserContext";

const UserProvider = ({children}) => {
    const [user, setUser] = React.useState(null)

    return (
        // we are passing the user and setUser to the provider so that we can use it in the components
        //store the data in the context and pass it to the provider
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )

}

export default UserProvider;