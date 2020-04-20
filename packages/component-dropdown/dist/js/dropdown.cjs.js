'use strict';/**
 * Extending Bootstrap 4 Collapse for Nitro UI Dropdown component
 *
 * @package @nitro-ui/component-dropdown
 * @since 1.0.0-alpha.0
 * @author Ikram Hakimi <ikramhakimi@gmail.com>
 */ // 
$(".c-dropdown__control").click(function(){$(this).parent().toggleClass("is--open").attr("aria-expanded",!1)});
