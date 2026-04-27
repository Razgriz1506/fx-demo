import React, { useEffect, useState } from "react";
import { getFxRequest } from "../api";
import { useParams } from "react-router-dom";

export default function FxDetails() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    getFxRequest(id).then(setItem);
  }, [id]);

  if (!item) return <p>Loading...</p>;

  return (
    <div>
      <h3>FX Request Details</h3>
      <p><strong>Reference:</strong> {item.reference_no}</p>
      <p><strong>Customer:</strong> {item.customer_name}</p>
      <p><strong>Currency:</strong> {item.currency}</p>
      <p><strong>Amount:</strong> {item.amount}</p>
      <p><strong>Created At:</strong> {item.created_at}</p>
    </div>
  );
}