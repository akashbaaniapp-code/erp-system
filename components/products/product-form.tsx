"use client";

import { useState } from "react";

export default function ProductForm() {
  const [form, setForm] = useState({
    name: "",
    sku: "",
    category: "",
    quantity: 0,
    price: 0,
    description: "",
    userId: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      alert("Product Added");
      setForm({
        name: "",
        sku: "",
        category: "",
        quantity: 0,
        price: 0,
        description: "",
        userId: "",
      });
    } else {
      alert("Failed");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-xl border p-6"
    >
      <input
        className="w-full rounded border p-2"
        placeholder="Product Name"
        value={form.name}
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
      />

      <input
        className="w-full rounded border p-2"
        placeholder="SKU"
        value={form.sku}
        onChange={(e) =>
          setForm({ ...form, sku: e.target.value })
        }
      />

      <input
        className="w-full rounded border p-2"
        placeholder="Category"
        value={form.category}
        onChange={(e) =>
          setForm({ ...form, category: e.target.value })
        }
      />

      <input
        className="w-full rounded border p-2"
        type="number"
        placeholder="Quantity"
        value={form.quantity}
        onChange={(e) =>
          setForm({ ...form, quantity: Number(e.target.value) })
        }
      />

      <input
        className="w-full rounded border p-2"
        type="number"
        placeholder="Price"
        value={form.price}
        onChange={(e) =>
          setForm({ ...form, price: Number(e.target.value) })
        }
      />

      <textarea
        className="w-full rounded border p-2"
        placeholder="Description"
        value={form.description}
        onChange={(e) =>
          setForm({ ...form, description: e.target.value })
        }
      />

      <button
        className="rounded bg-black px-5 py-2 text-white"
        type="submit"
      >
        Add Product
      </button>
    </form>
  );
}
