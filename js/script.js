//Current year
$(".year").text(new Date().getFullYear());

//init magnific popup
$(document).ready(function() {
  $(".img-popup").magnificPopup({
    type: "image",
    gallery: {
      enabled: true
    }
  });
});
