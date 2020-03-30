
  function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
        flag = false;
        break;
      }
    }
    return flag;
  }

  if (!IsPC()) {
    window.location.href = 'mobile/index.html';
  }
(function ($, document, window) {

  function resizeHeaderMenuContainer() {
    setTimeout(function () {
      var paddingHeight = $('.alwu-header-menu-container').innerHeight() - $('.alwu-header-menu-container').height();
      var newHeight = $(window).height() - paddingHeight;
      $('.alwu-header-menu-container').height(newHeight);
    }, 200);
  }

  $(window).resize(function () {
    resizeHeaderMenuContainer();
  });

  resizeHeaderMenuContainer();

  $(window).on("load", function () {

  });

  $('.alwu-header-menu-icon-container').click(function () {
    if ($('.alwu-header').hasClass('menu-showed')) {
      $('.alwu-header').removeClass('menu-showed');
    } else {
      $('.alwu-header').addClass('menu-showed');
    }
  });

})(jQuery, document, window);


$('.bottom-toolbar-top-container').click(function () {
  $('html,body').stop(true, true).animate({scrollTop: '0px'});
});

$('.bottom-toolbar-phone-container').hover(function () {
  $('.bottom-toolbar-qr-code').addClass('showed');
  $('.bottom-toolbar-phone-container').addClass('clicked');
},function()
{
  $('.bottom-toolbar-qr-code').removeClass('showed');
  $('.bottom-toolbar-phone-container').removeClass('clicked');
});

