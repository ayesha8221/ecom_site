// let navbarTop = [
//   {
//     id: navbarTop,
//     link1:  "",
//     link2: "",
//     link3: "",
//     name1: "Home",
//     name2: "Buy Now",
//     name3: "About Us",
//   },
// ];

// let dispNavTop = document.getElementById("navbarTop");
// navbarTop.forEach((data) => {
//   dispNavTop.innerHTML += `
//   <ul class="nav">
//   <li class="nav-item">
//     <a class="nav-link" href="${data.link1}$">${data.name1}$</a>
//   </li>
//   <li class="nav-item">
//     <a class="nav-link" href="${data.link2}$">${data.name2}$</a>
//   </li>
//   <li class="nav-item">
//     <a class="nav-link" href="${data.link3}$">${data.name3}$</a>
//   </li>
// </ul> `;
// });

let genre = [
  {
    name1: "Cooking",
    name2: "Children's Books",
    name3: "Classics",
  }
];

let dispGenre = document.getElementById('genre');
genre.forEach((data) => {
   dispGenre.innerHTML += `
  <ul class="nav nav-pills">
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Genre</a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="${data.link1}">${data.name1}</a></li>
      <li><a class="dropdown-item" href="${data.link2}">${data.name2}</a></li>
      <li><a class="dropdown-item" href="${data.link3}">${data.name3}</a></li>

    </ul>
  </li>
</ul>
`;
});
 
let books = [
  {
    section: "Cooking",
    img1: "/assets/images-removebg-preview (2).png",
    title1: "The Woks Of Life <br> Ben Afflec",
    text1: "R180",
    img2: "/assets/download-removebg-preview (2).png",
    title2: "<br>Recipe Book <br> Jennifer Goodwin",
    text2: "R70",
    img3: "/assets/cooking.png",
    img4: "/assets/cooking2.png",
    title3: "<br><br>How to Cook Everything <br> Matt Bittman",
    title4: "Slow Cooker Recipe book <br> Greg Whitman",
    text3: "R50",
    text4: "R30"

  },
  {
    section: "Children's Books",
    img1: "/assets/download-removebg-preview (3).png",
    img2: "/assets/download-removebg-preview (4).png",
    img3: "/assets/images-removebg-preview (3).png",
    img4: "/assets/children.png",
    title1: "In Your own Backyard <br> Jane Doe",
    title2: "<br><br>My Toddlers First Words <br> Susan Downey",
    title3: "<br><br><br>In Your Backyard 2 <br> Jane Doe",
    title4: "<br>The Circus Jolly <br> Jenny Han",
    text1: "R120",
    text2: "R50",
    text3: "R130",
    text4: "R200"
  },
  {
    section: "Classics",
    img1: "/assets/9781435159631_p0_v1_s1200x630-removebg-preview.png",
    img2: "/assets/tumblr_8889a38e49662a302d247670f81cf2c8_6f9b9fc9_1280-removebg-preview.png",
    img3: "/assets/GUEST_24c667e9-99a4-473a-848b-fb7e3a2089de-removebg-preview.png",
    img4: "/assets/images-removebg-preview.png",
    title1: "Pride and Prejudice <br> Jane Austen",
    title2: "<br><br><br>Jane Eyre <br> Jane Austen",
    title3: "<br>Harry Potter <br> JK Rowling",
    title4: "<br>A Court of Thorns and Roses <br> Saarah J Maas",
    text1: "R250",
    text2: "R200",
    text3: "R120",
    text4: "R320"
  }
];

let dispBooks = document.getElementById('books');
books.forEach((data) => {
  dispBooks.innerHTML += `
  <hr><h3>${data.section}</h3><hr>
  <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active d-flex justify-content-center align-items-center ">
    <div class="card" style="width: 15rem;">
     <img src="${data.img1}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"><strong>${data.title1}</strong></h5>
      <p class="card-text">${data.text1}</p>
    </div>
  </div>
  <div class="card" style="width: 15rem;">
  <img src="${data.img2}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title"><strong>${data.title2}</strong></h5>
    <p class="card-text">${data.text2}</p>
  </div>
</div>
<div class="card" style="width: 15rem;">
  <img src="${data.img3}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title"><strong>${data.title3}</strong></h5>
    <p class="card-text">${data.text3}</p>
  </div>
</div>
<div class="card" style="width: 15rem;">
  <img src="${data.img4}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title"><strong>${data.title4}</strong></h5>
    <p class="card-text">${data.text4}</p>
  </div>
</div>
    </div>
    </div>
  </div>
  `;
});

