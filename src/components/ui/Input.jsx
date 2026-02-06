const Input = ({label, state, setState, type = "text"}) => {
  
  return (
    <div>
        <label className='block text-xs font-medium text-gray-600 mb-1'>
          {label}
        </label>
        <input
         type={type}
         placeholder={label}  
        value={state}
        onChange={(e) => setState(e.target.value)}
        className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"/>
    </div>
  )
}

export default Input