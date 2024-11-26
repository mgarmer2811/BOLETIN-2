import { useState } from 'react'

export default function ShoppingList() {
    const[products, setProducts] = useState([]);

    function handleAddProduct(newProduct) {
        setProducts([...products,newProduct]);
    }

    function handleEditProduct(oldProduct, newProduct) {
        setProducts(products.map(p => (p === oldProduct ? newProduct : p)));
    }

    function handleDeleteProduct(product) {
        const newProducts = products.filter(p => p !== product);
        setProducts(newProducts);
    }
    
    return(
        <div>
            <AddProduct onAddProduct={handleAddProduct} />
            <ProductList products={products} onEditProduct={handleEditProduct} onDeleteProduct={handleDeleteProduct} />
        </div>
    );
}

function AddProduct({onAddProduct}) {
    const[userInput, setUserInput] = useState('');

    function handleInputChange(e){
        setUserInput(e.target.value);
    }

    function handleAddButton(){
        onAddProduct(userInput);
        setUserInput('');
    }
    
    return(
        <div>
            <input type='text' placeholder='Leche' value={userInput} onChange={handleInputChange} />
            <button onClick={handleAddButton} >Agregar a la lista</button>
        </div>
    );
}

function ProductList({products, onEditProduct, onDeleteProduct}) {
    return(
        <ul>
            {products.map(product => (
                <li key={product}>
                    <Product
                        product={product}
                        onEdit={onEditProduct}
                        onDelete={onDeleteProduct}
                    />
                </li>
            ))}
        </ul>
    );
}

function Product({product, onEdit, onDelete}) {
    const[isEditing, setIsEditing] = useState(false);
    const[editValue, setEditValue] = useState(product);
    let content = null;

    function handleSave() {
        onEdit(product, editValue);
        setIsEditing(false);
    }

    if(isEditing){
        content = (
            <div>
                <input value={editValue} onChange={(e) => setEditValue(e.target.value)} />
                <button onClick={handleSave} >Guardar</button>
            </div>
        );
    }
    else{
        content = (
            <div>
                {product}
                <button onClick={() => setIsEditing(true)} >Editar</button>
            </div>
        );
    }
    
    return(
        <div>
            {content}
            <button onClick={() => onDelete(product)} >Eliminar</button>
        </div>
    );
}