import { createSlice } from "@reduxjs/toolkit";

interface BouquetsSliceState {
  items: {
    id: number;
    name: string;
    cost: number;
    imageUrl: string;
  }[];
}

const initialState: BouquetsSliceState = {
  items: [
    {
      id: 1,
      name: "Весеннее вдохновение",
      cost: 1200,
      imageUrl: "./img/bouquets/bouquet1.png",
    },
    {
      id: 2,
      name: "Радуга нежности",
      cost: 800,
      imageUrl: "./img/bouquets/bouquet2.png",
    },
    {
      id: 3,
      name: "Золотая осень",
      cost: 1500,
      imageUrl: "./img/bouquets/bouquet3.png",
    },
    {
      id: 4,
      name: "Романтический вечер",
      cost: 1000,
      imageUrl: "./img/bouquets/bouquet4.png",
    },
    {
      id: 5,
      name: "Морской бриз",
      cost: 1800,
      imageUrl: "./img/bouquets/bouquet5.png",
    },
    {
      id: 6,
      name: "Цветущий сад",
      cost: 1200,
      imageUrl: "./img/bouquets/bouquet6.png",
    },
    {
      id: 7,
      name: "Летний букет",
      cost: 900,
      imageUrl: "./img/bouquets/bouquet7.png",
    },
    {
      id: 8,
      name: "Зимнее волшебство",
      cost: 2000,
      imageUrl: "./img/bouquets/bouquet8.png",
    },
    {
      id: 9,
      name: "Сияние роз",
      cost: 1300,
      imageUrl: "./img/bouquets/bouquet9.png",
    },
    {
      id: 10,
      name: "Тайная любовь",
      cost: 1100,
      imageUrl: "./img/bouquets/bouquet10.png",
    },
    {
      id: 11,
      name: "Феерия красок",
      cost: 2200,
      imageUrl: "./img/bouquets/bouquet11.png",
    },
    {
      id: 12,
      name: "Шампанское с розами",
      cost: 2500,
      imageUrl: "./img/bouquets/bouquet12.png",
    },
  ],
};

const bouquetsSlice = createSlice({
  name: "header",
  initialState,
  reducers: {},
});

export default bouquetsSlice.reducer;
