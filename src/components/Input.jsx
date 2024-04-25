import { useState } from 'preact/hooks';

export default function Input({ label, name, placeholder }) {
  const [value, setValue] = useState("");
  function handleInputChange(e) {
    setValue(e.currentTarget.value)
  }
  return (
    <>
      <label for={name}>{label}</label>
      <input id={name} name={name} placeholder={placeholder} type="text" onInput={handleInputChange} value={value} />
    </>
  )
}