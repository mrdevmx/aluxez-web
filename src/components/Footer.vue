<template>
    <footer class="relative flex flex-wrap h-64 bg-primary-dark text-secondary text-center py-8 shadow-inner">
      <!-- Patrón de fondo -->
      <div class="absolute w-full inset-0 bg-[url('/patterns/pattern-footer.png')] bg-[length:20%] opacity-10"></div>
  
      <div class="relative w-full items-center justify-center flex flex-col space-y-4">
        <!-- Links principales -->
        <nav class="mb-4">
          <ul class="flex justify-center space-x-6 text-sm">
            <li v-for="link in mainLinks" :key="link.text">
              <a :href="link.href" class="hover:text-secondary-light transition">{{ link.text }}</a>
            </li>
          </ul>
        </nav>
  
        <!-- Iconos de redes sociales -->
        <div class="flex justify-center space-x-6 mb-4 text-xl">
          <a v-for="icon in socialIcons" :key="icon.name" :href="icon.link" class="hover:text-secondary-light transition">
            <i :class="icon.class"></i>
          </a>
        </div>
  
        <!-- Copyright -->
        <p class="text-sm">&copy; {{ year }} Aluxez Administración. All rights reserved.</p>
      </div>
    </footer>
  </template>

<style scoped>
/* Usa FontAwesome para iconos */
.fab {
  font-size: 1.25rem;
}
</style>

<script setup>
const year = new Date().getFullYear();

const mainLinks = [
  { text: 'Conócenos', href: '#' },
  { text: 'Soluciones', href: '#' },
  { text: 'FAQ', href: '#' },
  { text: 'Blog', href: '#' },
  { text: 'Contacto', href: '#' }
];

const socialIcons = [
  { name: 'Facebook', link: 'https://www.facebook.com/', class: 'fab fa-facebook-f' },
  { name: 'Instagram', link: 'https://www.instagram.com/', class: 'fab fa-instagram' },
  { name: 'Twitter', link: 'https://x.com/?lang=es', class: 'fab fa-x-twitter' },
  { name: 'YouTube', link: 'https://www.youtube.com/', class: 'fab fa-youtube' }
];
</script>