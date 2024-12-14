<template>
  <div class="home">
    <!-- Cortinas -->

    <img
      class="img_estatua"
      src="/img/estatua.png"
      @click="goToProject('/about')"
      alt=""
    />
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
import { ref } from "vue";
import { useRouter } from "vue-router"; // Importa el router

const router = useRouter(); // Inicializa el router

const images = ref([
  { src: "/img/animacion.png", alt: "Imagen 1", link: "/projects/animacion" },
  { src: "/img/estatua.png", alt: "Imagen 2", link: "/about" },
  {
    src: "/img/audiovisual.png",
    alt: "Imagen 3",
    link: "/projects/audiovisual",
  },
  {
    src: "/img/ilustracion.png",
    alt: "Imagen 4",
    link: "/projects/ilustracion",
  },
  { src: "/img/web.png", alt: "Imagen 5", link: "/projects/web" },
]);

const goToProject = (link) => {
  router.push(link); // Usa Vue Router para navegar
};
</script>

<style scoped>
.home {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgb(73, 73, 155);
}

.img_estatua {
  position: absolute;
  bottom: 0px;
  left: 50%;
  width: 25%;
  height: auto;
  object-fit: contain;
  transform: translateX(-50%);
  z-index: 80;
  transition: all 0.2s ease;
}

.img2 {
  opacity: 0;
}

.image-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 15px;
  width: 80%;
  max-width: 1050px;
  padding: 20px;
  top: 28spx;
}

.grid-item {
  overflow: visible;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.grid-item:nth-child(2) {
  grid-row: span 2;
  align-self: stretch;
}

.grid-item img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
  transform-origin: center;
}

/* Rotación sutil en las imágenes de las columnas 1 y 3 */
.grid-item:nth-child(1) img,
.grid-item:nth-child(5) img {
  transform: rotate(-3deg); /* Rotación sutil hacia la izquierda */
}

.grid-item:nth-child(4) img,
.grid-item:nth-child(3) img {
  transform: rotate(4deg); /* Rotación sutil hacia la derecha */
}

.grid-item:hover img {
  transform: scale(1.1); /* Efecto de "salto" al pasar el cursor */
}

.img_estatua:hover {
  transform: translateX(-50%) scale(1.1) rotate(5deg) translateY(-2.5%);
}

.grid-item:nth-child(5) img {
  width: 355px;
}

.grid-item:nth-child(1) img {
  width: 355px;
}

@media (max-width: 768px) {
  .home {
    height: auto;
    padding: 0px !important;
  }
  .image-grid {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 1fr);
    width: 90%;
  }

  .img_estatua {
    display: none;
  }

  .grid-item:nth-child(3) {
    grid-row: auto;
  }

  .grid-item:nth-child(2) {
    grid-row: 5/7;
  }

  .img2 {
    opacity: 1;
  }
}
</style>
