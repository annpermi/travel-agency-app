import React from "react";
// import "../../App.css";
import "./About.css";
import Typography from "@mui/material/Typography";
import Footer from "./Footer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Stack from "@mui/material/Stack";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export default function About() {
  const list = [
    "Поездки на горнолыжные курорты",
    "Поездки на курорты в жаркие страны в любое время года",
    "Раннее бронирование приглянувшихся путевок",
    "Моментальные горящие туры и спецпредложения на максимально выгодных условиях",
    "Лечебные туры",
    "Детские лагеря",
  ];
  return (
    <>
      {/* <Container
        component="main"
        maxWidth="lg"
        style={{ height: "fit-content" }}
      >
        <CssBaseline />
        <Box
          sx={{
            margin: 6,
            marginBottom: 6,
          }}
        > */}
      <div className="about_container">
        <div className="about_container_text">
          <div>
            <Typography
              component="h1"
              variant="h3"
              color="primary"
              style={{ fontWeight: 500 }}
            >
              TravelWithUs
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="text.secondary"
              paragraph
              style={{ margin: "30px 0" }}
            >
              Турагентство TravelWithUs на протяжении 20 лет ведет
              взаимовыгодное сотрудничество с надежными и опытными
              туроператорами в Екатеринбурге. Используя эффективные услуги
              нашего турагентства в Екатеринбурге, любой клиент получит
              возможность подобрать и купить тур, стопроцентно соответствующий
              вашим требованиям и финансовым возможностям.
            </Typography>
          </div>
          <Card sx={{ display: "flex" }}>
            <CardContent sx={{ flex: 1 }}>
              <Typography component="h2" variant="h5" color="primary">
                Мы предлагаем нашим клиентам уникальный продукт и качественный
                (индивидуальный) сервис:
              </Typography>
              <List>
                {list.map((li, inx) => {
                  return (
                    <ListItem key={inx} color="text.secondary">
                      {li}
                    </ListItem>
                  );
                })}
              </List>
            </CardContent>
            <CardMedia
              component="img"
              sx={{ width: 250, display: { xs: "none", sm: "block" } }}
              image="https://st2.depositphotos.com/1008450/7924/i/600/depositphotos_79242030-stock-photo-travel-agency.jpg"
              alt="TEAM"
            />
          </Card>
        </div>
      </div>
      {/* </Box>
      </Container> */}
      <Footer />
    </>
  );
}
