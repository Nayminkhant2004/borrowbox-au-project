import Navbar from "../components/Navbar";
import { Container, Typography, Card, CardContent, Grid, Chip } from "@mui/material";
import { borrowHistory } from "../services/data";
import { useNavigate } from "react-router-dom";
export default function BorrowHistory() {
  return (
    <>
      <Navbar />
      <Container sx={{ marginTop: 4 }}>
        <Typography variant="h4">Your Borrow History</Typography>

        <Grid container spacing={3} sx={{ marginTop: 2 }}>
          {borrowHistory.map(record => (
            <Grid item xs={12} md={6} key={record.id}>
              <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h6">{record.item}</Typography>
                  <Typography>Owner: {record.owner}</Typography>
                  <Typography>Date: {record.date}</Typography>
                  <Chip label={record.status} color={record.status === "Returned" ? "success" : "warning"} />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}