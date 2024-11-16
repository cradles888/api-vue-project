<template>
  <section class="p-0 m-0 box-content grid grid-cols-2fr">
    <AsideVue />
    <!-- <TheMain/> -->
    <section>
      <Header />
      <Select />
      <Cardd/>
    </section>
  </section>
</template>

<script setup>
// import Main from './components/TheMain/Main.vue'
import AsideVue from './components/TheAside/Aside.vue';
import Header from './components/TheMain/Header/Header.vue';
import Select from './components/TheMain/SelectedAuto/Select.vue';
import Cardd from './components/TheMain/Cards/Cardd.vue';
// import TheMain from './components/TheMain/TheMain.vue'




</script>

<style scoped></style>