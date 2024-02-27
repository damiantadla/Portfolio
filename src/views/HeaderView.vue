<script setup>

import '@/assets/background.js'

import Button from "@/components/ButtonComponent.vue";
import ArrowComponent from "@/components/ArrowComponent.vue";
import MessengerComponent from "@/components/MessengerComponent.vue";
import MainView from "@/views/MainView.vue";

function goMain() {
  const startY = scrollY;
  const endY = scrollY + window.screen.height;
  const duration = 1000
  const startTime = performance.now();

  function scrollAnimation(currentTime) {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    const targetY = startY + (endY - startY) * progress;

    window.scrollTo(0, targetY);

    if (progress < 1) {
      requestAnimationFrame(scrollAnimation);
    }
  }

  requestAnimationFrame(scrollAnimation);
}
</script>
<template>
  <canvas class="absolute"></canvas>
  <div class="absolute z-10">
    <div class="pt-60 pb-10 w-screen h-screen flex flex-col items-center justify-between ">
      <div class=" flex-col justify-between w-pt-40 ml-5">
        <code>
          <div class="code text-xl">
            <div class="w-[130px]">
              <p class="typingEffect__line1 w-[50px]">
                <span class="text-orange-400">(</span><span class="text-lightPurple">function</span><span class="text-lightYellow">()</span><span class="text-orange-400">{</span>
              </p></div>
            <div class="w-[330px]"><p class="typingEffect__line2 w-[120px]">
              <span class="text-lightBlue">show</span><span class="text-orange-400">(</span><span class="text-lightYellow">"Cześć"</span><span class="text-lightBlue">,</span><span class="text-lightYellow">"Jestem Damian!"</span><span class="text-orange-400">)</span>
            </p></div>
            <div class="w-[25px]">
              <p class="typingEffect__line3">
                <span class="text-orange-400">})</span>
              </p>
            </div>
          </div>
          <Button class="opacity-0 animate-fadeInRight mt-30 flex ml-40"/>
        </code>
        <MessengerComponent class="opacity-0 animate-startAnim "/>

      </div>
      <ArrowComponent @click="goMain"/>
    </div>
    <MainView/>
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
  animation: typing 1s steps(30) forwards, blink 1s 1;
}

.typingEffect__line2 {
  animation: typing 1s steps(32) 3s forwards, blink 1.5s 1s 2;
}

.typingEffect__line3 {
  animation: typing 0.2s steps(5) 5s forwards, blink 1.5s 4s 5;
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
  0%, 45% {
    border-color: transparent;
  }
  50%, 100% {
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