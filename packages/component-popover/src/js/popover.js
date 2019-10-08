/**
 * Extending Bootstrap 4 Popover for Nitro UI Component Popover
 *
 * @package @nitro-ui/component-popover
 * @since 1.0.0-alpha.0
 * @author Ikram Hakimi <ikramhakimi@gmail.com>
 */

import $ from 'jquery';
import Tooltip from "bootstrap/js/src/tooltip";
import Popover from "bootstrap/js/src/popover";

console.log( 'kakaka dasdas');

const NAME                = 'nitroPopover';
const DATA_KEY            = `${NAME}.popover`;
const JQUERY_NO_CONFLICT  = $.fn[ NAME ];

const Default = {
    ...Tooltip.Default,
    placement : 'right',
    trigger   : 'click',
    content   : '',
    template  : '<div class="c-popover" role="tooltip">' +
                    '<div class="c-popover__arrow"></div>' +
                    '<h3 class="c-popover__head"></h3>' +
                    '<div class="c-popover__body"></div>' +
                '</div>'
}

const ClassName = {
  FADE : 'fade',
  SHOW : 'show'
}

const Selector = {
  TITLE   : '.c-popover__head',
  CONTENT : '.c-popover__body'
}

class NitroPopover extends Popover {
    // Hurm
    setContent() {

        console.log( 'kakaka ');

        const $tip = $(this.getTipElement())

        // We use append for html objects to maintain js events
        this.setElementContent($tip.find(Selector.TITLE), this.getTitle())
        let content = this._getContent()
        if (typeof content === 'function') {
            content = content.call(this.element)
        }
        this.setElementContent($tip.find(Selector.CONTENT), content)

        $tip.removeClass(`${ClassName.FADE} ${ClassName.SHOW}`)
    }
}

$.fn[ NAME ]             = NitroPopover._jQueryInterface;
$.fn[ NAME ].Constructor = NitroPopover;
$.fn[ NAME ].noConflict  = () => {
    $.fn[ NAME ] = JQUERY_NO_CONFLICT;
    return NitroPopover._jQueryInterface
};

export default NitroPopover;
