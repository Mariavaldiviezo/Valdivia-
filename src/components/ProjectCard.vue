<!-- ProjectCard.vue -->
<template>
  <div class="project-card">
    <img :src="project.img" alt="Imagen del proyecto" />
    <!-- Aquí podrás agregar más elementos en el futuro usando el objeto 'project' -->
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
  height: 580px; /* Altura fija para todas las tarjetas */
  width: auto; /* Ancho flexible */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  background-color: rgba(255, 255, 255, 0.8); /* Fondo claro, puedes ajustar */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.project-card img {
  max-height: 100%;
  width: auto; /* Mantiene la proporción de la imagen */
  display: block;
  margin: 0 auto;
}
</style>
