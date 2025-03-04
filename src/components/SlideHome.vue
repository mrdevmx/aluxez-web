<style>
        @keyframes floating {
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
        }
        .animate-floating {
            animation: floating 5s ease-in-out infinite;
        }
    </style>
<template>
  <div class="container m-auto p-10 w-full h-[700px] flex flex-wrap items-center mt-[128px]">
    <div class="relative max-lg:text-center w-1/2 max-lg:w-full max-lg:h-[50%] max-lg:mt-[3rem]">
      <div
      v-for="(slide, index) in slides"
      :key="index"
      class="max-lg:w-full absolute transition-opacity duration-1000 ease-in-out"
      :class="{
        'opacity-100': index === currentIndex,
        'opacity-0': index !== currentIndex,
      }"
    >
      <h1 class="text-5xl text-wrap sm:text-5xl font-bold text-secondary-light">
        {{ slide.title }}
        <span class="text-secondary">{{ slide.subtitle }}</span>
      </h1>
      <p class="w-full mt-4 text-lg text-left max-lg:text-center text-secondary-light">
        {{ slide.description }}
      </p>
      </div>
    </div>
    
    <div class="w-1/2 flex flex-row-reverse backdrop-opacity-10 max-lg:w-full max-lg:h-[50%] max-lg:mt-[3rem] max-lg:hidden">
      <div class="w-full grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">
        <div class="transform scale-75 -rotate-6 translate-x-20 ">
          <img src="/public/iconografia/Recurso44.png" alt="" class="animate-floating" />
        </div>
        <div class="col-start-3 transform scale-75 rotate-6 translate-x-2 translate-y-15">
          <img src="/public/iconografia/Recurso43.png" alt="" class="animate-floating" />
        </div>
        <div class="transform -scale-75 translate-y-11">
          <img src="/public/iconografia/Recurso39.png" alt="" class="animate-floating" />
        </div>
        <div class="transform translate-y-24">
          <img src="/public/iconografia/Recurso41.png" alt="" class="animate-floating" />
        </div>
        <div class="row-start-1 col-start-2 col-span-2 transform translate-x-20 translate-y-4">
          <img src="/public/iconografia/Recurso42.png" alt="" class="animate-floating" />
        </div>
      </div>
    </div>

    <Carousel :items="images" :autoplay="true" :loop="true">
    <template #default="{ item }">
      <img :src="item" alt="Imagen del carrusel" />
    </template>
  </Carousel>

  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import Carousel from "./Carousel.vue";

const images = [
  "/iconografia/Recurso44.png",
  "/iconografia/Recurso39.png",
  "/iconografia/Recurso41.png",
  "/iconografia/Recurso42.png",
];

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
