import React from "react";
// import "../../App.css";
import "./About.css";
import Typography from "@mui/material/Typography";

export default function About() {
  return (
    <div className="about_container">
      <div className="about_container_text">
        <Typography
          component="h1"
          variant="h3"
          color="primary"
          style={{ fontWeight: 500 }}
        >
          TravelWithUs
        </Typography>
        <Typography
          // component="h1"
          variant="h5"
          color="primary"
          style={{ fontWeight: 500, color: "black" }}
        >
          Турагентство TravelWithUs на протяжении 20 лет ведет взаимовыгодное
          сотрудничество с надежными и опытными туроператорами в Екатеринбурге.
          Используя эффективные услуги нашего турагентства в Екатеринбурге,
          любой клиент получит возможность подобрать и купить тур, стопроцентно
          соответствующий вашим требованиям и финансовым возможностям. Мы
          стараемся делать все, чтобы задействовать запросы и потребности
          современных туристов, поэтому среди направлений для отдыха нашей
          туристической компании имеются:
        </Typography>
        <ul>
          <li>Поездки на горнолыжные курорты</li>
          <li>Поездки на курорты в жаркие страны в любое время года</li>
          <li>Раннее бронирование приглянувшихся путевок</li>
          <li>
            Моментальные горящие туры и спецпредложения на максимально выгодных
            условиях
          </li>
          <li>Лечебные туры</li>
          <li>Детские лагеря</li>
        </ul>
      </div>
    </div>
  );
}
