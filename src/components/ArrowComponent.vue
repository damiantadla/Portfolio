<script setup>
function goMain() {
  const startY = scrollY
  const endY = scrollY + window.screen.height - (window.screen.height * 20) / 100
  const duration = 1000
  const startTime = performance.now()

  function scrollAnimation(currentTime) {
    const elapsedTime = currentTime - startTime
    const progress = Math.min(elapsedTime / duration, 1)
    const targetY = startY + (endY - startY) * progress

    window.scrollTo(0, targetY)

    if (progress < 1) requestAnimationFrame(scrollAnimation)
  }

  requestAnimationFrame(scrollAnimation)
}
</script>

<template>
  <div @click="goMain()" id="mouse-scroll">
    <div class="mouse">
      <div class="mouse-in"></div>
    </div>
    <div>
      <span class="down-arrow-1"></span>
      <span class="down-arrow-2"></span>
      <span class="down-arrow-3"></span>
    </div>
  </div>
</template>

<style scoped>
body {
  background: #464646;
}
#mouse-scroll {
  display: block;
}

#mouse-scroll:hover {
  cursor: pointer;
}

#mouse-scroll span {
  display: block;
  width: 10px;
  height: 10px;
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  border-right: 2px solid #fff;
  border-bottom: 2px solid #fff;
  margin: 0 0 3px 5px;
}
#mouse-scroll .mouse {
  height: 31px;
  width: 20px;
  border-radius: 10px;
  -ms-transform: none;
  transform: none;
  border: 2px solid #ffffff;
  top: 170px;
}
#mouse-scroll .down-arrow-1 {
  margin-top: 6px;
}
#mouse-scroll .down-arrow-1,
#mouse-scroll .down-arrow-2,
#mouse-scroll .down-arrow-3,
#mouse-scroll .down-arrow-4 {
  -webkit-animation: mouse-scroll 1s infinite;
  -moz-animation: mouse-scroll 1s infinite;
}
#mouse-scroll .down-arrow-1 {
  -webkit-animation-delay: 0.1s;
  -moz-animation-delay: 0.1s;
  -webkit-animation-direction: alternate;
}
#mouse-scroll .down-arrow-2 {
  -webkit-animation-delay: 0.2s;
  -moz-animation-delay: 0.2s;
  -webkit-animation-direction: alternate;
}
#mouse-scroll .down-arrow-3 {
  -webkit-animation-delay: 0.3s;
  -moz-animation-dekay: 0.3s;
  -webkit-animation-direction: alternate;
}
#mouse-scroll .down-arrow-4 {
  -webkit-animation-delay: 0.4s;
  -moz-animation-dekay: 0.4s;
  -webkit-animation-direction: alternate;
}
#mouse-scroll .mouse-in {
  height: 5px;
  width: 2px;
  display: block;
  margin: 5px auto;
  background: #ffffff;
  position: relative;
}
#mouse-scroll .mouse-in {
  -webkit-animation: animated-mouse 1.2s ease infinite;
  moz-animation: mouse-animated 1.2s ease infinite;
}

@-webkit-keyframes animated-mouse {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(6px);
    -ms-transform: translateY(6px);
    transform: translateY(6px);
  }
}
@-webkit-keyframes mouse-scroll {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
@keyframes mouse-scroll {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
