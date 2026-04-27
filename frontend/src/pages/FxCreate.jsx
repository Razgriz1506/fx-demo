import React, { useState } from "react";
import { createFxRequest } from "../api";
import { useNavigate } from "react-router-dom";

export default function FxCreate() {
  const [customer_name, setCustomerName] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!customer_name || !currency || !amount) {
      setError("All fields are required");
      return;
    }
    try {
      await createFxRequest({
        customer_name,
        currency,
        amount: Number(amount),
      });
      navigate("/fx");
    } catch (err) {
      setError("Failed to create request");
    }
  };

  return (
    <div>
      <h3>New FX Request</h3>
      <form onSubmit={handleSubmit} style={{ maxWidth: 300 }}>
        <div>
          <label>Customer Name</label>
          <input
            style={{ width: "100%" }}
            value={customer_name}
            onChange={(e) => setCustomerName(e.target.value)}
          />
        </div>
        <div style={{ marginTop: 10 }}>
          <label>Currency</label>
          <input
            style={{ width: "100%" }}
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          />
        </div>
        <div style={{ marginTop: 10 }}>
          <label>Amount</label>
          <input
            type="number"
            style={{ width: "100%" }}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        {error && (
          <div style={{ color: "red", marginTop: 10 }}>{error}</div>
        )}
        <button style={{ marginTop: 15 }} type="submit">
          Create
        </button>
      </form>
    </div>
  );
}