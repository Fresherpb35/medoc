

import { useState } from "react"
import "./index.css"

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', price: 5000 },
    { id: 2, name: 'Phone', price: 1000 },
  ])
   

  const [search, setSearch] = useState("")
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  const addPro = () => {
    if (!name || !price) return;
    setProducts([...products, { id: Date.now(), name, price }]);

    setName("")
    setPrice("")
  }

  const deletePro = (id) => {
    setProducts(products.filter((item) => item.id !== id))
  }

  const filteredPro = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  )

  

  return (
    <div className="max-w-4xl mx-auto p-6">

      <h1 className="text-3xl font-bold text-center mb-6">Product Manager APP</h1>

      {/* Search */}
      <input
        type='text'
        placeholder='Search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-md mx-auto block p-2 border rounded mb-4"
      />

      {/* Add Product */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        <input
          type='text'
          placeholder='Product name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type='number'
          placeholder='Price'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="p-2 border rounded"
        />
        <button
          onClick={addPro}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      {/* Product List */}
      <div className="flex flex-wrap gap-4 justify-center">
        {filteredPro.map((item) => (
          <div key={item.id} className="border p-4 rounded shadow w-48 text-center flex flex-col justify-between">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-700 mb-2">₹ {item.price}</p>
            <button
              onClick={() => deletePro(item.id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App