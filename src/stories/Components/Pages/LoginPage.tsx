import LoginFormTemplate from "../Templates/LoginFormTemplate";
import { Box } from "@mui/material";

const LoginPage = () => {
  const handleLoginClick = (email: string, password: string) => {
    console.log(`email: ${email}, password: ${password}`);
  };

  const handleSignupClick = () => {
    console.log("Sign up clicked");
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        backgroundColor: "background.default",
        mx: 0,
        my: 0,
        px: 0,
        py: 0,
        minWidth: "100vw",
        minHeight: "100vh",
      }}
    >
      <LoginFormTemplate
        title="Web-gym"
        onLoginClick={handleLoginClick}
        onSignUpClick={handleSignupClick}
      />
    </Box>
  );
};

export default LoginPage;
