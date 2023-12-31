import React from "react";
import { Link, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import AuthSocial from "../../sections/auth/AuthSocial";
 
const Login = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h4">Login To conversa</Typography>
        <Stack direction={"row"} spacing={0.5}>
          <Typography variant="body2">New user?</Typography>
          <Link to={"/auth/register"} component={RouterLink} variant="subtitle2">create an account</Link>
        </Stack>
        {/* Login Form */}
        {/* Social Auth */}
        <AuthSocial />
      </Stack>
    </>
  );
};

export default Login;
