
import { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Category = () => {

    const [categores, setCategores] = useState([])
    // console.log(categores);

    const data = useLoaderData()
    console.log(data);

    useEffect(()=>{
        fetch('http://localhost:5000/api/v1/category')
        .then(res => res.json())
        .then(data => setCategores(data))
    },[])


    return (
        <div className=' my-20'>
            <h1 className="text-4xl text-center font-bold">Browse By Category</h1>
            <Tabs>
            <TabList>
            {
                categores?.map(category => (
                    <Tab key={category._id}>
                    <Link to={`/${category.category}`}>  {category.category}</Link>
                 
                    </Tab>
                ))
            }
         
            </TabList>
        
            <TabPanel>
                {
                    data?.map(item => <li>{item?.jobTitle}</li>)
                }
            </TabPanel>
         
          
          </Tabs>
        </div>
    );
};

export default Category;