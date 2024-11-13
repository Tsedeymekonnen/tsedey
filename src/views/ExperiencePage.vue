<template>
  <div class="experience">
    <h2>My Experience</h2>
    <div class="card-container">
      <div class="card" v-for="(exp, index) in experiences" :key="index">
        <div class="card-header">
          <h3 class="card-title">{{ exp.title }}</h3>
          <span class="card-company">{{ exp.company }}</span>
        </div>
        <p class="card-description">{{ exp.description }}</p>
        <a v-if="exp.link" :href="exp.link" class="card-link" target="_blank" rel="noopener noreferrer">
          Learn More
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExperiencePage',
  data() {
    return {
      experiences: [
        {
          title: 'Enterprise System Expert / ERP Implementer',
          company: 'Aug 2024 At Abbahawa Trading PLC',
          description: 'Implement and manage ERP solutions, optimizing business processes across various departments. Provide system training, troubleshoot issues, and ensure seamless integration with existing infrastructure.',
          link: ''
        },
        {
          title: 'Final year project face recognition attendance system',
          company: 'APR 2024',
          description: 'developed a face recognition attendance system as part of our final project. The backend was implemented using Python, and we used a Convolutional Neural Network (CNN) model for the face recognition training. The frontend was built with React.',
          link: ''
        },
        {
          title: 'Internship at TechVille Technology',
          company: 'FEB 2024',
          description: 'Served as a Project Manager and Backend Developer.Demonstrated strong project management abilities and technical expertise',
          link: ''
        },
        {
          title: 'internship at MSS Company',
          company: 'SEP 2022 - APR 2023',
          description: 'Developed tender platform to streamline procurement process and enhance bidding efficiency.Utilized React and Laravel for frontend and backend development',
          link: 'https://cheretanet.com/'
        },
        {
          title: 'Mobile APP',
          company: 'SEP 2022 - APR 2023',
          description: 'Developed Android attendance app for college,enabling efficient monitoring of student presence and permissions.Co-led smart digital school bell project,automating end-of-period alerts and displaying class information.',
          link: ''
        },
        {
          title: 'IETP',
          company: 'SEP 2022 - APR 2023',
          description: 'Co-led smart digital school bell project,automating end-of-period alerts and displaying class information.',
          link: 'https://sites.google.com/view/group76/team'
        },
      ],
    };
  },
};
</script>

<style scoped>
.experience {

  padding: 60px 0;
  max-width:100% ;
  text-align: center;
  color: #ffffff; /* Light text to contrast with background */
  background-image: url('@/assets/background.jpg'); /* Replace with your background image */
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* Makes the background stay in place when scrolling */
  background-repeat: no-repeat;
  position: relative;
}

.experience::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6); /* Semi-transparent overlay */
  z-index: 1;
}

h2 {
  font-size: 2.2rem;
  color: #ffffff;
  margin-bottom: 30px;
  font-weight: bold;
  z-index: 2;
  position: relative;
}

.card-container {
 
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
  position: relative;
  z-index: 2;
}

.card {
  background-color: rgba(255, 255, 255, 0.9); /* Semi-transparent white for readability */
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  width: 300px;
  padding: 25px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: left;
}

.card:hover {
  transform: translateY(-7px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.25);
}

.card-header {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

.card-title {
  font-size: 1.4rem;
  font-weight: 600;
  color: #0a3d62;
  margin-bottom: 5px;
}

.card-company {
  font-size: 1rem;
  color: #777;
  font-weight: 500;
}

.card-description {
  font-size: 0.95rem;
  color: #333;
  line-height: 1.6;
  margin-bottom: 20px;
}

.card-link {
  display: inline-block;
  color: #0a84ff;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s ease;
}

.card-link:hover {
  color: #0056b3;
}
</style>
