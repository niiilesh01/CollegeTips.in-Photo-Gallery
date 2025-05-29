    const categories = ["All", "Team Vibes", "Work Hard, Play Hard", "Behind-The-Scenes"];
    const galleryImages = [
      { url: "https://collegetips.in/images/header-image-1.jpg", category: "Team Vibes", caption: "Captured Chaos" },
      { url: "https://collegetips.in/images/night-party.jpg", category: "Work Hard, Play Hard", caption: "Late Night Laughs & Lights" },
      { url: "https://collegetips.in/images/wedding.jpg", category: "Work Hard, Play Hard", caption: "When Workmates Celebrate Love" },
      { url: "https://collegetips.in/images/birthday.jpg", category: "Work Hard, Play Hard", caption: "A Birthday Bash to Remember!" },
      { url: "https://collegetips.in/images/about-header-image1.jpg", category: "Behind-The-Scenes", caption: "Magic in the Making" },
      { url: "https://collegetips.in/images/about-header-image2.jpg", category: "Behind-The-Scenes", caption: "Candid Creativity at Work" },
      { url: "https://collegetips.in/images/about-header-image4.jpg", category: "Behind-The-Scenes", caption: "Teamwork Behind the Lens" },
      { url: "https://collegetips.in/images/about-header-image3.jpg", category: "Behind-The-Scenes", caption: "The Energy That Drives Us" }
    ];

    const categoryButtons = document.getElementById("category-buttons");
    const galleryContainer = document.getElementById("gallery-container");
    let currentCategory = "All";

    function renderButtons() {
      categories.forEach(cat => {
        const btn = document.createElement("button");
        btn.textContent = cat;
        btn.onclick = () => {
          currentCategory = cat;
          document.querySelectorAll(".buttons button").forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          renderGallery();
        };
        if (cat === "All") btn.classList.add("active");
        categoryButtons.appendChild(btn);
      });
    }

    function renderGallery() {
      galleryContainer.innerHTML = "";
      const imagesToShow = currentCategory === "All" ? galleryImages : galleryImages.filter(img => img.category === currentCategory);

      imagesToShow.forEach(img => {
        const card = document.createElement("div");
        card.className = "card";

        const image = document.createElement("img");
        image.src = img.url;
        image.alt = img.caption;
        image.onclick = () => openModal(img);

        const caption = document.createElement("div");
        caption.className = "caption";
        caption.textContent = img.caption;

        card.appendChild(image);
        card.appendChild(caption);
        galleryContainer.appendChild(card);
      });
    }

    function openModal(img) {
      const modal = document.getElementById("modal");
      const modalImg = document.getElementById("modal-img");
      const modalCaption = document.getElementById("modal-caption");
      modal.style.display = "flex";
      modalImg.src = img.url;
      modalCaption.textContent = img.caption;
    }

    document.getElementById("modal-close").onclick = function () {
      document.getElementById("modal").style.display = "none";
    };

    window.onclick = function (event) {
      if (event.target === document.getElementById("modal")) {
        document.getElementById("modal").style.display = "none";
      }
    };

    renderButtons();
    renderGallery();  
    // Add to bottom of script.js
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      document.getElementById("modal").style.display = "none";
    }
  });
  