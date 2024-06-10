(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

/**
 * Dashboard Sidebar module with combine using of Drawer(modal) and Collapse component
 *
 * @package @nitro-ui/module-dashboard-sidebar
 * @since 1.0.0-alpha.0
 * @author SweeLing <slee7199@gmail.com>
 */

// import $ from 'jquery';
// import Util  from "bootstrap/js/src/util";
// import Popper from 'popper.js'
// import Util from "bootstrap/js/src/util.js";
// import Modal from "bootstrap/js/src/modal.js";
// import Collapse from "bootstrap/js/src/collapse.js";

//***********************Sidebar JS start here *****************************//

var closeMenuBtn = $('.js-menu-close');
var menuItemWithDropdown = $('.c-drawer__menu  a[data-toggle]');
var menuItemWithDropdownOpen = $('.c-drawer__menu  a[aria-expanded]');
var menuItemWithDropdownClose = $('.c-drawer__menu  a[data-toggle=collapse]');
var menuBtn = $('.js-sidebar-menu-btn');
var windowWidth = $(window).width();
function collapseMenuAccordion() {
  menuItemWithDropdown.attr('aria-expanded', false).attr('data-toggle', '');
  $('.c-collapse.show').removeClass('show').attr('aria-expanded', false);
}
function disableAccordion() {
  menuItemWithDropdown.attr('data-toggle', '');
}
function enableAccordion() {
  menuItemWithDropdown.attr('data-toggle', 'collapse').attr('aria-expanded', false);
}
function remainAccordionOpen() {
  menuItemWithDropdownOpen.attr('data-toggle', 'collapse').attr('aria-expanded', true);
}

//By default click $('.js-menu-close'); remove data-toggle and collapse all accordion
$('#drawer-mobile-menu').on('hidden.bs.modal', function (e) {
  collapseMenuAccordion();
});

//By default if window is tablet and above should hide the collapse fuction
if (windowWidth < 768) {
  $('#drawer-mobile-menu').on('show.bs.modal', function (e) {
    enableAccordion();
  });
} else if (windowWidth >= 768) {
  disableAccordion();
}
//On Window resize to mobile size, add data-toggle collapse and remove if bigger than mobile size
var mqMobile = window.matchMedia('(max-width: 767px)');
var mqTabletDesktop = window.matchMedia('(min-width: 768px)');
if (mqMobile.matches) {
  if ($('.c-sidebar').hasClass('show')) {
    remainAccordionOpen();
  } else {
    enableAccordion();
  }
  $('#drawer-mobile-menu').on('show.bs.modal', function (e) {
    enableAccordion();
  });
}
if (mqTabletDesktop.matches) {
  if ($('.c-sidebar').hasClass('show')) {
    remainAccordionOpen();
  } else {
    disableAccordion();
  }
  $('#drawer-mobile-menu').on('show.bs.modal', function (e) {
    enableAccordion();
  });
}

// function getPosition(shownSubmenu) {
//     var shownSubmenu = $('.c-sidebar__floating-menu:visible').attr('id').replace('#', '');
//
//     $('.c-sidebar__floating-menu:visible').css('top', function(){
//         return positionParent = $('.c-drawer__menu > li > a[data-submenu="'+shownSubmenu+'"]').position().top;
//     })
// }

$(function () {
  var submenu = $('.c-sidebar__floating-menu');
  var menuItem = $('.c-sidebar:not(.show) .c-drawer__menu > li > a');
  var thisId = $(this).attr('id');
  menuItem.hover(function () {
    var menuItemPos = $(this).position();
    var thisSubmenu = $(this).data('submenu');
    var sidebarWidth = $('.c-sidebar  .c-drawer__content').width();
    if (!$('.c-sidebar').hasClass('show')) {
      submenu.css({
        visibility: 'hidden'
      });
      $('#' + thisSubmenu).animate({
        top: menuItemPos.top,
        left: sidebarWidth
      }, 0, 'linear').css({
        visibility: 'visible'
      }).addClass('is--open');
    }
    var labelHeight = $('#' + thisSubmenu + ' .c-sidebar__label').innerHeight(); // calculate the label height
    var heightIncludeSubmenu = menuItemPos.top + $('#' + thisSubmenu).innerHeight(); //calculate the height of the item from top plus the submenu height
    var submenuPosition = menuItemPos.top - $('#' + thisSubmenu).innerHeight() + labelHeight; //set the submenu position
    var windowHeight = $(window).height();
    if (heightIncludeSubmenu >= windowHeight) {
      submenu.css({
        top: submenuPosition
      });
    }
  });
  var a = $('.c-sidebar__top-menu');
  menuItem.on('mouseleave', function (e) {
    if ($(e.relatedTarget).is(a)) {
      submenu.css({
        visibility: 'hidden'
      }).removeClass('is--open');
    }
  });
  submenu.on('mouseenter', function () {
    var thisId = $(this).attr('id');
    $('.c-drawer__menu > li > a[data-submenu="' + thisId + '"]').addClass('is--hover');
  });
  submenu.on('mouseleave', function () {
    var thisSubmenu = $(this).data('submenu');
    var thisId = $(this).attr('id');
    submenu.css({
      visibility: 'hidden'
    }).removeClass('is--open');
    $('.c-drawer__menu > li > a[data-submenu="' + thisId + '"]').removeClass('is--hover');
  });
  $('.c-drawer__content').scroll(function () {
    submenu.css({
      visibility: 'hidden'
    }).removeClass('is--open');
    console.log('scroll drawer');
  });
});

//***********************Sidebar JS end here *****************************//

},{}]},{},[1]);
