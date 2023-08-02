import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    },[]);

    const getProducts = async () => {
        let result = await fetch('http://localhost:5000/products',{
            headers:{
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        })
        result = await result.json();
        setProducts(result);
    }

    const deleteProduct = async (id) => {
        console.warn(id)
        let result = await fetch(`http://localhost:5000/product/${id}`, {
            method: "Delete",
            headers:{
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        if (result) {
            getProducts();
        }
    }

    const searchHandle = async (event)=>{
        let key = event.target.value;
        if(key){
            let result=await fetch(`http://localhost:5000/search/${key}`,{
                headers:{
                    authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            })
            result=await result.json();
            if(result)
                setProducts(result)
        }
        else{
            getProducts();
        }
    }

    return (
        <div className="product-list">
            <h3 className=' font-semibold m-5 text-3xl'>Product List</h3>
            <input type="" className=' bg-emerald-50 m-4 rounded-lg border-2 border-slate-400 p-1 w-1/4' placeholder='Search Product'
            onChange={searchHandle}
             />
            <ul>
                <li>S. No.</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Company</li>
                <li>Operation</li>

            </ul>
            {
                products.length>0 ? products.map((item, index) =>
                    <ul key={item._id}>
                        <li>{index + 1}</li>
                        <li>{item.name}</li>
                        <li>{item.price}</li>
                        <li>{item.category}</li>
                        <li>{item.company}</li>
                        <li>
                            <button onClick={() => deleteProduct(item._id)} className='border-2 border-slate-600 w-1/3  text-sm rounded-md bg-slate-400'>Delete</button>
                            <Link to={"/update/"+item._id} className=' border-2 ml-2 p-0.5 rounded-md bg-slate-700  text-slate-300'>Update </Link>
                            </li>

                    </ul>
                )
                :<h1 className=' font-semibold text-red-700 m-5'>*No products Found</h1>
            }
        </div>
    )
}

export default ProductList;