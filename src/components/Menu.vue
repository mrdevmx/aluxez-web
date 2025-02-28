<template>
  <div
    :class="[
      'fixed top-0 z-10 flex w-screen transition-all duration-300 shadow-sm',
      isScrolled ? 'bg-primary-dark h-[80px] shadow-lg' : 'h-[128px]',
    ]"
    ref="menuRef"
  >
    <div
      class="absolute w-screen h-auto flex justify-between items-center px-20"
    >
      <!-- Logo de la marca -->
      <div class="flex flex-row items-center w-screen">
        <img
          src="/logos/brand-logo-menu.png"
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
                <svg
                  :class="item.iconClass"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path :d="item.iconPath"></path>
                </svg>
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
          <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-primary-dark">
            <a
              v-for="(cta, index) in callsToAction"
              :key="index"
              :href="cta.link"
              class="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-secondary hover:text-secondary"
            >
              <svg
                :class="cta.iconClass"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path :d="cta.iconPath"></path>
              </svg>
              <template v-if="cta.additionalIcons">
                <svg
                  v-for="(icon, idx) in cta.additionalIcons"
                  :key="idx"
                  :class="icon.iconClass"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path :d="icon.iconPath"></path>
                </svg>
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
    iconClass: "size-6 text-secondary group-hover:text-secondary",
    iconPath:
      "M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z",
  },
  {
    title: "Soluciones",
    description: "Administración, transparencia, mantenimiento, atención y tecnología.",
    link: "#",
    iconClass: "size-6 text-secondary group-hover:text-secondary",
    iconPath:
      "M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z",
  },
  {
    title: "FAQ",
    description: "Respuestas a dudas sobre nuestros servicios y procesos.",
    link: "#",
    iconClass: "size-6 text-secondary group-hover:text-secondary",
    iconPath:
      "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z",
  },
  {
    title: "Blog",
    description: "Consejos e información sobre administración residencial.",
    link: "#",
    iconClass: "size-6 text-secondary group-hover:text-secondary",
    iconPath:
      "M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z",
  },
  {
    title: "Contacto ",
    description: "Solicita información o agenda una consulta",
    link: "#",
    iconClass: "size-6 text-secondary group-hover:text-secondary",
    iconPath:
      "M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75",
  },
];

const callsToAction = [
  {
    text: "",
    link: "#",
    iconClass: "size-5 flex-none text-red-400",
    iconPath:
      "M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm6.39-2.908a.75.75 0 0 1 .766.027l3.5 2.25a.75.75 0 0 1 0 1.262l-3.5 2.25A.75.75 0 0 1 8 12.25v-4.5a.75.75 0 0 1 .39-.658Z",
    additionalIcons: [
      {
        iconClass: "size-5 flex-none text-blue-400",
        iconPath:
          "M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm6.39-2.908a.75.75 0 0 1 .766.027l3.5 2.25a.75.75 0 0 1 0 1.262l-3.5 2.25A.75.75 0 0 1 8 12.25v-4.5a.75.75 0 0 1 .39-.658Z",
      },
      {
        iconClass: "size-5 flex-none text-yellow-400",
        iconPath:
          "M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm6.39-2.908a.75.75 0 0 1 .766.027l3.5 2.25a.75.75 0 0 1 0 1.262l-3.5 2.25A.75.75 0 0 1 8 12.25v-4.5a.75.75 0 0 1 .39-.658Z",
      },
    ],
  },
  {
    text: "9983058106",
    link: "#",
    iconClass: "size-5 flex-none text-green-400",
    iconPath:
      "M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm6.39-2.908a.75.75 0 0 1 .766.027l3.5 2.25a.75.75 0 0 1 0 1.262l-3.5 2.25A.75.75 0 0 1 8 12.25v-4.5a.75.75 0 0 1 .39-.658Z",
  },
];
</script>
