<script setup lang="ts">
let instNumb = instNumbr()
const whatStep = step()
const array = arr()
</script>

<template>
    <section>
        <div class="flex flex-row m-3">
            <ul id="list">
                <li
                    v-for="inst in instNumb"
                    class="flex gap-3 mb-4"
                    :class="{ hidden: whatStep < inst }"
                    :id="'inst' + inst"
                >
                    <span class="self-center">{{ inst }}</span>
                    <div>
                        <div class="flex gap-4">
                            <div
                                v-for="i in array[inst - 1]"
                                class="w-16 h-16"
                            ></div>
                            <div class="flex gap-4">
                                <ifid
                                    :size="26"
                                    class="w-16 h-16"
                                />
                                <div class="flex gap-4">
                                    <ula
                                        :size="26"
                                        class="w-16 h-16"
                                    />
                                    <div class="flex gap-4">
                                        <wb
                                            :size="26"
                                            class="w-16 h-16"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>
