<script setup lang="ts">
const props = defineProps<{
    open: boolean
    message: string
}>()

let open = ref(props.open)
let message = ref(props.message.split('. '))
</script>

<template>
    <div>
        <client-only>
            <TransitionRoot
                appear
                :show="open"
                as="template"
            >
                <Dialog
                    :open="open"
                    as="div"
                    class="relative z-10"
                    @close="open = false"
                >
                    <TransitionChild
                        as="template"
                        enter="duration-300 ease-out"
                        enter-from="opacity-0"
                        enter-to="opacity-100"
                        leave="duration-200 ease-in"
                        leave-from="opacity-100"
                        leave-to="opacity-0"
                    >
                        <div class="fixed inset-0 bg-black bg-opacity-25" />
                    </TransitionChild>
                    <div class="fixed inset-0 overflow-y-auto">
                        <div
                            class="flex min-h-full items-center justify-center p-4 text-center"
                        >
                            <TransitionChild
                                as="template"
                                enter="duration-300 ease-out"
                                enter-from="opacity-0 scale-95"
                                enter-to="opacity-100 scale-100"
                                leave="duration-200 ease-in"
                                leave-from="opacity-100 scale-100"
                                leave-to="opacity-0 scale-95"
                            >
                                <DialogPanel
                                    class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
                                >
                                    <DialogTitle
                                        as="h3"
                                        class="text-xl font-bold leading-6 text-red-600"
                                    >
                                        Erro
                                    </DialogTitle>
                                    <div class="mt-2">
                                        <p
                                            v-for="msgLine in message"
                                            class="text-lg text-slate-900"
                                        >
                                            {{ msgLine }}
                                        </p>
                                    </div>
                                    <div class="mt-4">
                                        <button
                                            type="button"
                                            class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            @click="open = false"
                                        >
                                            OK
                                        </button>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </TransitionRoot>
        </client-only>
    </div>
</template>
