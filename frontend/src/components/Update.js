import React,{useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';


const UpdatePro = ()=>{
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setComapany] = useState('');
    const [error,setError] = useState(false);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(()=>{

       getProductDetails();
    },[]);

   const getProductDetails = async ()=>{
    let result = await fetch(`http://localhost:8000/products/${params.id}`);
    result = await result.json();
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setComapany(result.company);
   }


   const updateBtn = async ()=>{
 
    
    console.log(name,price,category,company);
    let update = await fetch(`http://localhost:8000/product/${params.id}`,{
        method:'PUT',
        body: JSON.stringify({name,price,category,company}),
        headers:{
            'Content-Type':'application/json'}
        })
        update = await update.json();
        console.log(update);
        if(update){
            navigate('/');
        }
    }

return(
        <div>
            <h1>Update</h1>
            <h3>Name</h3>
            <input placeholder="Enter the Name" type="text" className="inputBox" value={name} onChange={(e) => { setName(e.target.value); }}>
            </input>
            {error &&!name&&<span className='inputValide'>Enter the name</span>}

            <h3>Price</h3>
            <input placeholder="Enter Price" type="text" className="inputBox" value={price} onChange={(e) => { setPrice(e.target.value) }}>
            </input>
            {error &&!price&&<span className='inputValide'>Enter the price</span>}

            <h3>Category</h3>
            <input className="inputBox" placeholder="Enter Category" type="text" value={category} onChange={(e) => { setCategory(e.target.value) }}>
            </input>
            {error &&!category&&<span className='inputValide'>Enter the category</span>}
            
            <h3>Company</h3>
            <input className="inputBox" placeholder="Enter the Company Name" type="text" value={company} onChange={(e) => { setComapany(e.target.value) }}>
            </input>
            {error &&!company&&<span className='inputValide'>Enter the company</span>}

            <button className="btn" onClick={updateBtn}>Update Product
            </button>
        </div>
    )
}


export default UpdatePro;
