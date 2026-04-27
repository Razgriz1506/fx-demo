import React, { useEffect, useState } from "react";
import { getFxRequests } from "../api";
import { Link } from "react-router-dom";

export default function FxList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getFxRequests().then(setItems);
  }, []);

  return (
    <div>
      <h3>FX Requests</h3>
      {items.length === 0 && <p>No requests yet.</p>}
      <ul>
        {items.map((r) => (
          <li key={r.id}>
            <Link to={`/fx/${r.id}`}>
              {r.reference_no} — {r.customer_name} — {r.currency} {r.amount}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}