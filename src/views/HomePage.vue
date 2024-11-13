<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Welcome to My Portfolio!</h1>
        <p>Your trusted software engineer.</p>
        <router-link to="/about" class="cta-button">Learn More</router-link>
      </div>
    </section>

    <!-- About Section -->
    <section class="about">
      <div class="about-content">
        <div class="about-image">
          <img src="@/assets/logo.png" alt="Profile" />
        </div>
        <div class="about-paragraph">
          <p>
            Hello! I’m Tsedey Mekonnen, a passionate software engineer with expertise in developing
            scalable web applications. I love coding, problem-solving, and creating user-friendly
            interfaces. Welcome to my portfolio, where you can explore my projects and learn more
            about my work!
          </p>
        </div>
      </div>
    </section>

    <!-- Links Section -->
    <section class="links">
      <h2>Explore More</h2>
      <div class="link-circles">
        <router-link to="/experience" class="link-circle">Experience</router-link>
        <router-link to="/about" class="link-circle">About</router-link>
        <router-link to="/contact" class="link-circle">Contact</router-link>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Hero Section */
.hero {
  background-image: url('@/assets/logo2.png'); /* Update the background as needed */
  background-size: cover;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  position: relative;
}

.hero-content {
  background-color: rgba(0, 51, 102, 0.7); /* Dark blue overlay */
  padding: 30px 50px;
  border-radius: 12px;
  text-align: center;
  animation: fadeIn 1.5s ease; /* Fade-in effect */
}

.hero-content h1 {
  font-size: 2.8rem;
  margin-bottom: 10px;
}

.hero-content p {
  font-size: 1.2rem;
}

.cta-button {
  display: inline-block;
  background-color: #ff5e5e; /* CTA button color */
  padding: 10px 20px;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #ff7b7b;
}

/* About Section */
.about {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px auto;
  max-width: 95%;
  background-color: #f1f5f9;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.about-content {
  display: flex;
  align-items: center;
  width: 100%;
}

.about-image img {
  width: 350px;
  height: 350px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 25px;
  border: 4px solid #009688; /* Adds a border for styling */
}

.about-paragraph {
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  width: 60%;
}

.about-paragraph p {
  font-size: 1.1rem;
  line-height: 1.6;
}

/* Links Section */
.links {
  text-align: center;
  margin: 40px 0;
}

.links h2 {
  font-size: 1.8rem;
  color: #333333;
  margin-bottom: 15px;
}

.link-circles {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.link-circle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  color: white;
  font-size: 1rem;
  text-decoration: none;
  font-weight: bold;
  transition: transform 0.3s, background-color 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.link-circle:hover {
  transform: scale(1.1);
}

/* Different background colors for each link */
.link-circle:nth-child(1) {
  background-color: #2196F3; /* Blue */
}

.link-circle:nth-child(2) {
  background-color: #FF5722; /* Orange */
}

.link-circle:nth-child(3) {
  background-color: #4CAF50; /* Green */
}

/* Keyframes for animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Responsive styling for mobile view */
@media (max-width: 768px) {
  .about-content {
    flex-direction: column;
    text-align: center;
  }

  .about-image img {
    margin: 0 auto 20px auto;
    width: 250px;
    height: 250px;
  }

  .about-paragraph {
    width: 100%;
  }
}
</style>
