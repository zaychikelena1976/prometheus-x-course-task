import React from "react";
export default function BookDescription({ description, id }) {
  return (
    <p>
      <span style={{ fontSize: 18, fontWeight: 500 }}>Book description:</span>
      {description}
    </p>
  );
}