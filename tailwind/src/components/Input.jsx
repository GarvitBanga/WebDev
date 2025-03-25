export const Input=({type,placeholder,onClick})=>{
    return <span className={`rounded-2xl text-4xl px-2 py-2 text-white cursor-pointerbg-blue-500`} onClick={onClick}>
        <input type={type} placeholder={placeholder} className="bg-blue-500 outline-none"/>
    </span>
}
