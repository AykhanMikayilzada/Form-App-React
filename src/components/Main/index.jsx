// Main.jsx
import React from "react";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

function Main({ cards }) {
  return (
    <>
      <div className="cardArea">
        {cards.map((card) => (
          <Card key={card.id} component="li" sx={{ minWidth: 300, maxWidth: 300, flexGrow: 1 }}>
            <CardCover>
              <img
                src={card.imageUrl}
                srcSet={`${card.imageUrl}?auto=format&fit=crop&w=800&dpr=2 2x`}
                loading="lazy"
                alt=""
              />
            </CardCover>
            <CardContent>
              <Typography
                level="body-lg"
                fontWeight="lg"
                textColor="#fff"
                mt={{ xs: 12, sm: 18 }}
              >
                {card.content}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Main;
