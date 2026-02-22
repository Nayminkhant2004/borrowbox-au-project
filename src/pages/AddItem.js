import Navbar from "../components/Navbar";
import { Container, TextField, Button, Typography, Card, CardContent, MenuItem } from "@mui/material";
import { categories } from "../services/data";
import { useState } from "react";

export default function AddItem() {
  const [category, setCategory] = useState("");

  const handleSubmit = () => {
    alert("Item added! You will earn credits when someone borrows it.");
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="sm" sx={{ marginTop: 4 }}>
        <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h5">Add New Item</Typography>

            <TextField fullWidth label="Title" margin="normal" />
            <TextField fullWidth label="Description" margin="normal" />

            <TextField
              select
              fullWidth
              label="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              margin="normal"
            >
              {categories.map((cat) => (
                <MenuItem key={cat} value={cat}>{cat}</MenuItem>
              ))}
            </TextField>

            <Button fullWidth variant="contained" sx={{ marginTop: 2 }} onClick={handleSubmit}>
              Add Item
            </Button>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}