import $ from 'jquery'
import Tab from "bootstrap/js/src/tab";
import Util from "bootstrap/js/src/util";

const NAME               = 'nitroTab'
const DATA_KEY           = 'nitro.tab'
const EVENT_KEY          = `.${DATA_KEY}`
const DATA_API_KEY       = '.data-api'
const JQUERY_NO_CONFLICT = $.fn[NAME]

const Event = {
    // ...Tab.Event,
  HIDE           : `hide${EVENT_KEY}`,
  HIDDEN         : `hidden${EVENT_KEY}`,
  SHOW           : `show${EVENT_KEY}`,
  SHOWN          : `shown${EVENT_KEY}`,
  CLICK_DATA_API : `click${EVENT_KEY}${DATA_API_KEY}`
}

const ClassName = {
    // ...Tab.ClassName,
  DROPDOWN_MENU : 'dropdown-menu',
  ACTIVE        : 'is--active',
  DISABLED      : 'is--disabled',
  FADE          : 'fade',
  SHOW          : 'show'
}

const Selector = {
    // ...Tab.Selector,
  DROPDOWN              : '.c-dropdown',
  NAV_LIST_GROUP        : '.c-tab',
  ACTIVE                : '.is--active',
  ACTIVE_UL             : '> li > .is--active',
  DATA_TOGGLE           : '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
  DROPDOWN_TOGGLE       : '.dropdown-toggle',
  DROPDOWN_ACTIVE_CHILD : '> .dropdown-menu .is--active'
}

class NitroTab extends Tab
{

    // Getters

    // static get VERSION() {
    //   return VERSION
    // }
    //
    // static get NAME() {
    //   return NAME
    // }
    //
    // static get DATA_KEY() {
    //   return DATA_KEY
    // }
    //
    // static get Event() {
    //   return Event
    // }
    //
    // static get EVENT_KEY() {
    //   return EVENT_KEY
    // }
    //
    // static get Selector() {
    //   return Selector
    // }
    //
    // static get ClassName() {
    //   return ClassName
    // }


    show() {
      if (this._element.parentNode &&
          this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
          $(this._element).hasClass(ClassName.ACTIVE) ||
          $(this._element).hasClass(ClassName.DISABLED)) {
        return
      }

      let target
      let previous
      const listElement = $(this._element).closest(Selector.NAV_LIST_GROUP)[0]
      const selector = Util.getSelectorFromElement(this._element)

      if (listElement) {
        const itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? Selector.ACTIVE_UL : Selector.ACTIVE
        previous = $.makeArray($(listElement).find(itemSelector))
        previous = previous[previous.length - 1]
      }

      const hideEvent = $.Event(Event.HIDE, {
        relatedTarget: this._element
      })

      const showEvent = $.Event(Event.SHOW, {
        relatedTarget: previous
      })

      if (previous) {
        $(previous).trigger(hideEvent)
      }

      $(this._element).trigger(showEvent)

      if (showEvent.isDefaultPrevented() ||
          hideEvent.isDefaultPrevented()) {
        return
      }

      if (selector) {
        target = document.querySelector(selector)
      }

      this._activate(
        this._element,
        listElement
      )

      const complete = () => {
        const hiddenEvent = $.Event(Event.HIDDEN, {
          relatedTarget: this._element
        })

        const shownEvent = $.Event(Event.SHOWN, {
          relatedTarget: previous
        })

        $(previous).trigger(hiddenEvent)
        $(this._element).trigger(shownEvent)
      }

      if (target) {
        this._activate(target, target.parentNode, complete)
      } else {
        complete()
      }
    }

    dispose() {
      $.removeData(this._element, DATA_KEY)
      this._element = null
    }

    // Private

    _activate(element, container, callback) {
      const activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL')
        ? $(container).find(Selector.ACTIVE_UL)
        : $(container).children(Selector.ACTIVE)

      const active = activeElements[0]
      const isTransitioning = callback && (active && $(active).hasClass(ClassName.FADE))
      const complete = () => this._transitionComplete(
        element,
        active,
        callback
      )

      if (active && isTransitioning) {
        const transitionDuration = Util.getTransitionDurationFromElement(active)

        $(active)
          .removeClass(ClassName.SHOW)
          .one(Util.TRANSITION_END, complete)
          .emulateTransitionEnd(transitionDuration)
      } else {
        complete()
      }
    }


    _transitionComplete(element, active, callback) {
      if (active) {
        $(active).removeClass(ClassName.ACTIVE)

        const dropdownChild = $(active.parentNode).find(
          Selector.DROPDOWN_ACTIVE_CHILD
        )[0]

        if (dropdownChild) {
          $(dropdownChild).removeClass(ClassName.ACTIVE)
        }

        if (active.getAttribute('role') === 'tab') {
          active.setAttribute('aria-selected', false)
        }
      }

      $(element).addClass(ClassName.ACTIVE)
      if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true)
      }

      Util.reflow(element)

      if (element.classList.contains(ClassName.FADE)) {
        element.classList.add(ClassName.SHOW)
      }

      if (element.parentNode && $(element.parentNode).hasClass(ClassName.DROPDOWN_MENU)) {
        const dropdownElement = $(element).closest(Selector.DROPDOWN)[0]

        if (dropdownElement) {
          const dropdownToggleList = [].slice.call(dropdownElement.querySelectorAll(Selector.DROPDOWN_TOGGLE))

          $(dropdownToggleList).addClass(ClassName.ACTIVE)
        }

        element.setAttribute('aria-expanded', true)
      }

      if (callback) {
        callback()
      }
    }

    // Static

    static _jQueryInterface(config) {
      return this.each(function () {
        const $this = $(this)
        let data = $this.data(DATA_KEY)

        if (!data) {
          data = new NitroTab(this)
          $this.data(DATA_KEY, data)
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`)
          }
          data[config]()
        }
      })
    }
}

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

//
$(document)
    .unbind( 'click.bs.tab.data-api' ) // Unbind Bootstrap Tab API
    .on( Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function ( event ) {
        event.preventDefault()
        NitroTab._jQueryInterface.call($(this), 'show')
    } );

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

// Remove Bootstrap Tab Plugin from jQuery
delete $.fn[ 'tab' ];

$.fn[NAME] = NitroTab._jQueryInterface
$.fn[NAME].Constructor = NitroTab
$.fn[NAME].noConflict = () => {
  $.fn[NAME] = JQUERY_NO_CONFLICT
  return NitroTab._jQueryInterface
}

export default NitroTab;
