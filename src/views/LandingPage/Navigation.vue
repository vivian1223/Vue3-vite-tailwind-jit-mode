<template>
  <div class="flex align-center text-2 text-secondary justify-between">
    <img
      class="w-[235px] h-[60px]"
      src="src/assets/logo.png"
      alt="Logo"
    >
    <ul class="flex items-center ml-[28px]">
      <li class="px-[20px] border-l-[1px] border-r-[1px] border-r-info border-l-info">
        <a
          class="hover:border-b-4 hover:border-b-primary border-b-transparent inline-block border-b-4 max-h-max py-[5px]"
          href="#"
        >
          認識我們
        </a>
      </li>
      <li class="px-[20px] border-l-[1px] border-r-[1px] border-r-info border-l-info ml-[-1px]">
        <a
          class="hover:border-b-4 hover:border-b-primary border-b-transparent inline-block border-b-4 max-h-max py-[5px]"
          href="#"
        >
          服務特色
        </a>
      </li>
      <li class="px-[20px] border-l-[1px] border-r-[1px] border-r-info border-l-info ml-[-1px]">
        <a
          class="hover:border-b-4 hover:border-b-primary border-b-transparent inline-block border-b-4 max-h-max py-[5px]"
          href="#"
        >
          知識文章
        </a>
      </li>
      <li class="px-[20px] border-l-[1px] border-r-[1px] border-r-info border-l-info ml-[-1px]">
        <a
          class="hover:border-b-4 hover:border-b-primary border-b-transparent inline-block border-b-4 max-h-max py-[5px]"
          href="#"
        >
          連載專欄
        </a>
      </li>
      <li class="px-[20px] border-l-[1px] border-r-[1px] border-r-info border-l-info ml-[-1px]">
        <a
          class="hover:border-b-4 hover:border-b-primary border-b-transparent inline-block border-b-4 max-h-max py-[5px]"
          href="#"
        >
          自費服務
        </a>
      </li>
      <li class="px-[20px] border-l-[1px] border-r-[1px] border-r-info border-l-info ml-[-1px]">
        <a
          class="hover:border-b-4 hover:border-b-primary border-b-transparent inline-block border-b-4 max-h-max py-[5px]"
          href="#"
        >
          常見問題
        </a>
      </li>
    </ul>
    <Book />
  </div>
</template>
<script setup>
import Book from './Book.vue';

</script>c