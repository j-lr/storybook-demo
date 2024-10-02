import { Box, Button, Typography } from "@mui/material";
import AuthFormInput from "../Atoms/AuthFormInput";
import React, { useState } from "react";

/** Login form Template  */
export interface LoginFormTemplateProps {
    onLoginClick: (email: string, password: string) => void;
    onSignUpClick: () => void;
}

const LoginFormTemplate: React.FC<LoginFormTemplateProps> = ({
    onLoginClick,
    onSignUpClick,
}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "background.paper",
                gap: 4,
                px: 12,
                py: 5,
                minWidth: "320px",
                minHeight: "400px",
                borderRadius: 5,
            }}
        >
            <Typography variant="h6" color="text.primary" sx={{ mb: 1 }}>
                Web-gym
            </Typography>
            <AuthFormInput
                type="email"
                defaultLabel="e-mail"
                onChangeListener={(value) => setEmail(value)}
                errorMessage=""
                autoFocus={true}
            />
            <AuthFormInput
                type="password"
                defaultLabel="password"
                onChangeListener={(value) => setPassword(value)}
                errorMessage=""
                autoFocus={false}
            />

            <Button
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                onClick={() => onLoginClick(email, password)}
                sx={{ mt: 2 }}
            >
                Login
            </Button>

            <Typography variant="caption" color="textSecondary" sx={{ mt: 2 }}>
                New to Web-gym?{" "}
                <u style={{ cursor: "pointer" }} onClick={onSignUpClick}>
                    Sign up
                </u>
            </Typography>
        </Box>
    );
};

export default LoginFormTemplate;
