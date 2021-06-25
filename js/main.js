$(document).ready(function(){
  var tabsItem = $(".header-information-item");
  var contentItem = $(".header-information-left");


  tabsItem.on('click', function (event){
    var activeContent = $(this).attr("data-target");
    tabsItem.removeClass('header-information-item--active');
    contentItem.removeClass('header-information-left--active');
    $(activeContent).addClass('header-information-left--active');
    $(this).addClass("header-information-item--active");
  });

  var iconClick = $(".information-left__flag");
  iconClick.on('click', function (event){
    var iconRed = $(this).attr("data-target");
    $(iconRed).toggleClass("information-left__flag--active");
    $(this).toggleClass("information-left__flag--active");
  });

  var mySwiper = new Swiper(".swiper-blocks-frist", {
    // Optional parameters
    loop: true,
    autoplay: {
      delay: 3000,
    },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var mySwiper = new Swiper(".article-slide-container", {
    // Optional parameters
    loop: true,
    speed: 300,
    spaceBetween: 10,
    // Navigation arrows
    navigation: {
      nextEl: ".article-slide_next",
      prevEl: ".article-slide_prev",
    },
  });

  var modalButton = $("#modal");
  var closeModalButton = $(".modal__close");

  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);
  function openModal() {
    $(".modal__overlay").addClass("modal__overlay--visible");
    $(".modal__dialog").addClass("modal__dialog--visible");
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  $(".modal__overlay").click(function () {
    $(".modal__overlay").removeClass("modal__overlay--visible");
    $(".modal__dialog").removeClass("modal__dialog--visible");
  });

  $(".form").validate();
  $(".modal__form").validate();

  $(".navbar-top__menu-button").click(function () {
    $(".header-mobi-menu").toggleClass("header-mobi-menu--visible"); 
  });
  $(".coment-button-send").click(function () {
    $(".coment-item-wrap").toggleClass("coment-item-wrap--active");
  });  
});