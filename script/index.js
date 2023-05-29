const navbarTop = [
  {
    id: navbarTop,
    link1:  "./pages/index.html",
    link2: "./pages/books.html",
    link3: "./pages/about.html",
    name1: "Home",
    name2: "Buy Now",
    name3: "About Us",
  },
];

let dispNavTop = document.getElementById("navbarTop");
navbarTop.forEach((data) => {
  dispNavTop.innerHTML += `
  <ul class="nav">
  <li class="nav-item">
    <a class="nav-link" href="${data.link1}$">${data.name1}$</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="${data.link2}$">${data.name2}$</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="${data.link3}$">${data.name3}$</a>
  </li>
</ul> `;
});


