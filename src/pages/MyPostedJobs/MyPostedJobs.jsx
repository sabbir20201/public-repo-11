import { useContext } from "react";
import { useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyPostedJobCards from "./MyPostedJobCards";
import Swal from "sweetalert2";

const MyPostedJobs = () => {
    const { user } = useContext(AuthContext);
    const [jobs, setJobs] = useState([])
    // console.log(jobs);
    const url = `http://localhost:5000/api/v1/personaljob?email=${user.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setJobs(data))


    }, [])

    const handleDelte = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/api/v1/job/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your JOB has been deleted.",
                                icon: "success"
                            });
                            const remaining = jobs.filter(job => job._id !== _id);
                            setJobs(remaining)
                        }
                    })
            }
        });
    }
    return (
        <div className="my-12">

            <div className="gap-5 grid grid-cols-1 lg:grid-cols-2">
                {
                    jobs.map(job => <MyPostedJobCards key={job._id} job={job} handleDelte={handleDelte}></MyPostedJobCards>)
                }
            </div>
        </div>
    );
};

export default MyPostedJobs;