<template>
  <div class="project-card">
    <video
      v-if="project.link_video"
      :src="project.link_video"
      muted
      loop
      autoplay
      playsinline
      class="project-video"
    ></video>
    <img v-else :src="project.img" alt="Imagen del proyecto" />

    <div class="description"><img src="/img/description.png" alt="" /></div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

// Recibe el proyecto completo como prop
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.project-card {
  height: 550px; /* Altura fija para todas las tarjetas */
  width: auto; /* Ancho flexible */
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  background-color: rgba(255, 255, 255, 0.8); /* Fondo claro, puedes ajustar */
  border: 15px solid #d1935a; /* Color marrón claro para el borde */
  border-radius: 8px; /* Bordes ligeramente redondeados */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3); /* Sombra más sutil para profundidad */
  padding: 10px; /* Espacio entre el borde y la imagen */
}

.project-card img {
  max-height: 100%;
  width: auto; /* Mantiene la proporción de la imagen */
  display: block;
  margin: 0 auto;
}

video {
  top: 0px;
  position: relative;
  height: 100vh;
}

.description {
  width: 150px;
  height: 100px;
  bottom: -60px;
  position: absolute;
  z-index: 9999;
}
</style>
