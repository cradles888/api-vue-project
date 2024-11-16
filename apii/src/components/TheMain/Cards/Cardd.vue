<template>
    <section class="grid px-10 pt-10 grid-cols-3 gap-10"> <!-- Секция под карточки-->
        <section class="max-w-fit border-black py-8  px-7 bg-[#f3f6f8] rounded-lg" v-for="(car, index) in dataJSON[0]" 
        :key="index"> <!-- Карточка машины -->
            <section class="border-b-2 border-gray-200 pb-4"
            > <!-- Первая часть карточки -->
                <section class="flex justify-end">
                    <img src="../../../../public/images/more_horizontal.png" alt="" class="hover:cursor-pointer">
                </section>
                <section>
                    <img :src="imgMercedes" alt="" width="370px" class="px-8 max-w-fit pb-2">
                </section>
                <section class="grid gap-2">
                    <p class="font-bold text-[20px]">{{ dataJSON[0].vehicle_name }}</p>
                    <span class="font-bold text-[#29314899] pb-2">{{ dataJSON[0].vin }}</span>
                </section>
            </section>
            <section class="flex justify-between items-center"> <!-- Вторая часть карточки -->
                <section class="flex gap-3 bg-[#E4F5DD] mt-5 py-2 px-3 max-w-fit rounded-lg">
                    <img src="../../../../public/images/check.png" alt="">
                    <span class="text-[#7FC75E] font-bold">30/30</span>
                </section>
                <section class="mt-5 max-w-fit">
                    <span class="font-bold text-[#29314899]">3 days left</span>
                </section>
            </section>
        </section>
    </section>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

const more_horizontal = ref('../../../../public/images/more_horizontal.png')
const imgMercedes = ref('https://api.caiman-app.de/storage/photos/10/n8ZKWonyUJpBfcj9y45m3GXT1w1oO1e1MLQZZT3i.png')
const dataJSON = ref('')


const getJSON = () => {
    axios.get('https://api.caiman-app.de/api/cars-test?search=2323&per_page=9&page=1')
        .then(response => (dataJSON.value = response.data.data))
}
getJSON();

</script>