import axios from "axios";

const API_URL = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2";

export const getCards = async () => {
  try {
    const response = await axios.get(`${API_URL}/cards`);
    return response.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const getCard = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/cards/${id}`);
    return response.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const createCard = async (card) => {
  try {
    const response = await axios.post(`${API_URL}/cards`, card);
    return response.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const editCard = async (cardId, card) => {
  try {
    const response = await axios.put(`${API_URL}/cards/${cardId}`, card);
    return response.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const deleteCard = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/cards/${id}`);
    return response.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const getMyCards = async () => {
  try {
    const response = await axios.get(`${API_URL}/cards/my-cards`);
    return response.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const changeLikeStatus = async (cardId) => {
  try {
    const response = await axios.patch(`${API_URL}/cards/${cardId}`);
    return response.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
