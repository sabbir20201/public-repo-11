
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
    const { logIn, loginWithGoogle } = useContext(AuthContext)
    const [loggedinError, setloggedinError] = useState('')
    const navigate = useNavigate()

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        const user = { email, password }
        console.log(user);
        logIn(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('Logged in Successfully');
                navigate('/')
      
            })
            .catch(error => {
                const errorMessage = error.message
                console.log(errorMessage);
                setloggedinError(errorMessage)
            })

    }
    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>

            <div className="my-10">
                <h1 className="text-center text-3xl font-bold">Login Here</h1>
                <div className="card w-full mx-auto max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control pb-0">
                            <label className="label">
                                <span className="label-text font-medium">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Your email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value="Login" />
                        </div>
                    </form>
                    <div className="px-8 pb-3 font-semibold text-red-600">
                        {
                            loggedinError ? <span>{loggedinError}</span> : ''
                        }
                    </div>
                    <div className="form-control px-8">
                       <button onClick={handleGoogleLogin} className="btn btn-primary">Login With Google</button>
                    </div>
                    <div className="px-8 text-center pb-3 pt-2 font-semibold">
                        <p>New to here? <Link to="/register" className=" text-green-600 font-bold"> SignUp Now</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;