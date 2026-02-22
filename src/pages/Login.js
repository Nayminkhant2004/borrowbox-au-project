import { TextField, Button, Container, Typography, Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "100px" }}>
      <Card>
        <CardContent>
          <Typography variant="h4" align="center">BorrowBox</Typography>

          <TextField fullWidth label="Email" margin="normal" />
          <TextField fullWidth label="Password" type="password" margin="normal" />

          <Button fullWidth variant="contained" onClick={handleLogin}>
            Login
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}