<script setup>
import '../assets/background.js'

import Button from '../components/ButtonComponent.vue'
import ArrowComponent from '../components/ArrowComponent.vue'
</script>
<template>
  <div class="relative h-[90vh] max-w-[100vw]">
    <canvas class="absolute z-10 h-[90vh]"></canvas>
    <div class="absolute z-20 w-full">
      <div
        class="pt-60 sm:pt-80 pb-10 flex flex-col items-center justify-between lg:items-start lg:ml-50"
      >
        <div class="">
          <code>
            <div class="code text-xl">
              <div class="w-[130px]">
                <p class="typingEffect__line1 w-[50px]">
                  <span class="text-orange-400">(</span
                  ><span class="text-lightPurple">function</span
                  ><span class="text-yellowColor">()</span><span class="text-orange-400">{</span>
                </p>
              </div>
              <div class="w-[330px]">
                <p class="typingEffect__line2 w-[120px]">
                  <span class="text-lightBlue">show</span><span class="text-orange-400">(</span
                  ><span class="text-yellowColor">"Cześć"</span><span class="text-lightBlue">,</span
                  ><span class="text-yellowColor">"Jestem Damian!"</span
                  ><span class="text-orange-400">)</span>
                </p>
              </div>
              <div class="w-[25px]">
                <p class="typingEffect__line3">
                  <span class="text-orange-400">})</span>
                </p>
              </div>
            </div>
            <Button text="Poznaj mnie" class="opacity-0 animate-fadeInRight mt-30 ml-40" />
          </code>
        </div>
      </div>
    </div>
    <ArrowComponent class="absolute z-20 bottom-4 right-1/2 translate-x-1/2 m-auto my-0" />
  </div>
</template>

<style>
body {
  width: 100%;
  height: 100vh;
  background-color: #000;
  background-image: radial-gradient(circle at top right, rgba(192, 192, 192, 0.3), transparent),
    radial-gradient(circle at 20% 80%, rgba(192, 192, 192, 0.3), transparent);
}
canvas {
  position: fixed;
  width: 100%;
  height: 100%;
}

.code p {
  width: 0;
  margin-right: 5px;
  overflow: hidden;
  border-right: 2px solid transparent;
  white-space: nowrap;
}

.typingEffect__line1 {
  animation:
    typing 1s steps(30) forwards,
    blink 1s 1;
}

.typingEffect__line2 {
  animation:
    typing 1s steps(32) 3s forwards,
    blink 1.5s 1s 2;
}

.typingEffect__line3 {
  animation:
    typing 0.2s steps(5) 5s forwards,
    blink 1.5s 4s 5;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink {
  0%,
  45% {
    border-color: transparent;
  }
  50%,
  100% {
    border-color: white;
  }
}

@keyframes myAnim {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
