import React from 'react';

export default function Input({ name, type = 'text', placeholder, value, onChange, step, required }) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      step={step}
      required={required}
    />
  );
}
