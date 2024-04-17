import { Link } from "react-router-dom"

function Login() {
  return (
    <section className="w-full mt-24 mb-[7.4rem] md:my-10 flex justify-center">
      <form className="w-[20rem] flex flex-col justify-center items-center gap-5">
        <div className="w-full text-left">
          <h1 className="text-3xl font-semibold">Welcome back !</h1>
          <p className="text-gray-500">Please enter your details</p>
        </div>
        <div className="w-full flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="text-lg font-medium">Email</label>
            <input
              type="email"
              className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
            />
          </div>
          <div>
            <label className="text-lg font-medium">Password</label>
            <input
              type="password"
              className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-3 mt-5">
          <Link
            to={"#"}
            className="bg-blue-900 text-white p-2 rounded-md text-center"
          >
            Submit
          </Link>
          <p className="text-center font-medium">Don't have an account? <Link to={"/register"} className="text-blue-700">Register</Link></p>
        </div>
      </form>
    </section>
  )
}

export default Login