
const WorkingProces = () => {
    const data = [
        {
            "id": "1",
            "title": "Research",
            "img": "https://i.ibb.co/hW14kdQ/download.jpg"
        },
        {
            "id": "2",
            "title": "Strategy",
            "img": "https://i.ibb.co/K0RsHC9/images.jpg"
        },
        {
            "id": "3",
            "title": "Development",
            "img": "https://i.ibb.co/RD9zH3M/results-group-finance-account-success-analyst.jpg"
        },
        {
            "id": "4",
            "title": "Optimization",
            "img": "https://i.ibb.co/VLPhrg1/team-work-process-young-business-managers-crew-working-with-new-startup-project-laptop-wood-table-ty.jpg"
        }
    ]

    return (
        <div className=" my-20">
            <h1 className="text-center text-3xl font-bold py-3">Our Working Process</h1>
            <p className="text-center text-base text-gray-700 mb-8 max-w-2xl mx-auto">At our organization, our working process is efficient, collaborative, and structured. We prioritize planning, open communication, and excellence, ensuring successful project delivery and client satisfaction.</p>
            <div className="grid grid-cols-4 gap-3">

                {
                    data.map((item) => (
                        <div key={item.id} >
                            <div className="">
                                <figure><img src={item.img} className="w-full" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {item.title}
                                    </h2>
                                </div>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default WorkingProces;
