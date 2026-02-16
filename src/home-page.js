import heroImage from "../images/hero-image.png";
import houseSpecialImage from "../images/house-special.png";
import saltPepperBoxImage from "../images/salt-pepper-box.png";
import singaporeNoodlesImage from "../images/singapore-noodles.png";

function loadHome() {
  const content = document.getElementById("content");
  content.innerHTML = "";
  content.className = "home-page";

  createHero(content);
  createPopularDishes(content);
  const sliderElements = createCustomerReviews(content);
  handleReviewSlider(sliderElements, 5000);
  createFooter(content);
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

function createFooter(container) {
    const footerContainer = document.createElement("div");
    footerContainer.id = "footer"

    const footerData = [
        {
            title: "Address",
            iconPath: "M12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5M12,2A7,7 0 0,1 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,10 7,12 12,18.71C17,12 17,10 17,9A5,5 0 0,0 12,4Z",
            lines: ["12 Bamboo Street", "London", "SE10 9AA"]
        },
        {
            title: "Contact Us",
            iconPath: "M20,15.5C18.8,15.5 17.5,15.3 16.4,14.9C16.3,14.9 16.2,14.9 16.1,14.9C15.8,14.9 15.6,15 15.4,15.2L13.2,17.4C10.4,15.9 8,13.6 6.6,10.8L8.8,8.6C9.1,8.3 9.2,7.9 9,7.6C8.7,6.5 8.5,5.2 8.5,4C8.5,3.5 8,3 7.5,3H4C3.5,3 3,3.5 3,4C3,13.4 10.6,21 20,21C20.5,21 21,20.5 21,20V16.5C21,16 20.5,15.5 20,15.5M5,5H6.5C6.6,5.9 6.8,6.8 7,7.6L5.8,8.8C5.4,7.6 5.1,6.3 5,5M19,19C17.7,18.9 16.4,18.6 15.2,18.2L16.4,17C17.2,17.2 18.1,17.4 19,17.4V19Z",
            lines: ["+44 20 XXXX XXXX"]
        },
        {
            title: "Opening Hours",
            iconPath: "M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z",
            lines: ["5:00pm - 10:30pm", "Closed on Tuesday", "Opened on Bank Holidays"]
        }
    ];

    footerData.forEach(item => {
    const content = document.createElement("div");
    content.classList.add("footer-content");

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", item.iconPath);
    svg.appendChild(path);

    const info = document.createElement("div");
    info.classList.add("info");

    const h3 = document.createElement("h3");
    h3.textContent = item.title;
    info.appendChild(h3);

    item.lines.forEach(line => {
      const div = document.createElement("div");
      div.textContent = line;
      info.appendChild(div);
    });

    content.append(svg, info);
    footerContainer.appendChild(content);
    });

  container.appendChild(footerContainer);

}



export { createFooter };
export { loadHome }; 