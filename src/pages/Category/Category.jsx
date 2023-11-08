import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Category = () => {

    const [categores, setCategores] = useState([])
    const [categoryDetails, setcategoryDetails] = useState([])
    const [filteredDigitalMarketing, setFilteredDigitalMarketing] = useState([])
    const [filteredGraphicDesign, setFilteredGraphicDesign] = useState([])
    const [filteredWebDesign, setFilteredWebDesign] = useState([])


    console.log(filteredGraphicDesign);
    useEffect(() => {
        fetch('http://localhost:5000/api/v1/category')
            .then(res => res.json())
            .then(data => setCategores(data))
    }, [])
    useEffect(() => {
        fetch("http://localhost:5000/api/v1/jobs")
            .then(res => res.json())
            .then(data => setcategoryDetails(data))
    }, [])

    useEffect(() => {
        const graphicDesign = categoryDetails.filter((item) => item.category === "graphic design")
        setFilteredGraphicDesign(graphicDesign)
        const digitalMarketing = categoryDetails.filter((item) => item.category === "digital marketing")
        setFilteredDigitalMarketing(digitalMarketing)
        const webDesign = categoryDetails.filter((item) => item.category === "web development")
        setFilteredWebDesign(webDesign)
    }, [categoryDetails])
    return (
        <div className=' py-12'>
            <h1 className='text-center text-4xl font-bold pb-10 '>BrowseByCategory </h1>
            <div className=''>

                <Tabs>
                    <TabList>
                        {
                            categores.map(item => (
                                <Tab key={item._id}>
                                    <Link> {item.category}</Link>
                                    <Link> {item.jobTitle}</Link>
                                </Tab>
                            ))
                        }

                    </TabList>
                    <div>
                        <TabPanel>
                            <div className='grid grid-cols-3 gap-5'>
                                {
                                    filteredWebDesign.map(item => (
                                        <div className="border border-black text-start bg-base-100">
                                            <div className="card-body items-start text-start">
                                                <p><span className="font-bold text-xl">Job Title :</span> <span className="text-xl font-semibold">{item.jobTitle}</span></p>
                                                <p><span className="font-bold text-xl"> Price : $</span><span className="text-xl font-semibold">{item.minimumPrice} - ${item.maximumPrice}</span></p>
                                                <p><span className="font-bold text-xl">Deadline :</span> <span className="text-xl font-semibold">{item.deadline}</span></p>
                                                <p><span className="font-bold text-xl">description :</span> <span className="text-xl font-semibold">{item.description}</span></p>
                                                <div className="card-actions">
                                                    <Link to={`/details/${item._id}`}>
                                                        <button className="btn btn-primary">Bid Now</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </TabPanel>
                    </div>

                    <TabPanel>
                        <div className='grid grid-cols-3 gap-5'>
                            {
                                filteredGraphicDesign.map(item => (
                                    <div className="border border-black text-start bg-base-100">
                                        <div className="card-body items-start text-start">
                                            <p><span className="font-bold text-xl">Job Title :</span> <span className="text-xl font-semibold">{item.jobTitle}</span></p>
                                            <p><span className="font-bold text-xl">Minimum Price :</span> <span className="text-xl font-semibold">{item.minimumPrice}</span></p>
                                            <p><span className="font-bold text-xl">Deadline :</span> <span className="text-xl font-semibold">{item.deadline}</span></p>
                                            <p><span className="font-bold text-xl">description :</span> <span className="text-xl font-semibold">{item.description}</span></p>
                                            <div className="card-actions">
                                                <Link>
                                                    <button className="btn btn-primary">Bid Now</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </TabPanel>


                    <TabPanel>
                        <div className='grid grid-cols-3 gap-5'>

                            {
                                filteredDigitalMarketing.map(item => (
                                    <div className="border border-black text-start bg-base-100">
                                        <div className="card-body items-start text-start">
                                            <p><span className="font-bold text-xl">Job Title :</span> <span className="text-xl font-semibold">{item.jobTitle}</span></p>
                                            <p><span className="font-bold text-xl">Minimum Price :</span> <span className="text-xl font-semibold">{item.minimumPrice}</span></p>
                                            <p><span className="font-bold text-xl">Deadline :</span> <span className="text-xl font-semibold">{item.deadline}</span></p>
                                            <p><span className="font-bold text-xl">description :</span> <span className="text-xl font-semibold">{item.description}</span></p>
                                            <div className="card-actions">
                                                <Link>
                                                    <button className="btn btn-primary">Bid Now</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </TabPanel>

                </Tabs>
            </div>
        </div>

    );
};

export default Category;