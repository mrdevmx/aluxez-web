<template>
    <div class="w-full h-[700px] flex items-center text-white px-6">
      <div v-for="(slide, index) in slides" :key="index"
        class="w-3/5 absolute transition-opacity duration-1000 ease-in-out px-20 mt-20"
        :class="{ 'opacity-100': index === currentIndex, 'opacity-0': index !== currentIndex }">
        
        <h1 class="text-5xl sm:text-5xl font-bold text-secondary-light">
          {{ slide.title }} <span class="text-secondary">{{ slide.subtitle }}</span>
        </h1>
        <p class="mt-4 text-lg text-left text-secondary-light max-w-xl">
          {{ slide.description }}
        </p>
      </div>
    </div>
  </template>
  <script setup>
  import { ref, onMounted } from "vue";
  
  const slides = ref([
    {
      title: "Cuidamos lo que amas,",
      subtitle: "protegemos lo que importa",
      description:
        "En Aluxez Administración cuidamos cada residencial como los aluxes cuidan la tierra, creando espacios de armonía, transparencia y tranquilidad.",
    },
    {
      title: "Proteger tu hogar ",
      subtitle: "es nuestra tradición",
      description:
        "Garantizamos la mejor administración residencial con honestidad y compromiso.",
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