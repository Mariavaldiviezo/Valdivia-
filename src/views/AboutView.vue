<template>
  <div class="about-me">
    <!-- Contenedor para las imágenes y contenido -->
    <div class="content-container">
      <!-- Imagen de la estatua a la izquierda -->
      <img class="image-left" src="/img/estatua.png" alt="Estatua" />

      <!-- Cuadro grande a la derecha que habla sobre mí -->
      <div class="about-text">
        <div class="about-image-container">
          <img
            src="/img/aboutme.png"
            alt="Cuadro sobre mí"
            class="about-image"
          />
          <!-- Imágenes decorativas alrededor -->
          <img
            v-for="(src, index) in decorativeImages"
            :key="index"
            :src="src"
            :class="`decorative-image decorative-image-${index + 1}`"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Lista de imágenes decorativas
const decorativeImages = [
  "/img/deco1.png",
  "/img/deco2.png",
  "/img/deco3.png",
  "/img/deco4.png",
  "/img/deco5.png",
  "/img/deco6.png",
  "/img/deco7.png",
  "/img/deco8.png",
];
</script>

<style scoped>
.about-me {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px; /* Espacio alrededor del contenido */
  background-color: rgb(73, 73, 155);
}

.content-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px; /* Tamaño máximo del contenido */
  width: 100%;
}

.image-left {
  flex: 1;
  max-width: 40%; /* Asegura que no ocupe demasiado espacio */
  height: auto;
}

.about-text {
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 20px; /* Despeja la imagen grande del borde derecho */
}

.about-image-container {
  position: relative;
  width: 100%;
  max-width: 500px;
}

.about-image {
  width: 100%;
  height: auto;
  position: relative;
  z-index: 1; /* Mantiene esta imagen al frente */
}

.decorative-image {
  position: absolute;
  width: 50px; /* Tamaño ajustable */
  height: auto;
  z-index: 0; /* Detrás de la imagen principal */
  transform: rotate(0deg);
}

/* Posiciones específicas para las imágenes decorativas */
.decorative-image-1 {
  top: -20px;
  left: -30px;
  transform: rotate(-15deg);
}

.decorative-image-2 {
  top: 10%;
  left: 80%;
  transform: rotate(10deg);
}

.decorative-image-3 {
  bottom: 10%;
  left: -20px;
  transform: rotate(-5deg);
}

.decorative-image-4 {
  bottom: -20px;
  right: -30px;
  transform: rotate(20deg);
}

.decorative-image-5 {
  top: 50%;
  left: -40px;
  transform: rotate(-25deg);
}

.decorative-image-6 {
  top: -30px;
  right: 10%;
  transform: rotate(15deg);
}

.decorative-image-7 {
  bottom: 20%;
  right: -40px;
  transform: rotate(5deg);
}

.decorative-image-8 {
  bottom: -40px;
  left: 50%;
  transform: rotate(-10deg);
}
</style>
