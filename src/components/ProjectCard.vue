<template>
  <div class="project-card">
    <video
      v-if="project.link_video"
      :src="project.link_video"
      muted
      loop
      autoplay
      playsinline
      controls
      class="project-video"
    ></video>
    <img v-else :src="project.img" alt="Imagen del proyecto" />

    <div class="description">
      <img src="/img/description.png" alt="" />
      <p>{{ project.nombre }}</p>
    </div>
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
  width: 190px;
  height: 115px;
  bottom: -60px;
  position: absolute;
  z-index: 9999;
}

.description * {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #46311e;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
</style>
