import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

function SignIn() {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // Handle form submission
  async function onSubmit(data) {
    setLoading(true);
    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password
            })
        });

        if (!response.ok) {
            throw new Error("Invalid email or password"); // Error message if response is not ok
        }

        const result = await response.json();
        localStorage.setItem('token', result.auth_token); // Store the token
        toast.success(result.message);
        
        navigate('/'); // Navigate after successful login

    } catch (error) {
        setErrorMessage(error.message); // Display error message
        console.error("Login error:", error.message);
    } finally {
        setLoading(false);
    }
}


  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              
                <div className="label">
                  <span className="label-text font-semibold">Email address</span>
                </div>
                <input id="email"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                      message: "Enter a valid email address"
                    }
                  })} placeholder="Email address" className="input input-bordered w-full" />

              
              {errors.email && <p className="text-red-500 text-xs mt-1 input-error">{errors.email.message}</p>}

            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm  leading-6 text-gray-900 font-semibold">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  {...register("password", { required: "Password is required" })}
                  type="password"
                  className="input input-bordered w-full"
                />
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
              </div>
            </div>

            {errorMessage && (
              <div className="text-red-500 text-sm">{errorMessage}</div>
            )}

            <div>


              <button type="submit"
                disabled={loading} className="btn btn-outline btn-block">{loading ? "Signing in..." : "Sign in"}</button>

            </div>

            <div className="text-sm">
              <Link to="/forgot-password" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Forgot password?
              </Link>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <Link to="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignIn;
