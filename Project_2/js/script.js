window.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tabheader__item"),
    tabsContent = document.querySelectorAll(".tabcontent"),
    tabsParent = document.querySelector(".tabheader__items");

  //hide all tab's content
  function hideTabContent() {
    tabsContent.forEach((tab) => {
      tab.style.display = "none";
    });

    tabs.forEach((tab) => {
      tab.classList.remove("tabheader__item_active");
    });
  }

  //show selected tab's content
  function showTabContent(tabNumber = 0) {
    tabsContent[tabNumber].style.display = "block";
    tabs[tabNumber].classList.add("tabheader__item_active");
  }

  //first loading screen
  hideTabContent();
  showTabContent();

  //tab switching
  tabsParent.addEventListener("click", (event) => {
    const target = event.target;
    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((tab, i) => {
        if (target == tab) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
});
