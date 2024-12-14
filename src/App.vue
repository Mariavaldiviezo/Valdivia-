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

  <img class="curtain curtainleft" src="/img/curtainL.png" alt="" />
  <img class="curtain curtainright" src="/img/curtainR.png" alt="" />

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

/* Cortinas */
.curtain {
  position: absolute;
  z-index: 99;
  top: 0;
  width: 55%;
  height: 100vh; /* O la altura de la ventana */
  animation-delay: 1s; /* Retraso de 3 segundos */
  animation-duration: 7s; /* Duración de la animación 7 segundos */
  animation-fill-mode: forwards; /* Mantiene el estado final de la animación */
}

.curtainleft {
  left: 0;
  animation-name: openLeftCurtain;
}

.curtainright {
  right: 0;
  animation-name: openRightCurtain;
}

/* Animaciones */
@keyframes openLeftCurtain {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-80%);
  }
}

@keyframes openRightCurtain {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(80%);
  }
}

@media screen and (max-width: 768px) {
  .curtain {
    display: none;
  }
}
</style>
