<template>
  <div class="home">
    <!-- Cortinas -->
    <div class="curtains" v-if="showCurtains"></div>

    <!-- Grid de imágenes -->
    <div class="image-grid">
      <div class="grid-item" v-for="(image, index) in images" :key="index">
        <img
          :src="image.src"
          :alt="image.alt"
          @click="goToProject(image.link)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const images = ref([
  { src: "/img/a.jpg", alt: "Imagen 1", link: "/proyecto1" },
  { src: "/img/b.jpg", alt: "Imagen 2", link: "/proyecto2" },
  { src: "/img/c.jpg", alt: "Imagen 3", link: "/proyecto3" },
  { src: "/img/d.jpg", alt: "Imagen 4", link: "/proyecto4" },
  { src: "/img/e.jpg", alt: "Imagen 5", link: "/proyecto5" },
]);

const showCurtains = ref(true);

const goToProject = (link) => {
  // Navegar a la vista del proyecto
  // Puedes ajustar este método según tu enrutador de Vue
  window.location.href = link;
};

onMounted(() => {
  setTimeout(() => {
    showCurtains.value = false;
  }, 5000); // Oculta las cortinas después de 5 segundos
});
</script>

<style scoped>
.home {
  position: relative;
}

.curtains {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 10;
}

.curtain {
  width: 50%;
  height: 100vh;
  object-fit: cover;
  transition: transform 5s ease;
}

.curtain.left {
  transform: translateX(0);
}

.curtain.right {
  transform: translateX(0);
}

.home .curtain.left {
  transform: translateX(
    -100%
  ); /* Mueve la cortina izquierda hacia la izquierda */
}

.home .curtain.right {
  transform: translateX(100%); /* Mueve la cortina derecha hacia la derecha */
}

.image-grid {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px;
  padding: 20px;
}

.grid-item {
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.grid-item:nth-child(3) {
  grid-row: span 2;
}

.grid-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.grid-item:hover img {
  transform: scale(1.1); /* Efecto de "salto" al pasar el cursor */
}

@media (max-width: 768px) {
  .image-grid {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 1fr);
  }

  .grid-item:nth-child(3) {
    grid-row: auto;
  }
}
</style>
