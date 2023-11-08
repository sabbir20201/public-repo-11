import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const UpdateJob = () => {

    const jobData = useLoaderData()
    const { email, jobTitle, _id, minimumPrice, deadline, category, maximumPrice, description } = jobData

    // console.log(jobData);
    const handleUpdatejobs = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const jobTitle = form.jobTitle.value;
        const minimumPrice = form.minimumPrice.value;
        const deadline = form.deadline.value;
        const category = form.category.value;
        const maximumPrice = form.maximumPrice.value;
        const description = form.description.value;
        const updateUser = {
            email,
            jobTitle,
            minimumPrice,
            deadline,
            category,
            maximumPrice,
            description,

        }
        // console.log(updateUser);
        fetch(`http://localhost:5000/api/v1/updatejob/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)

        })
            .then(res => {
                res.json()
                // reset()
            })
            .then(data => {
                console.log(data);
                toast.success('Updated successfully')
                // navigate('/mypostedjob')
            })
    }


    return (
        <div>
        <div>
        <h1 className="text-center text-3xl font-bold mt-3">Add A Job</h1>
        <div className="card flex-shrink-0 w-full max-w-5xl mx-auto shadow-2xl bg-base-100">
            <form onSubmit={handleUpdatejobs} className="card-body">
                <div className=" grid grid-cols-2 gap-5">

                    <div className="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email of the employer</span>
                            </label>
                            <input type="email" name="email" disabled placeholder="email" defaultValue={email} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job title</span>
                            </label>
                            <input type="text" name="jobTitle" defaultValue={jobTitle} placeholder="Job title" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Minimum price</span>
                            </label>
                            <input type="text" name="minimumPrice" defaultValue={minimumPrice} placeholder="Minimum price" className="input input-bordered" required />
                        </div>
                    </div>
                    <div>



                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Deadline</span>
                            </label>
                            <input type="date" name="deadline" defaultValue={deadline} placeholder="Deadline" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category-these</span>
                            </label>
                            <select name="category" defaultValue={category} className="select select-primary w-full" required>
                                <option disabled selected>Choose a category..</option>
                                <option>Web Development</option>
                                <option>Graphic Design</option>
                                <option>Digital Marketing</option>
                     
                            </select>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Maximum price</span>
                            </label>
                            <input type="text" name="maximumPrice" defaultValue={maximumPrice} placeholder="Maximum price" className="input input-bordered" required />
                        </div>



                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text"> Description</span>
                    </label>
                    <input type="text" name="description" defaultValue={description} placeholder="Description" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Update job</button>
                </div>
            </form>
        </div>
    </div>
        </div>
    );
};

export default UpdateJob;