
type Proptype={
    placeholder:string;
    size:"big"|"small";
    // onChange:React.ChangeEventHandler<HTMLInputElement>; 
}

export function TextInput({placeholder,size}:Proptype) {
    return <input placeholder={placeholder} style={{ 

        padding:size==="big"?20:10,
        margin:size==="big"?20:10,
        borderColor:'black',
        borderWidth:1
    }}></input>
}