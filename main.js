// $('.nav ul li').click(function(){
//     $(this).addClass("active").sibblings().removeClass('active');
// });
$(document).ready(function () {
    //   $(".user-post").click(function () {
    //     $(".profile-posts").toggle();
    //   });
  });
  function tabFunctn(evt, tabBody) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabBody).style.display = "block";
    evt.currentTarget.className += " active";
  }
  