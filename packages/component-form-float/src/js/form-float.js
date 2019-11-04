/**
 * @package @nitro-ui/component-form-float
 * @since 1.0.0-alpha.0
 * @author SweeLing Lee <slee7199@gmail.com>
 */

 $.each($('.c-field-float  .c-input'), function() {
     var floatLabel = function(fi) {
         $(fi).parents('.c-field-float').addClass('is--active');
     };

     var blurInput = function(bi) {
         $(bi).parents('.c-field-float').removeClass('is--active');
     };

     var focus = function(fo) {
         $(fo).parents('.c-input-btn').addClass('is--focus');
     };

     var removefocus = function(rf) {
         $(rf).parents('.c-input-btn').removeClass('is--focus');
     };

     var maskPassword = $('.js-unmask-password');
     var inputBtn = $('.c-input-btn');


     $(this).parent().find('.js-unmask-password').click(function(e) {
         var input = $($(this).attr('toggle'));
         var clicked = true

         if (input.attr('type') == 'password') {
             input.attr('type', 'text');
             $(this).parent().find('.js-unmask-password.icon--visible').removeClass('u-hidden');
             $(this).parent().find('.js-unmask-password.icon--invisible').addClass('u-hidden');
         } else {
             input.attr('type', 'password');
             $(this).parent().find('.js-unmask-password.icon--visible').addClass('u-hidden');
             $(this).parent().find('.js-unmask-password.icon--invisible').removeClass('u-hidden');
         }
         focus(this);
         $(this).parent().find('.c-input').focus();
     });

     $(this).on('focus', function() {
         floatLabel(this);
         focus(this);
     });

     if($(this).val()){
         floatLabel(this);
     }

     $(this).on('blur', function() {
         if ($(this).val() != '') {
             floatLabel(this);
         } else {
             blurInput(this);
         }
         removefocus(this);
     });
 });
