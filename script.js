/* This is home page */

const enrollForm = document.getElementById("enrollForm");

if (enrollForm) {
  enrollForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("studentName").value;
    const age = document.getElementById("studentAge").value;
    const grade = document.getElementById("gradeLevel").value;

    const error = document.getElementById("error");

    if (name === "" || age === "" || grade === "") {
      error.textContent = "Please fill all fields";
      return;
    }

    error.textContent = "";

    const student = {
      name,
      age,
      grade,
    };

    document.getElementById("welcomeMessage").textContent =
      `Welcome ${student.name} to Bright Future School!`;

    document.getElementById("studentSummary").innerHTML = `
      <h3>Student Summary</h3>
      <p>Name: ${student.name}</p>
      <p>Age: ${student.age}</p>
      <p>Grade: ${student.grade}</p>
      `;
  });
}

/* This is the profile page */

const contactInfo = document.getElementById("contactInfo");

const showEmail = document.getElementById("showEmail");

if (showEmail) {
  showEmail.addEventListener("click", function () {
    contactInfo.textContent = "Email: mariamk55@gmail.com";
  });

  document.getElementById("showPhone").addEventListener("click", function () {
    contactInfo.textContent = "Phone: +93 78965439";
  });

  document.getElementById("hideInfo").addEventListener("click", function () {
    contactInfo.textContent = "";
  });

  document
    .getElementById("updateStatus")
    .addEventListener("click", function () {
      const newStatus = document.getElementById("newStatus").value;

      if (newStatus !== "") {
        document.getElementById("studentStatus").textContent =
          `Status: ${newStatus}`;
      }
    });
}

/* This is the courses pagr */

const courseContainer = document.getElementById("courseContainer");

if (courseContainer) {
  let courses = [
    {
      name: "English",
      instructor: "Mr. Mohamad",
      grade: "10",
      description: "Introduction to programing and web development.",
      image: "istockphoto-1438185814-612x612.jpg",
    },

    {
      name: " Computer Science",
      instructor: "Ms. Sadaf",
      grade: "11",
      description: "Learn grammar, reading, and writing skills.",
      image: "depositphotos_68564721-Beautiful-young-student-posing.jpg",
    },
  ];

  function renderCourses(courseList) {
    courseContainer.innerHTML = "";

    for (let course of courseList) {
      courseContainer.innerHTML += `
        <div class="course-card">

          <img src="${course.image}">

          <h3>${course.name}</h3>

          <p>${course.instructor}</p>

          <button
            class="detailsBtn"
            data-name="${course.name}"
            data-grade="${course.grade}"
            data-description="${course.description}"
          >
            View Course Details
          </button>

        </div>
        `;
    }

    addDetailsEvents();
  }

  renderCourses(courses);

  function addDetailsEvents() {
    const buttons = document.querySelectorAll(".detailsBtn");

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const name = this.dataset.name;
        const grade = this.dataset.grade;
        const description = this.dataset.description;

        document.getElementById("courseDetails").innerHTML = `
          <h2>${name}</h2>
          <p>Grade: ${grade}</p>
          <p>${description}</p>
          `;
      });
    });
  }

  /* I add course */

  document
    .getElementById("courseForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("courseName").value;

      const instructor = document.getElementById("instructor").value;

      const grade = document.getElementById("courseGrade").value;

      const description = document.getElementById("description").value;

      const image = document.getElementById("image").value;

      if (
        name === "" ||
        instructor === "" ||
        grade === "" ||
        description === "" ||
        image === ""
      ) {
        alert("Please fill all fields");
        return;
      }

      const newCourse = {
        name,
        instructor,
        grade,
        description,
        image,
      };

      courses.push(newCourse);

      renderCourses(courses);

      this.reset();
    });

  /* This the filter buttons */

  const filters = document.querySelectorAll(".filter");

  filters.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const grade = this.dataset.grade;

      if (grade === "all") {
        renderCourses(courses);
      } else {
        const filtered = courses.filter(function (course) {
          return course.grade === grade;
        });

        renderCourses(filtered);
      }
    });
  });
}

/* This is the contact page */

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("contactName").value;

    const email = document.getElementById("contactEmail").value;

    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
      alert("Please fill all fields");
    } else {
      document.getElementById("contactResult").textContent =
        "Message sent successfully!";

      this.reset();
    }
  });
}
