import { Link } from "react-router-dom";




const MyPostedJobCards = ({ job, handleDelte }) => {
    const { email, jobTitle, _id, minimumPrice, deadline, category, maximumPrice, description } = job

  
    return (
        <div>
            <div className="card transition duration-300 ease-in-out max-w-3xl border border-black mx-auto text-start shadow-lg group block rounded-lg p-6 bg-white ring-1 ring-slate-900/5 space-y-3 hover:bg-sky-400 hover:ring-sky-400">
                <div className="card-body items-start text-start">
                    <p><span className="font-bold text-xl">Email :</span> <span className="text-xl font-semibold">{email}</span></p>
                    <p><span className="font-bold text-xl">Job Title :</span> <span className="text-xl font-semibold">{jobTitle}</span></p>
                    <p><span className="font-bold text-xl">Minimum Price :</span> <span className="text-xl font-semibold">{minimumPrice}</span></p>
                    <p><span className="font-bold text-xl">Deadline :</span> <span className="text-xl font-semibold">{deadline}</span></p>
                    <p><span className="font-bold text-xl">Category :</span> <span className="text-xl font-semibold">{category}</span></p>
                    <p><span className="font-bold text-xl">MaximumPrice :</span> <span className="text-xl font-semibold">{maximumPrice}</span></p>
                    <p><span className="font-bold text-xl">description :</span> <span className="text-xl font-semibold">{description}</span></p>
                    <div className="card-actions">
                        <Link to={`/updatejob/${_id}`}>
                            <button className="btn btn-primary">Update</button>
                        </Link>
                        <Link>
                            <button onClick={() => handleDelte(_id)} className="btn btn-primary">delete</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyPostedJobCards;