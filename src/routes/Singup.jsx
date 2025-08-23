import { useDispatch } from "react-redux";
import { logActions } from "../store/LogSlice";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (isValidEmail) {
      dispatch(logActions.toggleLog());
      navigate("/");
      setError("");
    } else {
      setError("Please enter a valid email address.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main className="d-flex align-items-center py-4 bg-body-tertiary singup">
      <form onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="emailInput"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="emailInput">Email address</label>
        </div>

        <div className="form-floating mb-3">
          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              required
            />
            <button
              type="button"
              className="btn btn-light"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
          </div>
        </div>

        {error && <div className="text-danger mb-3">{error}</div>}

        <div className="form-check text-start my-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="checkDefault"
          />
          <label className="form-check-label" htmlFor="checkDefault">
            Remember me
          </label>
        </div>

        <button className="btn btn-primary w-100 py-2" type="submit">
          Sign in
        </button>
      </form>
    </main>
  );
}

export default Login;
