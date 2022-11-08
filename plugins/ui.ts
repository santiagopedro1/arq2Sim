import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import {
    ChevronDownIcon,
    PlusCircleIcon,
    MinusCircleIcon
} from '@heroicons/vue/24/outline'

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.component('Disclosure', Disclosure)
    nuxtApp.vueApp.component('DisclosureButton', DisclosureButton)
    nuxtApp.vueApp.component('DisclosurePanel', DisclosurePanel)

    nuxtApp.vueApp.component('ChevronDownIcon', ChevronDownIcon)
    nuxtApp.vueApp.component('PlusCircleIcon', PlusCircleIcon)
    nuxtApp.vueApp.component('MinusCircleIcon', MinusCircleIcon)
})
