/* eslint-disable react/jsx-no-undef */
import { Route, Routes } from "react-router-dom";
import ROUTS from "./routsModel";
import CardsPage from "../cards/Pages/CardsPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/home/HomePage";
import AboutPage from "../pages/AboutPage";
import SignUpPage from "../users/pages/SignUpPage";
import LoginPage from "../users/pages/LoginPage";
import CardDetailsPage from "../cards/Pages/CardDetailsPage";
import AdminPage from "../users/pages/AdminPage";
import MyCardsPage from "../cards/Pages/MyCardsPage";
import CreateCardPage from "../cards/Pages/CreateCardPage";
import Contact from "../pages/contact/ContactPage";
import CardEditPage from "../cards/Pages/CardEditPage";
import FavCardsPage from "../cards/Pages/FavCardsPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path={ROUTS.HOME} element={<HomePage />} />
      <Route path={ROUTS.CARDS} element={<CardsPage />} />
      <Route path={ROUTS.FAV_CARDS} element={<FavCardsPage />} />
      <Route path={ROUTS.MY_CARDS} element={<MyCardsPage />} />
      <Route path={ROUTS.CREATE_CARD} element={<CreateCardPage />} />
      <Route path={`${ROUTS.EDIT_CARD}/:cardId`} element={<CardEditPage />} />
      <Route path={`${ROUTS.CARD_DETAILS}/:cardId`} element={<CardDetailsPage />} />
      <Route path={ROUTS.ABOUT} element={<AboutPage />} />
      <Route path={ROUTS.SIGNUP} element={<SignUpPage />} />
      <Route path={ROUTS.LOGIN} element={<LoginPage />} />
      <Route path={ROUTS.CONTACT} element={<Contact />} />
      <Route path={ROUTS.ADMIN} element={<AdminPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
