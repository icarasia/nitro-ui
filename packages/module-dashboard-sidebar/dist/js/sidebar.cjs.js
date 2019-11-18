'use strict';/**
 * Dashboard Sidebar module with combine using of Drawer(modal) and Collapse component
 *
 * @package @nitro-ui/module-dashboard-sidebar
 * @since 1.0.0-alpha.0
 * @author SweeLing <slee7199@gmail.com>
 */ // import $ from 'jquery';
// import Util  from "bootstrap/js/src/util";
// import Popper from 'popper.js'
// import Util from "bootstrap/js/src/util.js";
// import Modal from "bootstrap/js/src/modal.js";
// import Collapse from "bootstrap/js/src/collapse.js";
//***********************Sidebar JS start here *****************************//
var closeMenuBtn=$(".js-menu-close"),menuItemWithDropdown=$(".c-drawer__menu  a[data-toggle]"),menuItemWithDropdownOpen=$(".c-drawer__menu  a[aria-expanded]"),menuItemWithDropdownClose=$(".c-drawer__menu  a[data-toggle=collapse]"),menuBtn=$(".js-sidebar-menu-btn"),windowWidth=$(window).width();function collapseMenuAccordion(){menuItemWithDropdown.attr("aria-expanded",!1).attr("data-toggle",""),$(".c-collapse.show").removeClass("show").attr("aria-expanded",!1)}function disableAccordion(){menuItemWithDropdown.attr("data-toggle","")}function enableAccordion(){menuItemWithDropdown.attr("data-toggle","collapse").attr("aria-expanded",!1)}function remainAccordionOpen(){menuItemWithDropdownOpen.attr("data-toggle","collapse").attr("aria-expanded",!0)}//By default click $('.js-menu-close'); remove data-toggle and collapse all accordion
$("#drawer-mobile-menu").on("hidden.bs.modal",function(){collapseMenuAccordion()}),768>windowWidth?$("#drawer-mobile-menu").on("show.bs.modal",function(){enableAccordion()}):768<=windowWidth&&disableAccordion();//On Window resize to mobile size, add data-toggle collapse and remove if bigger than mobile size
var mqMobile=window.matchMedia("(max-width: 767px)"),mqTabletDesktop=window.matchMedia("(min-width: 768px)");// function getPosition(shownSubmenu) {
//     var shownSubmenu = $('.c-sidebar__floating-menu:visible').attr('id').replace('#', '');
//
//     $('.c-sidebar__floating-menu:visible').css('top', function(){
//         return positionParent = $('.c-drawer__menu > li > a[data-submenu="'+shownSubmenu+'"]').position().top;
//     })
// }
mqMobile.matches&&($(".c-sidebar").hasClass("show")?remainAccordionOpen():enableAccordion(),$("#drawer-mobile-menu").on("show.bs.modal",function(){enableAccordion()})),mqTabletDesktop.matches&&($(".c-sidebar").hasClass("show")?remainAccordionOpen():disableAccordion(),$("#drawer-mobile-menu").on("show.bs.modal",function(){enableAccordion()})),$(function(){var b=$(".c-sidebar__floating-menu"),c=$(".c-sidebar:not(.show) .c-drawer__menu > li > a"),d=$(this).attr("id");c.hover(function(){var a=$(this).position(),c=$(this).data("submenu"),d=$(".c-sidebar  .c-drawer__content").width();$(".c-sidebar").hasClass("show")||(b.css({visibility:"hidden"}),$("#"+c).animate({top:a.top,left:d},0,"linear").css({visibility:"visible"}).addClass("is--open"));var e=$("#"+c+" .c-sidebar__label").innerHeight(),f=a.top+$("#"+c).innerHeight(),g=a.top-$("#"+c).innerHeight()+e,h=$(window).height();// calculate the label height
f>=h&&b.css({top:g})});var f=$(".c-sidebar__top-menu");c.on("mouseleave",function(a){$(a.relatedTarget).is(f)&&b.css({visibility:"hidden"}).removeClass("is--open")}),b.on("mouseenter",function(){var a=$(this).attr("id");$(".c-drawer__menu > li > a[data-submenu=\""+a+"\"]").addClass("is--hover")}),b.on("mouseleave",function(){var a=$(this).data("submenu"),c=$(this).attr("id");b.css({visibility:"hidden"}).removeClass("is--open"),$(".c-drawer__menu > li > a[data-submenu=\""+c+"\"]").removeClass("is--hover")}),$(".c-drawer__content").scroll(function(){b.css({visibility:"hidden"}).removeClass("is--open"),console.log("scroll drawer")})});
