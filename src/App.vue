<template>
   <span>
      <ParteSuperior></ParteSuperior>
      <div id="app">
         <router-view />
      </div>
      <Rodape></Rodape>
   </span>
</template>
<script>
// @ is an alias to /src
import ParteSuperior from "@/components/ParteSuperior.vue";
import Rodape from "@/components/Rodape.vue";

export default {
   name: "Home",
   components: {
      ParteSuperior,
      Rodape
   }
};
</script>

