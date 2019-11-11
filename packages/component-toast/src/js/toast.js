/**
 * Extending Bootstrap 4 Alert for Nitro UI Component Toast
 *
 * @package @nitro-ui/component-toast
 * @since 1.0.0-alpha.0
 * @author Syaiful Shah Zinan <i.works@live.com>
 */

import $ from 'jquery';
import Toast from "bootstrap/js/src/toast";
import Util from "bootstrap/js/src/util";

$('.presentation .c-toast').toast('show')

// Demo Purposes

$('#toast1').on('click', function(){
    $('#notification-fixed1').toast('show');
})

$('#toast2').on('click', function(){
    $('#notification-fixed2').toast('show');
})
