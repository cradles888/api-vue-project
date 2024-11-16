<template>
    <section class="main_section">
      <section class="section_background">
        <h1>Data</h1>
        <input type="text" v-model="infoInput">
        <p>{{ infoInput == '' ? 'Здесь пока пусто' : infoInput }}</p>
        <button @click="getJSON">Получить JSON объект</button>
      </section>
      <section class="response">
        <h1>Ответ в виде объекта</h1>
        <!-- <p v-show="dataJSON != ''">{{ dataJSON }}</p> -->
      </section>
  
  
      <section class="grid px-10 pt-10 grid-cols-3 gap-10"> <!-- Секция под карточки-->
        <section class="max-w-fit border-black py-8  px-7 bg-[#f3f6f8] rounded-lg"         
        v-for="(car, index) in dataJSON[0]" 
        :key="index" :car="car" > <!-- Карточка машины -->
          <section class="border-b-2 border-gray-200 pb-4"> <!-- Первая часть карточки -->
            <section class="flex justify-end">
              <img :src="more_horizontal" alt="more_horizontal" class="hover:cursor-pointer">
            </section>
            <section>
              <img :src="imgMercedes" alt="Mercedes" width="420px" class="pb-2">
            </section>
            <section class="grid gap-2">
              <p class="font-bold text-[20px]">{{ dataJSON[0].vehicle_name }}</p>
              <span class="font-bold text-[#29314899] pb-2">VIN {{ dataJSON[0].vin }}</span>
            </section>
          </section>
        </section>
      </section>
  
    </section>
  </template>
  
  <script setup>
  import axios from 'axios';
  import { ref } from 'vue';
  
  const more_horizontal = ref('/public/more_horizontal.png')
  const imgMercedes = ref('https://api.caiman-app.de/storage/photos/10/n8ZKWonyUJpBfcj9y45m3GXT1w1oO1e1MLQZZT3i.png')
  const infoInput = ref('');
  const dataJSON = ref('')
  const car = ref('')
  
  
  const getJSON = () => {
    axios.get('https://api.caiman-app.de/api/cars-test?search=2323&per_page=9&page=1')
      .then(response => (dataJSON.value = response.data.data))
  }
  
  </script>
  
  <style scoped>
  .main_section {
    display: grid;
    justify-content: center;
    align-items: center;
  }
  
  .section_background {
    display: grid;
    justify-items: center;
    align-items: center;
    padding: 5vh;
    background-color: rgb(121, 158, 35);
  }
  
  h1 {
    font-family: sans-serif;
    font-size: 36px;
  }
  
  input {
    background: transparent;
    border-bottom: 2px solid transparent;
    outline: none;
  }
  
  input:focus {
    border-bottom: 2px solid rgb(161, 45, 45);
  }
  
  .response {
    background-color: rgb(35, 188, 191);
  }
  </style>