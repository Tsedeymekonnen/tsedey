<template>
  <div class="about">
    <div class="content">
      <img src="@/assets/logo.png" alt="Profile Photo" class="profile-img" />
      <div class="description">
        <h2>About Me</h2>
        <p>
          Hello! I’m Tsedey Mekonnen, a passionate Software Engineer dedicated to creating impactful and efficient software solutions. With a background in software engineering from Addis Ababa Science and Technology University, I specialize in building dynamic, scalable applications.
        </p>
        <p>
          My experience spans full-stack development, with a strong focus on frameworks like Vue.js, Django, and Laravel. I’ve contributed to various projects, enhancing workflows and tackling complex challenges in ERP and data management systems. I’m always excited to explore new technologies and deliver innovative solutions.
        </p>
        <p>
          Let’s connect and see how we can create something amazing together!
        </p>
        <a href="/Tsedey Mekonnen.pdf" download="Tsedey_Mekonnen_Resume.pdf" class="resume-btn">
  Download Resume
</a>
      </div>
    </div>

    <h3>Key Skills</h3>
    <div class="skills">
      <div class="skill-card" v-for="(skill, index) in skills" :key="index" :style="{ backgroundColor: skill.color }">
        {{ skill.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  data() {
    return {
      skills: [
        { name: 'Vue.js', color: '#41B883' },
        { name: 'Django', color: '#092E20' },
        { name: 'Laravel', color: '#FF2D20' },
        { name: 'MySQL', color: '#4479A1' },
        { name: 'JavaScript', color: '#F7DF1E' },
        { name: 'HTML & CSS', color: '#E34F26' },
        { name: 'Python', color: '#306998' },
        { name: 'Git & GitHub', color: '#181717' },
        { name: 'Node.js', color: '#68A063' },
        { name: 'RESTful APIs', color: '#4CAF50' },
      ],
    };
  },
};
</script>

<style scoped>
.about {
  padding: 50px 20px;
  color: #ffffff;
  background-image: url('@/assets/background.jpg'); /* Replace with your background image */
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 100vh;
}

.content {
  display: flex;
  align-items: center;
  gap: 30px;
  background-color: rgba(0, 0, 0, 0.5); /* Dark overlay for better readability */
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.profile-img {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
}

.description {
  max-width: 600px;
}

h2 {
  font-size: 2.4rem;
  color: #ffffff;
  margin-bottom: 20px;
  text-align: left;
}

p {
  font-size: 1.1rem;
  color: #e0e0e0;
  line-height: 1.6;
  margin-bottom: 15px;
}

.resume-btn {
  display: inline-block;
  padding: 12px 25px;
  margin-top: 20px;
  color: #ffffff;
  background-color: #3498db;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.resume-btn:hover {
  background-color: #2980b9;
}

h3 {
  font-size: 1.8rem;
  color: #ffffff;
  margin-top: 40px;
  text-align: center;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  margin-top: 15px;
}

.skill-card {
  padding: 15px 25px;
  color: #ffffff;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  min-width: 100px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}
@media (max-width: 768px) {
  .content {
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }

  .profile-img {
    width: 200px;
    height: 200px;
  }

  .description {
    max-width: 100%;
    text-align: center;
  }

  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
  }

  .resume-btn {
    width: 100%;
    padding: 10px;
    margin-top: 20px;
  }

  h3 {
    font-size: 1.6rem;
  }

  .skills {
    gap: 10px;
  }

  .skill-card {
    padding: 12px 20px;
    font-size: 0.9rem;
  }
}
</style>
