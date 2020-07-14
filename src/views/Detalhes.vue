<template>
   <main role="main">
      <!-- CONTAINER -->
      <div class="container">
         <div class="row mb-4">
            <!-- BOTÃO VOLTAR -->
            <router-link class="btn btn-primary" to="/">Voltar</router-link>
         </div>
         <div class="row">
            <div class="card col-5 mr-4 pt-3" style="width: 28rem;">
               <div class="card-body">
                  <!-- THUMBNAIL -->
                  <img
                     class="card-img-top"
                     :src="personagem.thumbnail.path +'.'+personagem.thumbnail.extension"
                     :alt="personagem.name"
                  />
                  <!-- NOME DO PERSONAGEM -->
                  <h5 class="card-title">
                     <br />
                     {{personagem.name}}
                  </h5>

                  <!--
                     DESCRIÇÃO DO PERSONAGEM.
                     Caso retorne vazio, a mensagem "Descrição em branco." será apresentada.
                  -->
                  <p class="card-text" v-if="!personagem.description">Descrição em branco.</p>
                  <p class="card-text" v-else>{{personagem.description}}</p>
               </div>
               <div class="card-footer text-muted">
                  <!-- DATA DE MODIFICAÇÃO -->
                  Atualizado em:
                  {{personagem.modified.split("T")[0]
                  .split("-")
                  .reverse()
                  .join("-")
                  .replace(/-/g, "/") +
                  " às " +
                  personagem.modified.split("T")[1].split("-")[0].substring(0,5)+"h"
                  }}
               </div>
            </div>
            <!-- Quadrinhos relacionados ao personagem atual -->
            <div class="list-group col-5 mr-4">
               <p class="list-group-item list-group-item-action active">Quadrinhos</p>
               <p
                  class="list-group-item list-group-item-action"
                  v-for="quadro in quadrinhos"
                  :key="quadro.id"
               >{{quadro.title}}</p>
            </div>
         </div>
      </div>
      <hr />
      <!-- /container -->
   </main>
</template>
<script>
import MarvelAPI from "@/services/MarvelAPI";
export default {
   name: "Home",
   data() {
      return {
         // Array que armazena os dados do personagem
         personagem: [],
         // Array que armazena os quadrinhos relacionados ao personagem
         quadrinhos: []
      };
   },
   mounted() {
      MarvelAPI.detalhes(this.$route.params.id).then(resposta => {
         this.personagem = resposta.data.data.results[0];
      });

      MarvelAPI.detalhesQuadrinhos(this.$route.params.id).then(resposta => {
         this.quadrinhos = resposta.data.data.results;
      });
   }
};
</script>