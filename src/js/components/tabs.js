////TABS
const tabs = document.querySelector(".wrapper");
const tabButton = document.querySelectorAll(".general-tabs__numbers");
const contents = document.querySelectorAll(".general-tabs__bot-steps");
tabs.onclick = e => {
  const id = e.target.dataset.id;
  if (id) {
    tabButton.forEach(btn => {
      btn.classList.remove("_active");
    });
    e.target.classList.add("_active");

    contents.forEach(content => {
      content.classList.remove("_active");
    });
    const element = document.getElementById(id);
    element.classList.add("_active");
  }
}
////TABS
