<script setup>
import { ref, onMounted } from "vue";
import { database } from "@/lib/database";
import ProjectCard from "./../components/ProjectCard.vue";

// Estado para proyectos, índice actual, carga, y animación
const projects = ref([]);
const currentIndex = ref(0);
const isLoading = ref(true);
const isTransitioning = ref(false); // Estado para controlar la transición

onMounted(async () => {
  projects.value = await database; // Supongo que database es una promesa que devuelve un array de proyectos
  isLoading.value = false;
});

// Función para avanzar al siguiente proyecto con animación
const nextProject = () => {
  if (!isTransitioning.value) {
    isTransitioning.value = true;
    setTimeout(() => {
      currentIndex.value = (currentIndex.value + 1) % projects.value.length;
      isTransitioning.value = false;
    }, 500); // Cambia el proyecto a la mitad de la transición
  }
};

// Función para retroceder al proyecto anterior con animación
const previousProject = () => {
  if (!isTransitioning.value) {
    isTransitioning.value = true;
    setTimeout(() => {
      currentIndex.value =
        (currentIndex.value - 1 + projects.value.length) %
        projects.value.length;
      isTransitioning.value = false;
    }, 500); // Cambia el proyecto a la mitad de la transición
  }
};
</script>

<template>
  <div class="project-container" v-if="projects.length > 0">
    <!-- Botón de navegación a la izquierda -->
    <button @click="previousProject" class="nav-button left-button">
      &lt;
    </button>

    <!-- Componente ProjectCard, recibe el proyecto actual y el estado de transición -->
    <ProjectCard
      :project="projects[currentIndex]"
      :is-transitioning="isTransitioning"
    />

    <!-- Botón de navegación a la derecha -->
    <button @click="nextProject" class="nav-button right-button">&gt;</button>

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
  background-color: rgb(230, 85, 157);
  overflow: hidden;
}

.nav-button {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 24px;
  border-radius: 50%;
}

.left-button {
  right: 10px;
}

.right-button {
  left: 10px;
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
