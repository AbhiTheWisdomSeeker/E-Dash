import React, { useState } from 'react';

const Products = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setComapany] = useState('');
    const [error,setError] = useState(false);

    const AddProduct = async () => {

        if(!name||!price||!category||!company){
            setError(true);
            return false;
        }


        const userID = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch('http://localhost:8000/Product', {
            method: 'POST',
            body: JSON.stringify({ name, price, category, company }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        result = await result.json()

        console.log(result);
        
    }






    return (

        <div>
            <h1>Add Product</h1>

            <input placeholder="Enter the Name" type="text" className="inputBox" value={name} onChange={(e) => { setName(e.target.value); }}>
            </input>
            {error &&!name&&<span className='inputValide'>Enter the name</span>}

            <input placeholder="Enter Price" type="text" className="inputBox" value={price} onChange={(e) => { setPrice(e.target.value) }}>
            </input>
            {error &&!price&&<span className='inputValide'>Enter the price</span>}

            <input className="inputBox" placeholder="Enter Category" type="text" value={category} onChange={(e) => { setCategory(e.target.value) }}>
            </input>
            {error &&!category&&<span className='inputValide'>Enter the category</span>}

            <input className="inputBox" placeholder="Enter the Company Name" type="text" value={company} onChange={(e) => { setComapany(e.target.value) }}>
            </input>
            {error &&!company&&<span className='inputValide'>Enter the company</span>}

            <button className="btn" onClick={AddProduct} >Add Product
            </button>
        </div>
    )

}

export default Products;


