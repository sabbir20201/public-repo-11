import { useContext } from "react";
import { useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyPostedJobCards from "./MyPostedJobCards";

const MyPostedJobs = () => {
    const {user } = useContext(AuthContext);
const [jobs, setJobs] = useState([])
// console.log(jobs);
const url = `http://localhost:5000/api/v1/personaljob?email=${user.email}`
useEffect(()=>{
    fetch(url)
    .then(res => res.json())
    .then(data => setJobs(data))


},[])


    return (
        <div className="my-12">
  
        <div className="gap-5 grid">
            {
                jobs.map(job => <MyPostedJobCards key={job._id} job={job}></MyPostedJobCards>)
            }
        </div>
        </div>
    );
};

export default MyPostedJobs;