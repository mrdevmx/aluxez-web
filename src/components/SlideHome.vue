<template>
  <div class="w-full h-[700px] flex items-center px-6">
    <div
      v-for="(slide, index) in slides"
      :key="index"
      class="w-3/5 absolute transition-opacity duration-1000 ease-in-out px-20 mt-20"
      :class="{
        'opacity-100': index === currentIndex,
        'opacity-0': index !== currentIndex,
      }"
    >
      <h1 class="text-5xl sm:text-5xl font-bold text-secondary-light">
        {{ slide.title }}
        <span class="text-secondary">{{ slide.subtitle }}</span>
      </h1>
      <p class="mt-4 text-lg text-left text-secondary-light max-w-xl">
        {{ slide.description }}
      </p>
    </div>
    <div class="w-full flex flex-row-reverse backdrop-opacity-10">
      <div class="w-2/5 grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">
        <div class="transform scale-75 -rotate-6 translate-x-20">
          <img src="/public/iconografia/Recurso44.png" alt="" loading="lazy" />
        </div>
        <div class="col-start-3 transform scale-75 rotate-6 translate-x-2 translate-y-15">
          <img src="/public/iconografia/Recurso43.png" alt="" loading="lazy" />
        </div>
        <div class="transform -scale-75 translate-y-11">
          <img src="/public/iconografia/Recurso39.png" alt="" loading="lazy" />
        </div>
        <div class="transform translate-y-24">
          <img src="/public/iconografia/Recurso41.png" alt="" loading="lazy" />
        </div>
        <div class="row-start-1 col-start-2 col-span-2 transform translate-x-20 translate-y-4">
          <img src="/public/iconografia/Recurso42.png" alt="" loading="lazy" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";

const slides = ref([
  {
    title: "Cuidamos lo que más valoras, ",
    subtitle: "protegemos lo que importa",
    description:
      "En Aluxez Administración, gestionamos cada residencial con el mismo compromiso con el que los aluxes cuidan la tierra, creando espacios de armonía, confianza y bienestar.",
  },
  {
    title: "El estandar en administración residencial,",
    subtitle: "Comienza aquí",
    description: "Seguridad, orden y transparencia para tu tranquilidad.",
  },
  {
    title: "Proteger tu hogar ",
    subtitle: "es nuestra tradición",
    description:
      "Garantizamos una administración residencial eficiente, honesta y con altos estándares de calidad.",
  },
  {
    title: "Tu residencial ",
    subtitle: "nuestra prioridad",
    description:
      "Descubre cómo nuestra experiencia y transparencia elevan la gestión de tu comunidad.",
  },
  {
    title: "Más que administración ",
    subtitle: "cuidamos de tu comunidad",
    description:
      "Cada detalle cuenta. En Aluxez, ofrecemos atención personalizada para garantizar la mejor experiencia en tu residencial.",
  },
]);

const currentIndex = ref(0);

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length;
};

onMounted(() => {
  setInterval(nextSlide, 8000); // Cambia de slide cada 5 segundos
});
</script>
