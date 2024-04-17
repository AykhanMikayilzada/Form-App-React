// Header.jsx
import React, { useState } from "react";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";

function Header({ onAddCard }) {
  const [inputValue, setInputValue] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSearch = () => {
    if (inputValue.trim() !== "") {
      const cardImageUrl = imageUrl.trim() !== "" ? imageUrl : "https://lh4.googleusercontent.com/proxy/EWm9FVpPqF7N5rcraSRF-UMDuwBzfkA2tYNH73WwfdaqqrhD7V-TQL22-XP7fOgbjSp4X836b8_TVTYw1JN7bSJuUHbgtMURdiA2n-lyFKYnnpRzFzCJ72kCEw";
      onAddCard(inputValue, cardImageUrl);
      setInputValue("");
      setImageUrl("");
    }
  };

  return (
    <>
      <div className="sectionOne">
        <Typography level="h2" margin="center" textColor="#0175e9">
          What is Lorem Ipsum?
        </Typography>
        <Stack spacing={1} mt="50px">
          <div className="searchArea">
            <Input
              placeholder="Type Here Something..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              required
            />
            <Input
              placeholder="Enter Image URL (Optional)"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
            <Button type="button" onClick={handleSearch}>
              Send
            </Button>
          </div>
        </Stack>
      </div>
    </>
  );
}

export default Header;
