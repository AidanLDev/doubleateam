import { blogFilter } from 'src/blogSearchStore';

export default function Input({ label, name, placeholder }) {
  function handleInputChange(e) {
    blogFilter.set(e.currentTarget.value);
  }
  return (
    <>
      <label for={name}>{label}</label>
      <input id={name} name={name} placeholder={placeholder} type="text" onInput={handleInputChange} />
    </>
  )
}