import { Link } from "react-router-dom"

function Login() {
  return (
    <section className="w-full">
      <form>
        <div>
          <h1>Welcome back!</h1>
          <p>Please enter your details</p>
        </div>
        <div>
          <div>
            <label>Email</label>
            <input type="email" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" />
          </div>
        </div>
        <div>
          <button>Submit</button>
          <p>Don't have an account? <Link to={"/register"}>Register</Link></p>
        </div>
      </form>
    </section>
  )
}

export default Login