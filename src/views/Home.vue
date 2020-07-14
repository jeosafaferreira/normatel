<template>
   <main role="main">
      <!-- PARTE PRINCIPAL -->
      <div class="container">
         <div class="row">
            <!-- CARDS  -->
            <div
               class="card col-2 mr-3 mb-3 pt-3"
               v-for="personagem in MarvelAPI"
               :key="personagem.id"
            >
               <!-- THUMBNAIL -->
               <img
                  class="card-img-top"
                  :src="personagem.thumbnail.path +'.'+personagem.thumbnail.extension"
                  :alt="personagem.name"
                  width="158px"
                  height="158px"
               />
               <div class="card-body">
                  <!-- NOME DO PERSONAGEM -->
                  <h6 class="card-title">{{personagem.name}}</h6>
                  <p class="card-text">
                     <!-- DATA DE MODIFICAÇÃO -->
                     <small class="text-muted">
                        Atualizado em:
                        <br />
                        {{personagem.modified.split("T")[0]
                        .split("-")
                        .reverse()
                        .join("-")
                        .replace(/-/g, "/") +
                        " às " +
                        personagem.modified.split("T")[1].split("-")[0].substring(0,5)
                        }}
                     </small>
                  </p>
                  <!-- BOTÃO VER DETALHES -->
                  <router-link class="btn btn-primary" :to="/detalhes/ + personagem.id">Ver detalhes</router-link>
               </div>
            </div>
         </div>

         <hr />
      </div>
      <!-- /container -->
   </main>
</template>

<script>
import MarvelAPI from "@/services/MarvelAPI";
export default {
   name: "Home",
   data() {
      return {
         //Array que armazena os dados
         MarvelAPI: []
      };
   },
   mounted() {
      //Buscando dados e armazenando no array
      MarvelAPI.listar().then(resposta => {
         this.MarvelAPI = resposta.data.data.results;
      });
   }
};
</script>
