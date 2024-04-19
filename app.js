const posts = document.getElementById("posts");
const users = document.getElementById("users");
const photos = document.getElementById("photos");
const todos = document.getElementById("todos");
const loader = document.getElementById("loader");
const error = document.getElementById("error");

posts.addEventListener("click", (e) => {
  e.preventDefault();
  function creatForm(data = formArr) {
    carlist.innerHTML = "";
    data.forEach(({ title, completed, body }) => {
      const li = document.createElement("li");

      li.classList.add("carP");

      if (completed) {
        li.classList.add("disabled");
      }
      carlist.innerHTML += `
    <div class="Post1_div">
    <div class="Post2_div">
    <p class="price">TITLE: ${title}</p>
    <p class="color">BODY: ${body} </p>
    </div>
    </div>
    `;
      carlist.appendChild(li);
    });
  }
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      loader.classList.remove("hidden");
      error.classList.add("hidden");
      creatForm(data);
    })
    .catch((err) => {
      loader.classList.add("hidden");
      error.classList.remove("hidden");
    });
});

// users

users.addEventListener("click", (e) => {
  e.preventDefault();
  function creatUser(data = formArr) {
    carlist.innerHTML = "";
    data.forEach(
      ({
        id,
        name,
        username,
        email,
        address,
        lat,
        lng,
        phone,
        website,
        company,
      }) => {
        const li = document.createElement("li");

        li.classList.add("cardUser");

        carlist.innerHTML += `
    <div class="user1_div">
    <div class="user2_div">
    <p class="">ID: ${id}</p>
    <p class="">NAME: ${name} </p>
    <p class="">USERNAME: ${username} </p>
    <p class="">email: ${email} </p>
    <p class="">ADDRESS: ${address} </p>
    <p class="">LAT: ${lat} </p>
    <p class="">LANG: ${lng} </p>
    <p class="">LANG: ${phone} </p>
    <p class="">LANG: ${website} </p>
    <p class="">LANG: ${company} </p>
    </div>
    </div>
    `;
        carlist.appendChild(li);
      }
    );
  }
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      loader.classList.remove("hidden");
      error.classList.add("hidden");
      creatUser(data);
    })
    .catch((err) => {
      loader.classList.add("hidden");
      error.classList.remove("hidden");
    });
});

// photos

photos.addEventListener("click", (e) => {
  e.preventDefault();
  function creatPhotos(data) {
    carlist.innerHTML = "";
    data.forEach(({ id, albumId, title, url, thumbnailUrl }) => {
      const li = document.createElement("li");

      li.classList.add("card");

      carlist.innerHTML += `
        <div class="Photo1_div">
    <div class="Photo2_div">
    <img class="cardPhoto" src= ${thumbnailUrl}/>
    <p class="price">Id: ${albumId}</p>
    <p>${title}</p>
    </div>
    </div>
    `;
      carlist.appendChild(li);
    });
  }
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => res.json())
    .then((data) => {
      loader.classList.remove("hidden");
      error.classList.add("hidden");
      creatPhotos(data.slice(0, 10));
    })
    .catch((err) => {
      loader.classList.add("hidden");
      error.classList.remove("hidden");
    });
});

// todos
todos.addEventListener("click", (e) => {
  e.preventDefault();
  function creatForm(data = formArr) {
    carlist.innerHTML = "";
    data.forEach(({ userId, title, completed }) => {
      const li = document.createElement("li");

      li.classList.add("cardT");

      if (completed) {
        li.classList.add("disabled");
      }
      carlist.innerHTML += `
    <div class="Todo1_div">
    <div class="Todo2_div">
    <p class="price">TITLE: ${title}</p>
    <p class="color">USER: ${userId} </p>
    </div>
    </div>
    `;
      carlist.appendChild(li);
    });
  }
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => {
      loader.classList.remove("hidden");
      error.classList.add("hidden");
      creatForm(data);
    })
    .catch((err) => {
      loader.classList.add("hidden");
      error.classList.remove("hidden");
    });
});
