import React, { useState } from 'react'


export default function AddProducts() {

  // const [formValues, setFormValues] = useState({
  //   name: "",
  //   price: "",
  //   category: "",
  //   company: ""
  // });

  // const [records, setRecords] = useState([]);
  
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setRecords([...records, formValues]);
  //   setFormValues({
  //     name: "",
  //     price: "",
  //     category: "",
  //     company: ""
  //   });
  // };







   const [name,setName]=useState("");
   const [price,setPrice]=useState("");
   const [category,setCategory]=useState("");
   const [company,setCompany]=useState("");
   const [error,setError]=useState(false)
   
    const addProduct=async ()=>{

      if(!name || !price || !company || !category)
        {
            setError(true);
            return false
        }

        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch("http://localhost:5000/add-product", {
            method: "post",
            body: JSON.stringify({ name, price, category, company, userId }),
            headers: {
                "Content-type": "application/json",
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        console.warn(result)
        if(!error){
          setName("")
          setPrice("")
          setCategory("")
          setCompany("")
        }
  }

  return (
    <div className='product'>
      <h1 className=' font-bold text-xl text-start mt-7 ml-5 font-serif'>Add product</h1>
      <input type="text" onChange={(e)=>{setName(e.target.value)}} value={name} placeholder='Enter product name' className='inputbox' />
      {error && !name && <span className=' text-red-700 -mt-8 ml-6 block'>Enter name</span>}
      <input type="text" onChange={(e)=>{setPrice(e.target.value)}} value={price} placeholder='Enter product price ' className='inputbox' />
      {error && !price && <span className=' text-red-700 -mt-8 ml-6 block'>Enter price</span>}
      <input type="text" onChange={(e)=>{setCategory(e.target.value)}} value={category} placeholder='Enter product category' className='inputbox' />
      {error && !category && <span className=' text-red-700 -mt-8 ml-6 block'>Enter category</span>}
      <input type="text" onChange={(e)=>{setCompany(e.target.value)}} value={company} placeholder='Enter product company' className='inputbox' />
      {error && !company && <span className=' text-red-700 -mt-8 ml-6 block'>Enter company</span>}
      <button onClick={addProduct} className='addbutton'>add product</button>
    </div>
  )
}
