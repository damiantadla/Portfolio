<script setup>
import { ref } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  bg: String,
  size: String
})

const isWhite = ref(false)
const isXL = ref(false)

if (props.size) isXL.value = true
if (props.bg) isWhite.value = true
</script>

<template>
  <button class="button bg-yellowColor" :class="{ white: isWhite, xl: isXL }" role="button">
    {{ text }}
  </button>
</template>

<style scoped>
.xl {
  width: 300px !important;
  height: 60px !important;
  font-size: 2rem !important;
  font-weight: normal !important;
}
.white {
  color: black;
  background-color: white;
  font-weight: Normal !important;
  font-size: 30px !important;
  width: 260px !important;
  height: 60px !important;
}

.button {
  border: 0 solid #e5e7eb;
  box-sizing: border-box;
  color: #000000;
  display: flex;
  font-size: 1rem;
  font-weight: 700;
  justify-content: center;
  line-height: 1.75rem;
  padding: 0.75rem 1.65rem;
  position: relative;
  text-align: center;
  text-decoration: none #000000 solid;
  text-decoration-thickness: auto;
  width: 180px;
  max-width: 460px;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button:focus {
  outline: 0;
}

.button:after {
  content: '';
  position: absolute;
  border: 1px solid #000000;
  bottom: 4px;
  left: 4px;
  width: calc(100%);
  height: calc(100%);
}

.button:hover:after {
  bottom: 2px;
  left: 2px;
}

@media (min-width: 768px) {
  .button {
  }
}
</style>
