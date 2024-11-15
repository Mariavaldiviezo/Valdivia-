<template>
  />

  <div class="content">
    <!-- Imagen a la izquierda -->
    <img src="/img/estatua.png" alt="Imagen Izquierda" class="left-image" />
  </div>
</template>

<script setup>
// Puedes agregar cualquier lógica específica aquí si es necesario
</script>

<style scoped>
.about-me {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 100vh;
  background-color: #f3f3f3;
  padding: 20px;
  overflow: hidden;
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  max-width: 1200px;
  gap: 20px;
}

.left-image {
  width: 40%; /* Ajusta según el tamaño deseado */
  height: auto;
}

.right-image {
  width: 50%; /* Ajusta según el tamaño deseado */
  height: auto;
}

.side-image {
  position: absolute;
  top: 10%;
  width: 100px; /* Ajusta el tamaño según desees */
  height: auto;
}

.left-side {
  left: 0;
  transform: translateX(
    -50%
  ); /* Para que la imagen esté parcialmente fuera del escritorio */
}

.right-side {
  right: 0;
  transform: translateX(
    50%
  ); /* Para que la imagen esté parcialmente fuera del escritorio */
}
</style>
