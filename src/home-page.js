import heroImage from "../images/hero-image.png";
import houseSpecialImage from "../images/house-special.png";
import saltPepperBoxImage from "../images/salt-pepper-box.png";
import singaporeNoodlesImage from "../images/singapore-noodles.png";

function loadHome() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    createHero(content);
    createPopularDishes(content);
    const sliderElements = createCustomerReviews(content);
    handleReviewSlider(sliderElements, 5000);
}

function createHero(container) {
    const heroContainer = document.createElement("div");
    const heroText = document.createElement("div");
    const heroHeader = document.createElement("h1");
    const heroPara = document.createElement("p");

    heroHeader.textContent = "Chinese Takeaway in London"
    heroPara.textContent = "Freshly prepared dishes, made daily with authentic flavours. Quick delivery and collection available."

    const heroImg = document.createElement("img");
    heroImg.src = heroImage;
    heroImg.alt = "Picture of sweet and sour chicken";

    heroContainer.id = "hero";
    heroText.id = "heroText";

    container.appendChild(heroContainer);
    heroContainer.appendChild(heroText);
    heroText.append(heroHeader, heroPara);
    heroContainer.appendChild(heroImg);
}

function createPopularDishes(container) {
  const pdContainer = document.createElement("div");
  pdContainer.id = "popularDishes";

  const pdHeader = document.createElement("h1");
  pdHeader.textContent = "Popular Dishes";

  const pdDishContainer = document.createElement("div");
  pdDishContainer.id = "dishes";

  const dishes = [
        {
        img: houseSpecialImage,
        alt: "House Special Fried Rice",
        title: "House Special Fried Rice",
        desc: "Fragrant fried rice tossed with tender chicken, succulent prawns, and fresh vegetables, finished with a touch of soy sauce and aromatic spices."
        },
        {
        img: saltPepperBoxImage,
        alt: "Salt and Pepper Box",
        title: "Salt and Pepper Box",
        desc: "A crispy mix of chicken, wings, and chips, lightly seasoned with salt, pepper, and chili, served with a small pot of tangy BBQ sauce."
        },
        {
        img: singaporeNoodlesImage,
        alt: "Singapore Vermicelli Noodles",
        title: "Singapore Vermicelli Noodles",
        desc: "Thin vermicelli noodles stir-fried with chicken, prawns, colorful peppers, carrots, and spring onions, lightly spiced with golden curry powder."
        }
  ];

  dishes.forEach(dish => {
    const dishDiv = document.createElement("div");
    dishDiv.classList.add("dish");

    const img = document.createElement("img");
    img.src = dish.img;
    img.alt = dish.alt;

    const title = document.createElement("h3");
    title.textContent = dish.title;

    const desc = document.createElement("div");
    desc.textContent = dish.desc;

    dishDiv.append(img, title, desc);
    pdDishContainer.appendChild(dishDiv);
  });

  pdContainer.append(pdHeader, pdDishContainer);
  container.appendChild(pdContainer);
}

// Create Customer Reviews

function createCustomerReviews(container) {
  const crContainer = document.createElement("div");
  crContainer.id = "customer-reviews";

  const crHeader = document.createElement("h1");
  crHeader.textContent = "What Our Customers Say";

  const reviewSlider = document.createElement("div");
  reviewSlider.classList.add("review-slider");

  crContainer.append(crHeader, reviewSlider);

  const reviewsData = [
    { 
        text: "Absolutely loved the Salt & Pepper Box!", 
        stars: "★★★★★", 
        author: "- Sarah M." 
    },
    { 
        text: "House Special Fried Rice was perfect.", 
        stars: "★★★★☆", 
        author: "- James L." 
    },
    { 
        text: "Singapore Vermicelli Noodles had the perfect spice balance.",
        stars: "★★★★★",
        author: "- Priya K." 
    },
    { 
        text: "Friendly service and the food quality is consistent.",
        stars: "★★★★☆",
        author: "- Michael R." 
    }
  ];

  const reviews = [];

  reviewsData.forEach((reviewData, index) => {
    const reviewDiv = document.createElement("div");
    reviewDiv.classList.add("review");
    if (index === 0) reviewDiv.classList.add("active");

    const reviewText = document.createElement("p");
    reviewText.textContent = reviewData.text;

    const stars = document.createElement("div");
    stars.classList.add("stars");
    stars.textContent = reviewData.stars;

    const author = document.createElement("h4");
    author.textContent = reviewData.author;

    reviewDiv.append(reviewText, stars, author);
    reviewSlider.appendChild(reviewDiv);
    reviews.push(reviewDiv);
  });

  const reviewButtons = document.createElement("div");
  reviewButtons.classList.add("review-nav");

  const prevBtn = document.createElement("button");
  prevBtn.id = "prev";
  prevBtn.textContent = "❮";

  const nextBtn = document.createElement("button");
  nextBtn.id = "next";
  nextBtn.textContent = "❯";

  reviewButtons.append(prevBtn, nextBtn);
  crContainer.appendChild(reviewButtons);

  container.appendChild(crContainer);

  return { reviews, prevBtn, nextBtn };
}

// Logic to handle review slider

function handleReviewSlider({ reviews, prevBtn, nextBtn }, interval = 5000) {
  let currentIndex = 0;

  function showReview(index) {
    reviews.forEach((rev, i) => rev.classList.toggle("active", i === index));
  }

  function startAutoSlide() {
    return setInterval(() => {
      currentIndex = (currentIndex + 1) % reviews.length;
      showReview(currentIndex);
    }, interval);
  }

  let autoSlide = startAutoSlide();

  function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = startAutoSlide();
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    showReview(currentIndex);
    resetAutoSlide(); 
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % reviews.length;
    showReview(currentIndex);
    resetAutoSlide(); 
  });
}






export { loadHome }; 