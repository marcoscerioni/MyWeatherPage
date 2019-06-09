import React from "react";

/**
 * @return {null}
 */
export default function ErrorMessage({ visible, message }) {
  if (!visible) {
    return null;
  }
  return (
    <div className="Error-container Rounded-borders">
      <h2 className="Error-message">{message}</h2>
    </div>
  );
}
