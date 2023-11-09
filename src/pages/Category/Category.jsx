import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Category = () => {

    const [selectedCategory, setSelectedCategores] = useState([])
    const [categoryDetails, setcategoryDetails] = useState([])




    useEffect(() => {
        fetch("http://localhost:5000/api/v1/category")
            .then(res => res.json())
            .then(data => setSelectedCategores(data))
    }, [])

    useEffect(() => {
        if (selectedCategory.length > 0) {
            fetchCategoryDetails(selectedCategory[0].category)
        }
    }, [selectedCategory])


    const fetchCategoryDetails = (category) => {
        fetch(`http://localhost:5000/api/v1/jobs?category=${category}`)
            .then(res => res.json())
            .then(data => setcategoryDetails(data))
            .catch((error) => {
                console.error(`error fatching ${category} job details`, error)
            });
    };
    return (
        <div>
            <Tabs>
                <TabList>
                    {
                        selectedCategory.map((category) => (
                            <Tab key={category._id} onClick={() => fetchCategoryDetails(category.category)}>
                                {category.category}
                            </Tab>
                        ))}
                </TabList>
                {
                    selectedCategory.map((category) => (
                        <TabPanel key={category._id}>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                                {
                                    categoryDetails.map((item) => (
                                        <div key={item._id}>
                                            <div className="card-body items-start text-start border-2 border-indigo-300 card transition duration-300 ease-in-out shadow-lg group block rounded-lg p-6 bg-white ring-1 ring-slate-900/5 space-y-3 hover:bg-sky-400 hover:ring-sky-400">
                                                <p><span className="font-bold text-xl">Job Title :</span> <span className="text-xl font-semibold">{item.jobTitle}</span></p>
                                                <p><span className="font-bold text-xl">Price : $</span><span className="text-xl font-semibold">{item.minimumPrice}-{item.maximumPrice}</span></p>
                                                <p><span className="font-bold text-xl">Deadline :</span> <span className="text-xl font-semibold">{item.deadline}</span></p>
                                                <p><span className="font-bold text-xl">description :</span> <span className="text-xl font-semibold">{item.description}</span></p>
                                                <div className="card-actions">

                                                    <Link to={`/details/${item._id}`}>
                                                        <button className="btn btn-primary">bid now</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </TabPanel>
                    ))
                }

            </Tabs>
        </div>


    );
};

export default Category;