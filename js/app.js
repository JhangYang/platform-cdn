"use strict";

$(document).ready(function () {
  "use strict";
  // https://www.jqueryscript.net/menu/Vertical-Responsive-Multi-level-Nav-Menu-with-jQuery-CSS3.html

  /** set variables of Sidebar Compact */
  var app = $(".app");
  var sidebarPanel = $(".sidebar-panel");
  var sidebarFullToggle = $(".sidebar-full-toggle");
  var sidebarCompactToggle = $(".sidebar-compact-switch");
  var sidebarCompactSwitch = $("#sidebar_switch");
  var mobileMenu = $(".mobile-menu-sidebar");
  var mobileMenuCollapse = $(".switch-overlay"); // mobile-menu
  var mobileSize = window.matchMedia("(max-width: 1150px)");

  /** Initial Setting */
  function initialSidebarReset() {
    mobileMenuCollapse.removeClass('switch-overlay');

    if (sidebarCompactSwitch.val() == '1') {
      app.toggleClass('sidebar-compact-onhover');
    }

    if (!app.hasClass('sidebar-compact-onhover')) {
      if (mobileSize.matches) {
        app.toggleClass('sidebar-compact-onhover');
      } else {
        closeSidebarFull();
        openSidebarCompact();
        $('ul.metismenu .item-name').hide();
        $('.main-menu-title').hide();
        $('.metismenu .has-arrow').addClass('without-after-element');
      }
    }
  }

  mobileMenu.on("click", function () {
    mobileMenuClick();
    mobileMenuCollapse.addClass('switch-overlay');
  });

  mobileMenuCollapse.on("click", function () {
    sidebarSwitchOverlay();
    mobileMenuCollapse.removeClass('switch-overlay');
  });

  function mobileMenuClick() {
    // $app.toggleClass('sidebar-compact-onhover');
    $(".app.sidebar-full .sidebar-panel").addClass('sidebar-switch-open');
  }

  function sidebarSwitchOverlay() {
    $(".app.sidebar-full .sidebar-panel").removeClass('sidebar-switch-open');
  }

  mobileMenuCollapse.on("click", function () {
    // $app.toggleClass('sidebar-compact-onhover');
    $(".app.sidebar-full .main-content-wrap").removeClass("sidebar-full-z-index");
  });

  function openSidebarFull() {
    app.removeClass("sidebar-closed");
    app.addClass("sidebar-full");
  }

  function closeSidebarFull() {
    app.addClass("sidebar-closed");
    app.removeClass("sidebar-full");
  }

  function openSidebarCompact() {
    app.addClass("sidebar-compact");
  }

  function closeSidebarCompact() {
    app.removeClass("sidebar-compact");
  }

  function toggleOnHover() {
    closeSidebarCompact();
    app.toggleClass('sidebar-compact-onhover');
    //$(".app.sidebar-full .main-content-wrap").toggleClass("sidebar-full-z-index");
  }

  sidebarFullToggle.on("click", function () {
    app.addClass("sidebar-full");
    app.toggleClass("sidebar-closed");
  });

  sidebarCompactToggle.on("click", function () {
    toggleOnHover();
  });

  sidebarPanel.on('mouseenter', function (e) {
    if (!app.hasClass('sidebar-compact-onhover')) {
      closeSidebarCompact();
      openSidebarFull();
      $('ul.metismenu .item-name').show();
      $('.main-menu-title').show();
      $('.metismenu .has-arrow').removeClass('without-after-element');
    }
  }).on('mouseleave', function (e) {
    if (!app.hasClass('sidebar-compact-onhover')) {
      closeSidebarFull();
      openSidebarCompact();
      $('ul.metismenu .item-name').hide();
      $('.main-menu-title').hide();
      $('.metismenu .has-arrow').addClass('without-after-element');
    }
  });

  // Perfect scrollbar
  $(".perfect-scrollbar, [data-perfect-scrollbar]").each(function (index) {
    var el = $(this);
    var ps = new PerfectScrollbar(this, {
      suppressScrollX: el.data("suppress-scroll-x"),
      suppressScrollY: el.data("suppress-scroll-y")
    });
  });

  // Sidebar vertical
  $(function () {
    $('#menu').metisMenu();
  });

  // Full screen
  function cancelFullScreen(el) {
    var requestMethod = el.cancelFullScreen || el.webkitCancelFullScreen || el.mozCancelFullScreen || el.exitFullscreen;

    if (requestMethod) {
      // cancel full screen.
      requestMethod.call(el);
    } else if (typeof window.ActiveXObject !== "undefined") {
      // Older IE.
      var wscript = new ActiveXObject("WScript.Shell");

      if (wscript !== null) {
        wscript.SendKeys("{F11}");
      }
    }
  }

  function requestFullScreen(el) {
    // Supports most browsers and their versions.
    var requestMethod = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;

    if (requestMethod) {
      // Native full screen.
      requestMethod.call(el);
    } else if (typeof window.ActiveXObject !== "undefined") {
      // Older IE.
      var wscript = new ActiveXObject("WScript.Shell");

      if (wscript !== null) {
        wscript.SendKeys("{F11}");
      }
    }

    return false;
  }

  function toggleFullscreen() {
    var elem = document.body;
    var isInFullScreen = document.fullScreenElement && document.fullScreenElement !== null || document.mozFullScreen || document.webkitIsFullScreen;

    if (isInFullScreen) {
      cancelFullScreen(document);
    } else {
      requestFullScreen(elem);
    }

    return false;
  }

  $("[data-fullscreen]").on("click", toggleFullscreen);

  //ladda btn
  Ladda.bind('button[type=submit]', { timeout: 5000 });

  //initial
  initialSidebarReset();

  $('#scrollTop').click(function () {
    $('html,body').animate({ scrollTop: 0 }, 333);
  });

  // back to Top
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('#scrollTop').fadeIn(222);
    } else {
      $('#scrollTop').stop().fadeOut(222);
    }
  }).scroll();
});

$(window).on("load", function () {
  // will first fade out the loading animation
  jQuery("#loader").fadeOut(); // will fade out the whole DIV that covers the website.

  jQuery("#preloader").delay(500).fadeOut("slow");
});