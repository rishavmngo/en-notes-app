const e = document.querySelector(".logo");
const sidebarToggle = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar-container");
sidebarToggle.addEventListener("click", function () {
  sidebar.classList.toggle("slider");
  const sidebarState = sidebar.classList.contains("slider");
  if (sidebarState) {
    sidebarToggle
      .querySelector(".fas")
      .classList.remove("fa-angle-double-left");
    sidebarToggle.querySelector(".fas").classList.add("fa-angle-double-right");
  } else {
    sidebarToggle
      .querySelector(".fas")
      .classList.remove("fa-angle-double-right");
    sidebarToggle.querySelector(".fas").classList.add("fa-angle-double-left");
  }
});

export const sidebarLaunch = () => {};
