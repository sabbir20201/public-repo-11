
const Accordion = () => {
    return (
        <div className=" my-12">
        <h1 className="text-center text-4xl font-bold pb-5">FAQ</h1>
            <p className="text-center pb-10">Answers to common questions about our digital marketing and design services</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div>
            <img src="https://i.ibb.co/k973rxz/istockphoto-1475759329-2048x2048.jpg" />
            </div>
            <div className="grid gap-5 ">
                <div className="collapse collapse-plus bg-base-200 rounded-lg ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500 transition duration-300 ease-in-out">
                    <input type="radio" name="my-accordion-3" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                       How Can Graphic Design Benefit My Brand?
                    </div>
                    <div className="collapse-content">
                        <p>Explain the impact of graphic design on branding and marketing.
                        </p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200 rounded-lg ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500 transition duration-300 ease-in-out">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                    Do You Provide Custom Design Solutions?
                    </div>
                    <div className="collapse-content">
                        <p>Describe your approach to creating custom designs tailored to clients.
                        </p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200 rounded-lg ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500 transition duration-300 ease-in-out">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                    How Can I Request a Quote for Services?
                    </div>
                    <div className="collapse-content">
                        <p>Explain how potential clients can request a quote or consultation. </p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200 rounded-lg ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500 transition duration-300 ease-in-out">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                    Why is Digital Marketing Important?                    </div>
                    <div className="collapse-content">
                        <p>Discuss the significance of digital marketing in today's business landscape </p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200 rounded-lg ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500 transition duration-300 ease-in-out">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                    Why is Digital Marketing Important?                    </div>
                    <div className="collapse-content">
                        <p>Discuss the significance of digital marketing in today's business landscape </p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Accordion;