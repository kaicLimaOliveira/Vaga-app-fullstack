<template>
    <div class="columns is-flex is-justify-content-center mt-4">
        <div class="column is-8">
            <div class="card card-color has-text-left">
                <span>Pesquisar Vagas</span>
                <p>Título da vaga</p>
                <input 
                    type="text" 
                    name="searchVacancy" 
                    class="input" 
                    placeholder="Pesquise por palavras chaves"
                    v-model="title"
                >
                <p class="help">
                    Informe palavras que estejam relacionadas com a vaga que você procura
                </p>

                <button class="button is-black is-outlined mt-5">
                    <p>Buscar</p>
                    <img src="@/assets/images/magnifying-glass-solid.svg">
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "PesquisarVaga",
  data: () => ({
      title: "",
  })
}
</script>

<style lang="scss" scoped>
.card-color {
    background-color: #ededed;
    border: 1.5px solid #d1d1d1;
    padding: 60px 70px;

    span {
        font-size: 30px;
        font-weight: 600;
    }

    .help {
        color: #a3a3a3;
    }

    button {
        display:flex;

        p {
            font-size: 16px;
            padding-right: 10px;
        }

        img {
            padding-left: 5px;
            width: 25px;
        }
    }
}
</style>