/**
 * Extending Bootstrap 4 Alert for Nitro UI Component Alert
 *
 * @package @nitro-ui/component-alert
 * @since 1.0.0-alpha.0
 * @author Syaiful Shah Zinan <i.works@live.com>
 */

import $ from 'jquery';
import Alert from "bootstrap/js/src/alert";
import Util from "bootstrap/js/src/util";

const NAME                = 'nitroAlert';
const DATA_KEY            = `${NAME}.alert`;
const EVENT_KEY           = `.${DATA_KEY}`;
const DATA_API_KEY        = '.data-api';
const JQUERY_NO_CONFLICT  = $.fn[ NAME ];

const Selector = {
    DISMISS : '[data-dismiss="alert"]'
};

const Event = {
    CLICK_DATA_API : `click${EVENT_KEY}${DATA_API_KEY}`
};

const ClassName = {
    ALERT : 'c-alert',
    FADE  : 'fade',
    SHOW  : 'show'
};

class NitroAlert extends Alert
{
    _getRootElement(element) {

        const selector = Util.getSelectorFromElement(element);
        let parent     = false;

        if (selector) {
            parent = document.querySelector(selector);
        }

        if (!parent) {
            parent = $(element).closest(`.${ClassName.ALERT}`)[0];
        }

        return parent
    }
}

$(document).on(
    Event.CLICK_DATA_API,
    Selector.DISMISS,
    NitroAlert._handleDismiss( new NitroAlert() )
);

$.fn[ NAME ]             = NitroAlert._jQueryInterface;
$.fn[ NAME ].Constructor = NitroAlert;
$.fn[ NAME ].noConflict  = () => {
    $.fn[ NAME ] = JQUERY_NO_CONFLICT;
    return NitroAlert._jQueryInterface
};

export default NitroAlert;