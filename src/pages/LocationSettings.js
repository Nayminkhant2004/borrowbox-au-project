import { useState } from "react";
import { Container, Typography, Select, MenuItem, Button } from "@mui/material";

const locations = [
  "Bang Na",
  "Lat Krabang",
  "Sukhumvit",
  "On Nut",
  "Samut Prakan",
  "Ramkhamhaeng"
];

export default function LocationSettings() {
  const [location, setLocation] = useState("");

  const handleSave = () => {
    localStorage.setItem("userLocation", location);
    alert("Location saved!");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h5">Set Your Neighborhood</Typography>

      <Select
        fullWidth
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        sx={{ mt: 2 }}
      >
        {locations.map((loc) => (
          <MenuItem key={loc} value={loc}>
            {loc}
          </MenuItem>
        ))}
      </Select>

      <Button variant="contained" fullWidth sx={{ mt: 3 }} onClick={handleSave}>
        Save Location
      </Button>
    </Container>
  );
}