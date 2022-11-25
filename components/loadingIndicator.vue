<template>
    <div class="h-[calc(100vh-56px)] flex justify-center items-center grow">
        <svg
            class="spinner spinner--circle w-24 h-24 stroke-fuchsia-900"
            viewBox="0 0 66 66"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle
                class="path"
                fill="none"
                stroke-width="6"
                stroke-linecap="round"
                cx="33"
                cy="33"
                r="30"
            ></circle>
        </svg>
    </div>
</template>

<style scoped>
.spinner {
    animation: circle-rotator 1.4s linear infinite;
}
.spinner * {
    line-height: 0;
    box-sizing: border-box;
}
@keyframes circle-rotator {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(270deg);
    }
}
.path {
    stroke-dasharray: 187;
    stroke-dashoffset: 0;
    transform-origin: center;
    animation: circle-dash 1.4s ease-in-out infinite;
}

@keyframes circle-dash {
    0% {
        stroke-dashoffset: 187;
    }
    50% {
        stroke-dashoffset: 46.75;
        transform: rotate(135deg);
    }
    100% {
        stroke-dashoffset: 187;
        transform: rotate(450deg);
    }
}
</style>
