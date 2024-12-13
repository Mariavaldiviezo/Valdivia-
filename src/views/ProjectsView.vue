<script setup>
import { ref, onMounted } from "vue";
import { database } from "@/lib/database";
import ProjectCard from "./../components/ProjectCard.vue";
import { useRoute } from "vue-router";

const route = useRoute();

// Estado para proyectos, índice actual, carga, y animación
const projects = ref([]);
const currentIndex = ref(0);
const isLoading = ref(true);
const isTransitioning = ref(false); // Estado para controlar la transición

onMounted(async () => {
  console.log(route);

  const result = await database;
  projects.value = result.filter((e) => e.categoria == route.params.categoria);
  // Supongo que database es una promesa que devuelve un array de proyectos
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
    <!-- Imagen con función de botón de navegación a la izquierda -->
    <img
      @click="previousProject"
      class="nav-button left-button"
      src="/img/left-button.png"
      alt="Anterior"
    />
    <!-- Contenedor de proyectos con animación -->
    <div
      class="projects-wrapper"
      :class="{
        'pop-in': isTransitioning,
      }"
    >
      <!-- Componente ProjectCard, recibe el proyecto actual -->
      <ProjectCard :project="projects[currentIndex]" />
    </div>
    <img
      @click="nextProject"
      class="nav-button right-button"
      src="/img/right-button.png"
      alt="Siguiente"
    />
    <!-- Imagen con función de botón de navegación a la derecha -->
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
  background-image: url("/img/fondo.png");
  background-size: cover;
  background-position: center;
  overflow: hidden;
}

/* Imágenes como botones */
.nav-button {
  cursor: pointer; /* Cambia el cursor a mano al pasar el ratón */
  position: absolute;
  top: -40px; /* Eleva los botones cerca del header */
  transition: transform 0.2s ease;
  z-index: 99;
}

.left-button {
  right: 22px;
}

.right-button {
  left: 22px;
}

/* Contenedor de las tarjetas con transición */
.projects-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease-in-out;
}

/* Efecto pop: cuando se activa la transición */
.pop-in {
  animation: pop-in 0.5s ease-out forwards;
}

@keyframes pop-in {
  0% {
    transform: scale(0.8); /* Empieza un poco más pequeña */
  }
  50% {
    transform: scale(1.1); /* Expande un poco para el pop */
  }
  100% {
    transform: scale(1); /* Vuelve al tamaño original */
  }
}

.nav-button {
  cursor: pointer; /* Cambia el cursor a mano al pasar el ratón */
  position: absolute;
  top: -40px; /* Eleva los botones cerca del header */
  transition: transform 0.2s ease;
  z-index: 99;
}

.nav-button:hover {
  animation: jump 0.5s ease-out;
}

@keyframes jump {
  0% {
    transform: translateY(0); /* Posición inicial */
  }
  30% {
    transform: translateY(-10px); /* Sube un poco */
  }
  60% {
    transform: translateY(0); /* Baja */
  }
  100% {
    transform: translateY(-5px); /* Rebota ligeramente */
  }
}

.left-button {
  right: 88px;
}

.right-button {
  left: 70px;
}

@media (max-width: 768px) {
  .left-button {
    right: -50px;
  }

  .right-button {
    left: -75px;
  }

  .project-container {
    background-image: none;
  }
}
</style>
