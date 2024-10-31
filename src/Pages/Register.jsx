
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-toastify";

function Register() {
    const { register, formState: { errors }, handleSubmit, watch } = useForm();
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const password = watch("password");
    async function submit(data) {
        try {
            setLoading(true);
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    password: data.password,
                    password_confirmation: data.password_confirmation
                })
            });

            if (!response.ok) {
                throw new Error('Failed to register'); // Throws if registration fails
            }

            const result = await response.json();
            localStorage.setItem('token', result.auth_token); // Save token to local storage
            toast.success(result.message);
            navigate('/');

        } catch (error) {
            setErrorMessage(error.message); // Capture error message
            console.error('Registration error:', error.message);

        } finally {
            setLoading(false);
        }
    }
    return (
        <>

            <div className="min-h-screen flex flex-col justify-center items-center">
                <div className="text-center text-xl font-bold"> Register</div>
                <form onSubmit={handleSubmit(submit)} className="lg:w-2/5 md:w-3/5 w-full rounded-lg m-3 p-6 shadow-sm">

                    <div className="my-2">
                        <div className="label">
                            <span className="label-text">Name</span>
                        </div>
                        <input {...register("name", {
                            required: "Name is required",
                        })} type="text" className="input input-bordered w-full max-w-md" />
                        {errors.name && <span className="text-red-600 text-xs mt-1">{errors.name.message}</span>}
                    </div>

                    <div className="my-2">
                        <div className="label">
                            <span className="label-text">Email</span>
                        </div>
                        <input {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                message: "Enter a valid email address"
                            }
                        })} type="email" className="input input-bordered w-full max-w-md" />
                        {errors.email && <span className="text-red-600 text-xs mt-1">{errors.email.message}</span>}
                    </div>


                    <div className="my-2">
                        <div className="label">
                            <span className="label-text">Password</span>
                        </div>
                        <input {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message: "Password must be at least 6 characters long"
                            }
                        })} type="password" className="input input-bordered w-full max-w-md" />
                        {errors.password && <span className="text-red-600 text-xs mt-1">{errors.password.message}</span>}
                    </div>


                    <div className="my-2">
                        <div className="label">
                            <span className="label-text">Confirm Password</span></div>
                        <input {...register("password_confirmation", {
                            required: "Password confirmation is required",
                            validate: value => value === password || "Passwords do not match"
                        })} type="password" className="input input-bordered w-full max-w-md" />
                        {errors.password_confirmation && <span className="text-red-600 text-xs mt-1">{errors.password_confirmation.message}</span>}

                    </div>

                    <button type="submit" className="btn btn-outline">{loading ? "Submitting Info" : "Submit"}</button>

                </form>
            </div>
        </>
    )
}

export default Register