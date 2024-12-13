<template>
  <div class="about-me">
    <!-- Contenedor para las imágenes y contenido -->
    <div class="content-container">
      <!-- Imagen de la estatua a la izquierda -->
      <div class="image-left-container">
        <img class="image-left" src="/img/estatua.png" alt="Estatua" />
      </div>

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
  align-items: end;
  min-height: 100vh;
  padding: 0px 20px; /* Espacio alrededor del contenido */
  background-color: rgb(73, 73, 155);
}

.content-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px; /* Tamaño máximo del contenido */
  width: 100%;
  max-height: 100dvh;
  max-height: 100vh;
  overflow: hidden;
}

.image-left-container {
  flex: 1;
  max-width: 40%; /* Asegura que no ocupe demasiado espacio */
  height: auto;
  position: relative;
  align-self: end;
}

.image-left {
  position: absolute;
  width: 90%;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0px;
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
  width: 125%;
  height: auto;
  position: relative;
  right: 55px;
  bottom: 40px;
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
  top: 30px;
  left: -60px;
  width: 100px;
}

.decorative-image-2 {
  top: 50%;
  right: -85px;
  transform: rotate(2deg);
  width: 100px;
}

.decorative-image-3 {
  top: 50%;
  left: -60px;
  transform: rotate(2deg);
  width: 100px;
}

.decorative-image-4 {
  top: 27%;
  right: -110px;
  transform: rotate(-10deg);
  width: 100px;
}

.decorative-image-5 {
  top: 27%;
  left: -110px;
  transform: rotate(-10deg);
  width: 100px;
}

.decorative-image-6 {
  top: 40px;
  right: -80px;
  width: 105px;
  transform: rotate(15deg);
}

.decorative-image-7 {
  bottom: 7%;
  right: -40px;
  width: 100px;
  transform: rotate(10deg);
}

.decorative-image-8 {
  bottom: 10%;
  left: -60px;
  transform: rotate(-5deg);
  width: 105px;
}

@media screen and (max-width: 745px) {
  .about-me {
    flex-direction: column; /* Cambia el diseño a columna */
    align-items: center; /* Centra los elementos horizontalmente */
  }

  .content-container {
    flex-direction: column;
    align-items: center;
    padding: 0;
    max-width: 100%;
  }

  .image-left-container {
    display: none; /* Oculta la imagen de la estatua */
  }

  .about-text {
    order: 1; /* Mueve el texto al principio */
    margin: 10px 0; /* Margen vertical */
  }

  .about-image-container {
    width: 90%; /* Ajusta el tamaño para pantallas pequeñas */
    margin-bottom: 20px; /* Espacio inferior */
  }

  .about-image {
    width: 100%; /* Ajusta la imagen al contenedor */
    right: 0;
    bottom: 0;
    position: static; /* Evita el posicionamiento relativo */
  }

  .decorative-image {
    position: static; /* Evita el posicionamiento absoluto */
    width: 15%; /* Tamaño pequeño para visualizarse */
    margin: 5px; /* Espaciado entre imágenes */
  }

  .about-text .about-image-container {
    display: flex;
    flex-wrap: wrap; /* Permite que las imágenes decorativas se alineen */
    justify-content: center; /* Centra las imágenes decorativas */
  }
}
</style>
