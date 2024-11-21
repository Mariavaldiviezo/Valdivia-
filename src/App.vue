<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <div class="bambabilón">
    <header class="header">
      <img
        src="/img/bambabilon.png"
        alt="Imagen de bambalón"
        class="header-image"
      />
    </header>
  </div>

  <div class="curtain curtainleft"><img src="/img/curtainL.png" alt="" /></div>
  <div class="curtain curtainright"><img src="/img/curtainR.png" alt="" /></div>

  <RouterView />
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 130px; /* Ajusta la altura según necesites */
  z-index: 20; /* Asegúrate de que esté por encima de otros elementos */
  background-color: transparent; /* Fondo transparente si lo deseas */
}

.header-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ajusta la imagen para que cubra todo el header */
}

.bambabilón {
  z-index: 100;
}

.curtain {
  position: absolute;
  z-index: 99;
}

.curtainright {
  right: 0px;
}
</style>
