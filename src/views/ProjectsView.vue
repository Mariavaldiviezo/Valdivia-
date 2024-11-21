<script setup>
import { ref, onMounted } from "vue";
import { database } from "@/lib/database";

const projects = ref([]);
onMounted(async () => {
  projects.value = await database;
  console.log(projects[0].img);
});
</script>

<template>
  <div class="project-container">
    <!-- Imagen centrada detrás de los postes -->

    <div class="centered-image">
      <img
        :src="projects.length > 0 ? projects[0].img : ''"
        alt="Imagen centrada"
      />
    </div>

    <!-- Imagen de los postes en el frente -->

    <img class="museum-posts" src="/img/postes.png" alt="Postes de museo" />
  </div>
</template>

<style scoped>
.project-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background-color: rgb(230, 85, 157);
}

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

/* Postes de museo */
.museum-posts {
  position: absolute;

  left: 0;
  bottom: 0;
  width: 100%;
  height: auto;

  z-index: 2; /* Coloca los postes al frente */
  pointer-events: none; /* Si quieres que los postes no interfieran con la imagen centrada */
}
</style>
