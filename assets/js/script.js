$(function() {

  initializeSlides()
  renderHomeMenus();

});

function initializeSlides() {
  $(document).ready(function() {
    $("#owl-demo").owlCarousel({
      navigation : true,
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
    });
  });
}

function renderHomeMenus() {
  var source = $("#home-menu-template").html();
  var template = Handlebars.compile(source);
  var context = {
    menus: [{
      img: "http://globe-views.com/dcim/dreams/box/box-03.jpg",
      menu: "What's Packaging",
      path: "#"
    }, {
      img: "http://globe-views.com/dcim/dreams/box/box-03.jpg",
      menu: "Search Packaging"
    }, {
      img: "http://globe-views.com/dcim/dreams/box/box-03.jpg",
      menu: "News & Activity"
    }, {
      img: "http://globe-views.com/dcim/dreams/box/box-03.jpg",
      menu: "Packaging Job"
    }, {
      img: "http://globe-views.com/dcim/dreams/box/box-03.jpg",
      menu: "Packaging Design"
    }, {
      img: "http://globe-views.com/dcim/dreams/box/box-03.jpg",
      menu: "Webboard"
    }, {
      img: "http://globe-views.com/dcim/dreams/box/box-03.jpg",
      menu: "About Us"
    }]
  };
  var html = template(context);
  $("#home-menu").html(html);
}