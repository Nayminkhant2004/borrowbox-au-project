import Navbar from "../components/Navbar";
import { Container, Typography, Card, CardContent, Grid, Chip } from "@mui/material";
import { demoItems } from "../services/data";

export default function MyItems() {
  const myItems = demoItems.filter(item => item.owner === "You");

  return (
    <>
      <Navbar />
      <Container sx={{ marginTop: 4 }}>
        <Typography variant="h4">Your Items</Typography>

        <Grid container spacing={3} sx={{ marginTop: 2 }}>
          {myItems.map(item => (
            <Grid item xs={12} md={4} key={item.id}>
              <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h6">{item.title}</Typography>
                  <Chip label={item.category} sx={{ marginY: 1 }} />
                  <Typography>Status: {item.available ? "Available" : "Borrowed"}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}