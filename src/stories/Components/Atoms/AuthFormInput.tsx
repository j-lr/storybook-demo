import React, { useRef, useEffect } from "react";
import TextField from "@mui/material/TextField";

interface AuthFormInputProps {
    type: "password" | "email";
    defaultLabel: string;
    onChangeListener: (value: string) => void;
    minLength?: number;
    autoFocus?: boolean;
    errorMessage?: string;
}

/** Atomic UI component for accepting user auth input */
const AuthFormInput: React.FC<AuthFormInputProps> = ({
    type = "email",
    defaultLabel = "e-mail",
    autoFocus = false,
    onChangeListener,
    errorMessage = "",
}) => {
    const isError = !!errorMessage && errorMessage.length > 0;
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autoFocus && inputRef.current) {
            inputRef.current.focus();
        }
    }, [autoFocus]);

    return (
        <TextField
            fullWidth
            autoFocus={autoFocus}
            inputRef={inputRef}
            type={type}
            label={errorMessage ? errorMessage : defaultLabel}
            defaultValue={isError ? " " : ""}
            error={isError}
            onChange={(e) => onChangeListener(e.target.value)}
            variant="outlined"
        />
    );
};

export default AuthFormInput;
