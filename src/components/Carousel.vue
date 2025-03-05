<template>
  <div class="carousel lg:hidden" @mouseover="stopAutoplay" @mouseleave="startAutoplay">
    <!-- Flechas de navegación -->
    <button v-if="showArrows" class="prev" @click="goToSlide(prevIndex)">
      &#10094;
    </button>
    <button v-if="showArrows" class="next" @click="goToSlide(nextIndex)">
      &#10095;
    </button>

    <!-- Slides -->
    <div class="carousel-track" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div v-for="(item, index) in items" :key="index" class="carousel-item flex items-center justify-center">
        <slot :item="item">{{ item }}</slot>
      </div>
    </div>

    <!-- Paginación (dots) -->
    <div v-if="showDots" class="dots">
      <span v-for="(item, index) in items" :key="index" 
            @click="goToSlide(index)" 
            :class="{ active: index === currentIndex }"></span>
    </div>
  </div>
</template>

<style scoped>
.carousel {
  position: relative;
  overflow: hidden;
  width: 50%;
  max-width: 600px;
  margin: auto;
}
.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}
.carousel-item {
  min-width: 100%;
  text-align: center;
}
.carousel-item img {
  margin: auto;
}
.prev, .next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  color: #CAAA5F;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
}
.prev { left: 10px; }
.next { right: 10px; }
.dots {
  text-align: center;
  margin-top: 10px;
}
.dots span {
  height: 10px;
  width: 10px;
  margin: 5px;
  background: #dac48f;
  display: inline-block;
  border-radius: 50%;
  cursor: pointer;
}
.dots .active {
  background: #CAAA5F;
}
</style>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const props = defineProps({
  items: { type: Array, required: true }, // Lista de elementos a mostrar
  autoplay: { type: Boolean, default: true },
  autoplaySpeed: { type: Number, default: 3000 },
  loop: { type: Boolean, default: true },
  showDots: { type: Boolean, default: true },
  showArrows: { type: Boolean, default: true },
});

const currentIndex = ref(0);
let autoplayInterval = null;

// Computed para manejar loop infinito
const prevIndex = computed(() =>
  currentIndex.value === 0 ? props.items.length - 1 : currentIndex.value - 1
);
const nextIndex = computed(() =>
  currentIndex.value === props.items.length - 1 ? 0 : currentIndex.value + 1
);

// Cambio de slide manual
const goToSlide = (index) => {
  if (props.loop || (index >= 0 && index < props.items.length)) {
    currentIndex.value = index;
  }
};

// Autoplay
const startAutoplay = () => {
  if (props.autoplay) {
    autoplayInterval = setInterval(() => {
      goToSlide(nextIndex.value);
    }, props.autoplaySpeed);
  }
};

const stopAutoplay = () => {
  if (autoplayInterval) clearInterval(autoplayInterval);
};

onMounted(() => startAutoplay());
onUnmounted(() => stopAutoplay());
</script>
