import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverPanel,
    Dialog,
    DialogPanel,
    DialogTitle,
    DialogDescription
} from '@headlessui/vue'
import {
    ChevronDownIcon,
    PlusCircleIcon,
    MinusCircleIcon
} from '@heroicons/vue/24/outline'

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.component('Disclosure', Disclosure)
    nuxtApp.vueApp.component('DisclosureButton', DisclosureButton)
    nuxtApp.vueApp.component('DisclosurePanel', DisclosurePanel)
    nuxtApp.vueApp.component('Popover', Popover)
    nuxtApp.vueApp.component('PopoverButton', PopoverButton)
    nuxtApp.vueApp.component('PopoverPanel', PopoverPanel)
    nuxtApp.vueApp.component('Dialog', Dialog)
    nuxtApp.vueApp.component('DialogPanel', DialogPanel)
    nuxtApp.vueApp.component('DialogTitle', DialogTitle)
    nuxtApp.vueApp.component('DialogDescription', DialogDescription)

    nuxtApp.vueApp.component('ChevronDownIcon', ChevronDownIcon)
    nuxtApp.vueApp.component('PlusCircleIcon', PlusCircleIcon)
    nuxtApp.vueApp.component('MinusCircleIcon', MinusCircleIcon)
})
