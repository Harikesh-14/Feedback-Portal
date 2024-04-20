import React, { useState } from "react"
import { BsEye, BsEyeSlash } from "react-icons/bs"
import { Link, Navigate } from "react-router-dom"

function Register() {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false)
  const [firstName, setFirstName] = useState<string>("")
  const [lastName, setLastName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [phoneNumber, setPhoneNumber] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [resdirectToLogin, setRedirectToLogin] = useState<boolean>(false)

  const registerUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      let response = await fetch("http://localhost:3000/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,
          phone: Number.parseInt(phoneNumber),
          password: password
        })
      })

      if (!response.ok) {
        const errorData = await response.json()

        if (errorData.message === "User already exists") {
          alert("User already exists")
        } else {
          alert("Something went wrong")
        }
      } else {
        alert("User registered successfully")
        setRedirectToLogin(true)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible)
  }

  if (resdirectToLogin) {
    return <Navigate to={"/login"} />
  }

  return (
    <section className="w-full mt-24 mb-[7.4rem] md:my-10 flex justify-center">
      <form className="w-[20rem] flex flex-col justify-center items-center gap-5" onSubmit={registerUser}>
        <div className="w-full text-left">
          <h1 className="text-3xl font-semibold">Welcome to our family</h1>
          <p className="text-gray-500">Please enter your details</p>
        </div>
        <div className="w-full flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="text-lg font-medium">First Name</label>
            <input
              type="text"
              className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium">Last Name</label>
            <input
              type="text"
              className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium">Email</label>
            <input
              type="email"
              className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium">Phone Number</label>
            <input
              type="number"
              className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div>
            <label className="text-lg font-medium">Password</label>
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordVisible ? (<BsEyeSlash className="absolute top-3 right-2 text-lg font-bold cursor-pointer" onClick={togglePasswordVisibility} />) : (<BsEye className="absolute top-3 right-2 text-lg font-bold cursor-pointer" onClick={togglePasswordVisibility} />)}

            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-3 mt-5">
          <button
            type="submit"
            className="bg-blue-900 text-white p-2 rounded-md text-center font-medium hover:bg-blue-950 transition-all ease-in-out"
          >
            Submit
          </button>
          <p className="text-center font-medium">Already have an account? <Link to={"/register"} className="text-blue-700">Login</Link></p>
        </div>
      </form>
    </section>
  )
}

export default Register