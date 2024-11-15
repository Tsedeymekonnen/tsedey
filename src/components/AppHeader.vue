<template>
  <header class="header">
    <div class="logo">
      <router-link to="/">Tsedey Mekonnen</router-link>
    </div>
    <div class="menu-icon" @click="toggleMenu">
      <span v-if="!isMenuOpen">☰</span> <!-- Menu icon when closed -->
      <span v-else>✖</span> <!-- Close icon when open -->
    </div>
    <nav class="nav-links" :class="{ 'mobile-view': isMenuOpen }">
      <router-link to="/tsedey/" exact-active-class="active-link">Home</router-link>
      <router-link to="/experience" exact-active-class="active-link">Experience</router-link>
      <router-link to="/about" exact-active-class="active-link">About</router-link>
      <router-link to="/contact" exact-active-class="active-link">Contact</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
/* Header styling */
.header {
  background-color: #125e94; /* Deep blue background */
  color: white;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 10;
}

/* Logo styling with animation */
.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  cursor: pointer;
  transition: transform 0.3s ease; /* Smooth hover animation */
  animation: rotateIn 1.5s ease; /* Rotation on load */
}
.logo a {
  color: rgb(232, 232, 243);
}

.logo:hover {
  transform: scale(1.2) rotate(10deg); /* Zoom and slight rotation on hover */
  color: #ff7b7b; /* Lighten color on hover */
}

/* Rotation animation */
@keyframes rotateIn {
  0% {
    transform: rotate(-360deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

/* Menu icon styling */
.menu-icon {
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
}

/* Navigation links styling */
.nav-links {
  display: flex;
  gap: 25px;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease, transform 0.3s ease;
  font-size: 1rem;
  padding: 5px 0;
  position: relative;
}

/* Hover effect */
.nav-links a:hover {
  color: #ff7b7b; /* Lighter color on hover */
  transform: scale(1.05);
}

/* Active link styling */
.active-link {
  color: #ff7b7b; /* Highlight active link */
  font-weight: bold;
  border-bottom: 2px solid #ff7b7b; /* Add underline for active link */
}

/* Mobile view styles */
@media (max-width: 768px) {
  .nav-links {
    display: none;
    flex-direction: column;
    gap: 15px;
    position: absolute;
    top: 70px;
    right: 20px;
    background-color: #125e94;
    padding: 20px;
    border-radius: 5px;
  }

  .nav-links.mobile-view {
    display: flex;
  }

  .menu-icon {
    display: block;
    color: white;
  }
}
</style>
