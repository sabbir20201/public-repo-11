import { Link, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  
    return (
        <div className="grid justify-center items-center">
         <img src="https://i.ibb.co/3MjjG7H/images-1.jpg" className=" max-w-3xl" />
                <button className="btn"><Link to="/">Home</Link></button>
        </div>
    );
};

export default ErrorPage;