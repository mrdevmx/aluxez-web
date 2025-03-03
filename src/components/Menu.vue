<template>
  <div
    :class="[
      'fixed top-0 z-10 flex w-screen transition-all duration-300 shadow-sm',
      isScrolled ? 'bg-primary-dark h-[80px] shadow-lg' : 'h-[128px]',
    ]"
    ref="menuRef"
  >
    <div
      class="container m-auto w-screen h-auto flex justify-between items-center"
    >
      <!-- Logo de la marca -->
      <div class="flex flex-row items-center w-screen">
        <img
          :src="brandLogo.src"
          alt="Aluxez Administración"
          :class="[isScrolled ? 'w-32' : 'w-64']"
          class="h-auto object-contain transition-all duration-300"
        />
      </div>
      <div class="flex flex-row-reverse w-screen">
        <button
          @click="isMenuOpen = !isMenuOpen"
          class="flex flex-col justify-center items-center w-12 h-12 p-2 relative transition-all duration-300"
        >
          <div
            :class="{
              'rotate-45 translate-y-2': isMenuOpen,
              'translate-y-0': !isMenuOpen,
            }"
            class="w-8 h-1 bg-secondary rounded transition-transform duration-300"
          ></div>
          <div
            :class="{ 'opacity-0': isMenuOpen, 'opacity-100': !isMenuOpen }"
            class="w-8 h-1 bg-secondary rounded my-1 transition-opacity duration-300"
          ></div>
          <div
            :class="{
              '-rotate-45 -translate-y-2': isMenuOpen,
              'translate-y-0': !isMenuOpen,
            }"
            class="w-8 h-1 bg-secondary rounded transition-transform duration-300"
          ></div>
        </button>
      </div>
    </div>

    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-1"
    >
      <div
        v-if="isMenuOpen"
        class="absolute left-1/2 z-10 mt-8 flex w-screen max-w-max -translate-x-1/2 px-4"
      >
        <div
          class="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-primary-dark text-sm/6 ring-1 shadow-lg ring-gray-900/5"
        >
          <div class="p-4">
            <div
              v-for="(item, index) in menuItems"
              :key="index"
              class="group relative flex gap-x-6 rounded-lg p-4 hover:bg-secondary"
            >
              <div
                class="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-primary group-hover:bg-primary"
              >
                <i :class="item.iconClass + ' flex items-center justify-center'" aria-hidden="true"></i>
              </div>
              <div>
                <a
                  :href="item.link"
                  class="font-semibold text-secondary group-hover:text-secondary-dark"
                >
                  {{ item.title }}
                  <span class="absolute inset-0"></span>
                </a>
                <p class="mt-1 text-secondary group-hover:text-secondary-dark">{{ item.description }}</p>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 divide-x divide-primary bg-primary-dark">
            <a
              v-for="(cta, index) in callsToAction"
              :key="index"
              :href="cta.link"
              class="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-secondary hover:text-secondary"
            >
              <i :class="cta.iconClass + ' flex items-center justify-center'" aria-hidden="true"></i>
              <template v-if="cta.additionalIcons">
                <i
                  v-for="(icon, idx) in cta.additionalIcons"
                  :key="idx"
                  :class="icon.iconClass + ' flex items-center justify-center'"
                  aria-hidden="true"
                ></i>
              </template>
              {{ cta.text }}
            </a>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import brandLogo from '/public/logos/brand-logo-menu.png';

const isMenuOpen = ref(false);
const isScrolled = ref(false);
const menuRef = ref(null);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleClickOutside = (event) => {
  if (menuRef.value && !menuRef.value.contains(event.target)) {
    isMenuOpen.value = false;
  }
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
  window.removeEventListener("scroll", handleScroll);
});

const menuItems = [
  {
    title: "Conócenos",
    description: "Quiénes somos, nuestros valores y por qué somos la mejor opción.",
    link: "#",
    iconClass: "fas fa-users size-6 text-secondary group-hover:text-secondary",
  },
  {
    title: "Soluciones",
    description: "Administración, transparencia, mantenimiento, atención y tecnología.",
    link: "#",
    iconClass: "fas fa-cogs size-6 text-secondary group-hover:text-secondary",
  },
  {
    title: "FAQ",
    description: "Respuestas a dudas sobre nuestros servicios y procesos.",
    link: "#",
    iconClass: "fas fa-question-circle size-6 text-secondary group-hover:text-secondary",
  },
  {
    title: "Blog",
    description: "Consejos e información sobre administración residencial.",
    link: "#",
    iconClass: "fas fa-blog size-6 text-secondary group-hover:text-secondary",
  },
  {
    title: "Contacto ",
    description: "Solicita información o agenda una consulta",
    link: "#",
    iconClass: "fas fa-envelope size-6 text-secondary group-hover:text-secondary",
  },
];

const callsToAction = [
  {
    text: "",
    link: "#",
    iconClass: "",
    additionalIcons: [
    {
        iconClass: "fa-brands fa-facebook size-7 flex-none text-secondary",
      },
      {
        iconClass: "fa-brands fa-instagram size-7 flex-none text-secondary",
      },
      {
        iconClass: "fa-brands fa-square-x-twitter size-7 flex-none text-secondary",
      },
      {
        iconClass: "fa-brands fa-youtube size-7 flex-none text-secondary",
      }
    ],
  },
  {
    text: "9983058106",
    link: "#",
    iconClass: "fa-brands fa-whatsapp size-5 flex-none text-green-400",
  },
];
</script>
