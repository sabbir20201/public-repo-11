import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext, useState } from "react";
import toast from "react-hot-toast";

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
    const navigate = useNavigate();
    // console.log(createUser);
    const handleRegister = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
     
        if (password.length < 6) {
            setRegisterError('Error: Password shoud be at least six characters or longer')
            return
        } else if (!/[A-Z]/.test(password)){
            setRegisterError('Error: Password shoud be at least one uppercase')
            return
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('Register Successfully');
                navigate('/')
            })
            .catch(error => {
                const errorMessage = error.message
                setRegisterError(errorMessage)
            })

    }
    return (
        <div className="my-10">
            <h1 className="text-center text-3xl font-bold">Register Here</h1>
            <div className="card w-full mx-auto max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Your name " className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium">PhotoUrl</span>
                        </label>
                        <input type="text" name="photoUrl" placeholder="PhotoUrl" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
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
                        registerError ? <span>{registerError}</span> : ''
                    }
                </div>
                <div className="px-8 pb-3 font-semibold">
                    <p>Already have an account? <Link to="/login" className=" text-green-600 font-bold">Login</Link></p>
                </div>
            </div>
        </div>

    );
};

export default Register;