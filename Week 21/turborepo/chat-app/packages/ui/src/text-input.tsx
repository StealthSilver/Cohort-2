interface PropType{
    placeholder: string;
}

export function TextInput({
placeholder,
}: PropType) { return <input
        type="text"
        placeholder="Enter room ID"
        style={{
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid gray",
            outline: "none",
        }}
    />
}