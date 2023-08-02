import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'

const UpdateProduct = () => {
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [company, setCompany] = React.useState('');
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getProductDetails();
    }, [])

    const getProductDetails = async () => {
        console.warn(params)
        let result = await fetch(`http://localhost:5000/product/${params.id}`,{
            headers:{
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company)
    }

    const updateProduct = async () => {
        console.warn(name, price, category, company)
        let result = await fetch(`http://localhost:5000/product/${params.id}`,{
          method:'Put',
          body:JSON.stringify({name,price,category,company}),
          headers:{
              "Content-Type":"application/json",
              authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
          }
        })
        result = await result.json();
        console.log(result)
        if (result) {
            navigate('/')
        }

    }

    return (
        <div className='product'>
        <h1 className=' font-bold text-xl text-start mt-7 ml-5 font-serif'>Add product</h1>
        <input type="text" onChange={(e)=>{setName(e.target.value)}} value={name} placeholder='Enter product name' className='inputbox' />
        
        <input type="text" onChange={(e)=>{setPrice(e.target.value)}} value={price} placeholder='Enter product price ' className='inputbox' />
        
        <input type="text" onChange={(e)=>{setCategory(e.target.value)}} value={category} placeholder='Enter product category' className='inputbox' />
        
        <input type="text" onChange={(e)=>{setCompany(e.target.value)}} value={company} placeholder='Enter product company' className='inputbox' />
       
        <button onClick={updateProduct} className='addbutton'>Update product</button>
        </div>
    )
}

export default UpdateProduct;