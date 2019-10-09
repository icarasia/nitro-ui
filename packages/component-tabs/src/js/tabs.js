import $ from 'jquery'
import Tab from "bootstrap/js/src/tab";
import Util from "bootstrap/js/src/util";

const NAME               = 'tab'
const DATA_KEY           = 'bs.tab'
const EVENT_KEY          = `.${DATA_KEY}`
const DATA_API_KEY       = '.data-api'
const JQUERY_NO_CONFLICT = $.fn[NAME]

const Event = {
  HIDE           : `hide${EVENT_KEY}`,
  HIDDEN         : `hidden${EVENT_KEY}`,
  SHOW           : `show${EVENT_KEY}`,
  SHOWN          : `shown${EVENT_KEY}`,
  CLICK_DATA_API : `click${EVENT_KEY}${DATA_API_KEY}`
}

const ClassName = {
  DROPDOWN_MENU : 'dropdown-menu',
  ACTIVE        : 'is--active',
  DISABLED      : 'disabled',
  FADE          : 'fade',
  SHOW          : 'show'
}

const Selector = {
  DROPDOWN              : '.dropdown',
  NAV_LIST_GROUP        : '.nav, .list-group, .c-tab',
  ACTIVE                : '.active',
  ACTIVE_UL             : '> li > .active',
  DATA_TOGGLE           : '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
  DROPDOWN_TOGGLE       : '.dropdown-toggle',
  DROPDOWN_ACTIVE_CHILD : '> .dropdown-menu .active'
}

class NitroTab extends Tab
{
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
}

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

$(document)
  .on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    event.preventDefault()
    NitroTab._jQueryInterface.call($(this), 'show')
  })

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

$.fn[NAME] = NitroTab._jQueryInterface
$.fn[NAME].Constructor = NitroTab
$.fn[NAME].noConflict = () => {
  $.fn[NAME] = JQUERY_NO_CONFLICT
  return NitroTab._jQueryInterface
}

export default NitroTab
