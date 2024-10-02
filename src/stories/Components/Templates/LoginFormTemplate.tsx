import { Box, Button, Typography } from "@mui/material";
import AuthFormInput from "../Atoms/AuthFormInput";
import React, { useEffect, useState } from "react";

/** Login form Template  */
export interface LoginFormTemplateProps {
  title?: string;
  errorMessage?: string; // Error message is not displayed if user changes any input or click on Login button

  onLoginClick: (email: string, password: string) => void;
  onSignUpClick: () => void;
}

const LoginFormTemplate: React.FC<LoginFormTemplateProps> = ({
  title,
  errorMessage,
  onLoginClick,
  onSignUpClick,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [renderErrorMessage, setRenderErrorMessage] = useState(!!errorMessage);

  useEffect(() => {
    setRenderErrorMessage(false);
  }, [email, password, errorMessage]);
  useEffect(() => {
    setRenderErrorMessage(true);
  }, [errorMessage]);

  const handleLoginClick = () => {
    setRenderErrorMessage(false);
    onLoginClick(email, password);
  };
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
      {title && (
        <Typography variant="h6" color="text.primary" sx={{ mb: 1 }}>
          {title}
        </Typography>
      )}
      {errorMessage && renderErrorMessage && (
        <Typography variant="overline" color="error" sx={{ mb: 1 }}>
          {errorMessage}
        </Typography>
      )}
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
        onClick={handleLoginClick}
        sx={{ mt: 2 }}
        disabled={email.length === 0 || password.length === 0}
      >
        Login
      </Button>

      {title && (
        <Typography variant="caption" color="textSecondary" sx={{ mt: 2 }}>
          New to {title}?{" "}
          <u style={{ cursor: "pointer" }} onClick={onSignUpClick}>
            Sign up
          </u>
        </Typography>
      )}
      {!title && (
        <Typography variant="caption" color="textSecondary" sx={{ mt: 2 }}>
          Create an account!{" "}
          <u style={{ cursor: "pointer" }} onClick={onSignUpClick}>
            Sign up
          </u>
        </Typography>
      )}
    </Box>
  );
};

export default LoginFormTemplate;
