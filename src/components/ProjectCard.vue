<script setup></script>

<template>
  <div class="centered-image">
    <img
      v-if="projects.length > 0"
      :src="projects[10].img"
      alt="Imagen centrada"
    />
  </div>
</template>

<style scoped>
/* Imagen centrada */
.centered-image {
  position: relative;
  z-index: 1; /* Coloca la imagen detrás de los postes */
}

.centered-image img {
  display: block;
  height: 650px;
  margin: 0 auto;
}
</style>
