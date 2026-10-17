import React, { useState } from  'react'

const ProductUpdate = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', price: 50000 },
    { id: 2, name: 'Mobile', price: 20000 },
    { id: 3, name: 'Keyboard', price: 1500 }
  ])

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [editId, setEditId] = useState(null)

  const handleEdit = (product) => {
    setEditId(product.id)
    setName(product.name)
    setPrice(String(product.price))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setProducts(
      products.map((product) =>
        product.id === editId
          ? {
              ...product,
              name: name,
              price: Number(price)
            }
          : product
      )
    )

    setEditId(null)
    setName('')
    setPrice('')
  }

  return (
    <div className="mx-auto mt-10 max-w-lg rounded-lg bg-white p-6 shadow-lg">
      <h1 className="mb-5 text-center text-2xl font-bold text-blue-600">
        Product Management
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded border p-2"
          required
        />

        <input
          type="number"
          placeholder="Product Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full rounded border p-2"
          min="0"
          required
        />

        <button
          type="submit"
          disabled={editId === null}
          className="w-full rounded bg-green-600 p-2 text-white disabled:bg-gray-400"
        >
          Update Product
        </button>
      </form>

      <h2 className="mb-3 mt-6 text-xl font-bold">
        Product List
      </h2>

      {products.map((product) => (
        <div
          key={product.id}
          className="mb-3 flex items-center justify-between rounded border p-3"
        >
          <div>
            <h3 className="font-bold">{product.name}</h3>
            <p>Price: ₹{product.price}</p>
          </div>

          <button
            onClick={() => handleEdit(product)}
            className="rounded bg-blue-600 px-3 py-2 text-white"
          >
            Edit
          </button>
        </div>
      ))}
    </div>
  )
}

export default ProductUpdate