import { useState } from "react";
import {
  Container, Card, CardContent, Typography,
  Avatar, Button, TextField, Chip, Stack
} from "@mui/material";

export default function Profile({ user }) {
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState(user);

  if (!profile) return <h2>User not found</h2>;

  const handleSave = () => {
    setEditing(false);
    alert("Profile updated! (frontend only)");
  };

  const handleSkillChange = (e) => {
    setProfile({ ...profile, skills: e.target.value.split(",") });
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Card sx={{ borderRadius: 3 }}>
        <CardContent>

          {/* Avatar */}
          <Avatar
            src={profile.avatar}
            sx={{ width: 100, height: 100, margin: "auto" }}
          />

          {/* Name */}
          {editing ? (
            <TextField
              fullWidth
              label="Name"
              value={profile.name}
              sx={{ mt: 2 }}
              onChange={(e) =>
                setProfile({ ...profile, name: e.target.value })
              }
            />
          ) : (
            <Typography variant="h5" align="center" sx={{ mt: 2 }}>
              {profile.name}
            </Typography>
          )}

          {/* Location */}
          <Typography align="center" color="text.secondary">
            📍 {profile.location}
          </Typography>

          {/* Bio */}
          {editing ? (
            <TextField
              fullWidth
              multiline
              label="Bio"
              value={profile.bio}
              sx={{ mt: 2 }}
              onChange={(e) =>
                setProfile({ ...profile, bio: e.target.value })
              }
            />
          ) : (
            <Typography sx={{ mt: 2 }} align="center">
              {profile.bio}
            </Typography>
          )}

          {/* Skills */}
          <Typography sx={{ mt: 2 }}>Skills:</Typography>

          {editing ? (
            <TextField
              fullWidth
              label="Skills (comma separated)"
              value={profile.skills.join(",")}
              onChange={handleSkillChange}
            />
          ) : (
            <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mt: 1 }}>
              {profile.skills.map((skill, i) => (
                <Chip key={i} label={skill} />
              ))}
            </Stack>
          )}

          {/* Credits */}
          <Typography sx={{ mt: 2 }}>
            ⭐ Credits: {profile.credits}
          </Typography>

          {/* Buttons */}
          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 3 }}
            onClick={() => (editing ? handleSave() : setEditing(true))}
          >
            {editing ? "Save Profile" : "Edit Profile"}
          </Button>

        </CardContent>
      </Card>
    </Container>
  );
}