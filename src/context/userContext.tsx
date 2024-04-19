import React, { createContext, useState } from 'react'

type UserType = {
  id: string
  username: string
  firstName: string
  lastName: string
  email: string
  phone: number
}

type UserContextType = {
  userLoggedIn: UserType
  setUserLoggedIn: React.Dispatch<React.SetStateAction<UserType>>
  isUserLoggedIn: boolean,
  setIsUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

export const UserContext = createContext<UserContextType | null>(null)

function UserContextProvider({ children }: { children: React.ReactNode }) {
  const [userLoggedIn, setUserLoggedIn] = useState<UserType>({
    id: "",
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: 0
  })

  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false)

  const value: UserContextType = {
    userLoggedIn,
    setUserLoggedIn,
    isUserLoggedIn,
    setIsUserLoggedIn,
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider