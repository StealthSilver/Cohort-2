interface PropType {
    placeholder: string;
    size: "big" | "small",
    
}

export function TextInput({
    placeholder, size, 
}: PropType) {
    return <input
       
        placeholder={placeholder}
        style={{
            padding: size === "big" ? 20 : 10,
            margin: size === "small" ? 10 : 5,
            borderRadius: "4px",
            border: "1px solid gray",
            outline: "none",
        }}
    />
}