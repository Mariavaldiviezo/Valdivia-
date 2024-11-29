<template>
  <div class="about-me">
    <!-- Contenedor para las imágenes y contenido -->
    <div class="content-container">
      <!-- Imagen de la estatua a la izquierda -->

      <img class="image-left" src="/img/estatua.png" alt="Estatua" />

      <!-- Cuadro grande a la derecha que habla sobre mí -->
      <div class="about-text">
        <img src="/img/aboutme.png" alt="Cuadro sobre mí" class="about-image" />
        <!-- Imagen pequeña de un florero de decoración debajo del cuadro -->
        <img class="decorative-image" src="/img/florero.png" alt="Florero" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
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

.about-text {
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 20px; /* Despeja la imagen grande del borde derecho */
}

.about-image {
  max-width: 95%;
  height: auto;
  margin-bottom: 10px; /* Espacio entre el cuadro y la imagen del florero */
}

.decorative-image {
  width: 50%;

  position: absolute;
  bottom: 10%;
}
</style>
