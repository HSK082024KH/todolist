const form = document.getElementById("form");
const input = document.getElementById("input");
const message = document.getElementById("message");
const posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");
  formValidation();
});

let formValidation = () => {
  if (input.value === "") {
    message.innerHTML = "Tasks cannot be blank";
    console.log("failure");
  } else {
    console.log("success");
    message.innerHTML = "";
    acceptData();
  }
};

let data = {};

let acceptData = () => {
  data["text"] = input.value;
  console.log(data);
  createPost();
};

let createPost = () => {
  posts.innerHTML += `
  <div>
      <p>${data.text}</p>
      <span class="options">
          <i onclick ="editPost(this)" class="fas fa-edit"></i>
          <i onClick ="deletePost(this)" class="fas fa-trash-alt"></i>
            </span>
          </div>`;
  input.value = "";
  data.text;
};

let deletePost = (e) => {
  e.parentElement.parentElement.remove();
};

let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};
