<template>
    <div class="columns is-flex is-justify-content-space-between p-5">
        <div class="column is-4">
            <div class="card">
                <header class="card-header has-background-black-ter p-3">
                    <p class="card-header-title has-text-white">
                        Titulo da vaga
                    </p>
                    <div class="field is-flex is-align-items-center">
                        <label class="label has-text-white">
                            <input type="checkbox" name="favoriteVacancy">
                            Favoritar
                        </label>
                    </div>
                </header>
                <div class="card-content p-5">
                    <div class="content">
                        Descrição da vaga
                    </div>
                </div>
                <footer class="card-footer p-3">
                    salario
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Indicador",    
}
</script>

<style lang="scss" scoped>
</style>