import { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AddJobs = () => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const handleAddjobs = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const jobTitle = form.jobTitle.value;
        const minimumPrice = form.minimumPrice.value;
        const deadline = form.deadline.value;
        const category = form.category.value;
        const maximumPrice = form.maximumPrice.value;
        const description = form.description.value;
        const addUser = {
            email,
            jobTitle,
            minimumPrice,
            deadline,
            category,
            maximumPrice,
            description,

        }
        console.log(addUser);
        fetch("http://localhost:5000/api/v1/postjob", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addUser)

        })
            .then(res => {
                res.json()
                // reset()
            })
            .then(data => {
                console.log(data);
                toast.success('job post successfully')
                navigate('/mypostedjob')
            })
    }
    return (
        <div>
            <h1 className="text-center text-3xl font-bold mt-3">Add A Job</h1>
            <div className="card flex-shrink-0 w-full max-w-5xl mx-auto shadow-2xl bg-base-100">
                <form onSubmit={handleAddjobs} className="card-body">
                    <div className=" grid grid-cols-2 gap-5">

                        <div className="">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email of the employer</span>
                                </label>
                                <input type="email" name="email" defaultValue={user?.email} disabled placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Job title</span>
                                </label>
                                <input type="text" name="jobTitle" placeholder="Job title" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"> Minimum price</span>
                                </label>
                                <input type="text" name="minimumPrice" placeholder="Minimum price" className="input input-bordered" required />
                            </div>
                        </div>
                        <div>



                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Deadline</span>
                                </label>
                                <input type="date" name="deadline" placeholder="Deadline" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Category-these</span>
                                </label>
                                <select name="category" className="select select-primary w-full" required>
                                    <option disabled selected>Choose a category..</option>
                                    <option>web development</option>
                                    <option>graphic design</option>
                                    <option>digital marketing</option>
                         
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"> Maximum price</span>
                                </label>
                                <input type="text" name="maximumPrice" placeholder="Maximum price" className="input input-bordered" required />
                            </div>



                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"> Description</span>
                        </label>
                        <input type="text" name="description" placeholder="Description" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Add job button</button>
                    </div>
                </form>
            </div>
        </div>


    );
};

export default AddJobs;