<template>
  <div class="about-me">
    <!-- Contenedor para las imágenes y contenido -->
    <div class="content-container">
      <!-- Imagen de la estatua a la izquierda -->
      <div class="image-left">
        <img src="/img/estatua.png" alt="estatua" class="left-image" />
      </div>

      <!-- Cuadro grande a la derecha que habla sobre mí -->
      <div class="about-text">
        <img src="/img/aboutme.png" alt="cuadro sobre mi" class="about-image" />
        <!-- Imagen pequeña de un florero de decoración debajo del cuadro -->
        <div class="decorative-image">
          <img src="/img/florero.png" alt="florero" class="flower-image" />
        </div>
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
  background-color: rgb(245, 245, 245); /* Fondo claro */
  padding: 20px; /* Espacio alrededor del contenido */
}

.content-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px; /* Tamaño máximo del contenido */
  width: 100%;
  gap: 20px; /* Espacio entre elementos */
}

.image-left {
  flex: 1;
  display: flex;
  justify-content: flex-end; /* Alinea la imagen de la estatua hacia la derecha del contenedor */
  margin-right: 20px; /* Despeja la imagen del borde izquierdo */
}

.left-image {
  max-width: 80%; /* Limita el ancho de la imagen para que no ocupe todo el espacio */
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

.about-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 10px; /* Espacio entre el cuadro y la imagen del florero */
}

.decorative-image {
  display: flex;
  justify-content: center;
  width: 100%;
}

.flower-image {
  max-width: 50%; /* Tamaño más pequeño para la imagen decorativa */
  height: auto;
}
</style>
