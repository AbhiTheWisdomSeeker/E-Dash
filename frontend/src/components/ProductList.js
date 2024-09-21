import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])

    useEffect(() => {
        getProducts();
    }, []);
    
    const getProducts = async () => {
        let result = await fetch('http://localhost:8000/products', { 
            headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
    
        console.log(result); // Log the result to inspect its structure
        
        if (Array.isArray(result)) {
            setProducts(result);  // Only set the products if it's an array
        } else {
            console.error("API did not return an array:", result);
            setProducts([]);  // Set an empty array in case of error or non-array result
        }
    };
    

    let deleteProduct = async (id) => {
        let result = await fetch(`http://localhost:8000/products/${id}`, {
            method: "DELETE",
            headers:{
                authorization: `bearer ${JSON.parse(localStorage.getItem('auth'))}`
            }
        });
        result = await result.json();
        if (result) {
            alert("Data Deleted");
            getProducts();
        }


    }
    const searchBox = async (event) => {
        let key = event.target.value;
    
        // If the search box is cleared (i.e., key is empty), fetch all products
        if (key === "") {
            getProducts(); // Call getProducts to fetch all items
        } else {
            let result = await fetch(`http://localhost:8000/search/${key}`,{
                headers:{
                   authorization: `bearer ${JSON.parse(localStorage.getItem('auth'))}`
                }}
            );
            result = await result.json();
    
            if (result) {
                setProducts(result); // Update the state with the filtered products
            }
        }
    };
    
  

    return (
<>
        
        <div className='product-list' >
        <input className="search-box" placeholder='Search' type='text' onChange={searchBox}></input>
            <h1>Product List</h1>
            <ul >
                <li id='Head'>S.no</li>
                <li id='Head'>Name</li>
                <li id='Head'>Price</li>
                <li id='Head'>Category</li>
                <li id='Head'>Company</li>
                <li id='Head'>Operation</li>
            </ul>
            { products.map((item, index) =>
                <ul key={item._id}>
                    <li>{index + 1}</li>
                    <li>{item.name}</li>
                    <li>{item.price}</li>
                    <li>{item.category}</li>
                    <li>{item.company}</li>
                    <li><button onClick={() => deleteProduct(item._id)}>Delete</button>
                    <Link to={"/Update/"+(item._id)}><button>Update</button></Link></li>
            

                </ul>
            )
            }
        </div></>
    )

}

export default ProductList;