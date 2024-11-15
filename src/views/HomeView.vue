<template>
  <div class="home">
    <!-- Cortinas -->

    <!-- Grid de imágenes -->
    <div class="image-grid">
      <div class="grid-item" v-for="(image, index) in images" :key="index">
        <img
          :src="image.src"
          :alt="image.alt"
          :class="`img${index + 1}`"
          @click="goToProject(image.link)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const images = ref([
  { src: "/img/animacion.png", alt: "Imagen 1", link: "/proyecto1" },
  { src: "/img/estatua.png", alt: "Imagen 2", link: "/proyecto2" },
  { src: "/img/audiovisual.png", alt: "Imagen 3", link: "/proyecto3" },
  { src: "/img/ilustracion.png", alt: "Imagen 4", link: "/proyecto4" },
  { src: "/img/web.png", alt: "Imagen 5", link: "/proyecto5" },
]);

const showCurtains = ref(true);

const goToProject = (link) => {
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
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: rgb(42, 42, 161);
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
  transform: translateX(-100%);
}

.home .curtain.right {
  transform: translateX(100%);
}

.image-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px;
  width: 80%; /* Aumenta el tamaño del grid */
  max-width: 1200px; /* Aumenta el tamaño máximo del grid */
  padding: 20px;
}

.grid-item img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.grid-item {
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.grid-item:nth-child(2) {
  grid-row: span 2;
  align-self: stretch;
}

.img2 {
  object-fit: cover !important;
}

.grid-item:hover img {
  transform: scale(1.1); /* Efecto de "salto" al pasar el cursor */
}

@media (max-width: 768px) {
  .image-grid {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 1fr);
    width: 90%; /* Ajusta el tamaño para dispositivos móviles */
  }

  .grid-item:nth-child(3) {
    grid-row: auto;
  }
}
</style>
