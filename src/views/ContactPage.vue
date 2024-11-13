<template>
  <div class="contact">
    <div class="content">
      <h2>Contact Me</h2>
      
      <!-- Profile Image -->
      <div class="profile-image">
        <img src="@/assets/logo.png" alt="Tsedey Mekonnen">
      </div>

      <!-- Contact Links with Icons -->
      <div class="contact-card">
        <p>If you have any questions or would like to get in touch, feel free to reach out via the links below:</p>

        <ul class="contact-links">
          
          <li><i class="fas fa-envelope"></i> Email: <a href="mailto:tsedey1993@gmail.com">tsedey1993@gmail.com</a></li>
          <li><i class="fab fa-linkedin"></i> LinkedIn: <a href="https://www.linkedin.com/in/yourprofile" target="_blank">Tsedey Mekonnen</a></li>
          <li><i class="fab fa-github"></i> GitHub: <a href="https://github.com/Tsedeymekonnen" target="_blank">Tsedey Mekonnen</a></li>
          <li><i class="fas fa-phone"></i> Phone: <a href="tel:+1234567890">+125 962828265</a></li>
        </ul>
      </div>

      <!-- Optional Call to Action Button -->
      <div class="cta">
        <button @click="openEmail">Get in Touch</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  methods: {
    openEmail() {
      window.location.href = 'mailto:tsedey1993@gmail.com';
    }
  }
};
</script>

<style scoped>
.contact {
  padding: 50px 20px;
  color: #ffffff;
  background-image: url('@/assets/background.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 100vh;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: rgba(0, 0, 0, 0.5); /* Darker overlay */
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

h2 {
  font-size: 2.4rem;
  color: #ffffff;
  text-align: center;
}

p {
  font-size: 1.1rem;
  color: #0e0d0d;
  line-height: 1.6;
  margin-bottom: 20px;
}

.profile-image img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 5px solid #ffffff;
  margin-bottom: 20px;
}

.contact-card {
  width: 50%;
  padding: 25px;
  background-color: #57d0d4;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-5px);
  background-color: #90a1a1;
}

.contact-links {
  list-style: none;
  padding: 0;
}

.contact-links li {
  font-size: 1.1rem;
  margin: 10px 0;
}

.contact-links a {
  color: #00796b;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-links a:hover {
  color: #004d40;
}

.contact-links i {
  margin-right: 10px;
  color: #00796b;
}

.cta button {
  background-color: #57d0d4;
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta button:hover {
  background-color: #004d40;
}
</style>
