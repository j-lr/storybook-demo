import React, { useEffect, useRef, useState } from "react";

export interface InputProps {
    type?:
        | "text"
        | "password"
        | "email"
        | "number"
        | "tel"
        | "url"
        | "search"
        | "date"
        | "datetime-local"
        | "month"
        | "week"
        | "time"
        | "color";
    placeholder: string;
    initialValue: string;
    minLength?: number;
    maxLength?: number;
    onChangeListener?: (current: string) => void;
}

const Input: React.FC<InputProps> = ({
    type,
    placeholder,
    initialValue,
    onChangeListener,
}) => {
    const [value, setValue] = useState<string>(initialValue);
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (ref.current) ref.current.scrollLeft = ref.current.scrollWidth;
    }, [value]);

    return (
        <input
            ref={ref}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => {
                setValue(e.target.value);
                if (onChangeListener) onChangeListener(e.target.value);
            }}
        />
    );
};

export default Input;
