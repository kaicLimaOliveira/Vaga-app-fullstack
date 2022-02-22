<template>
  <section class="container mt-4 px-6">
    <div class="has-text-left my-5 is-size-5 has-text-weight-bold">
      Apresente sua vaga para milhares de profissionais e de graça
    </div>

    <div class="columns is-flex is-flex-wrap-wrap is-align-content-center">
      <div class="column">
        <div class="field">
          <label class="label has-text-left">Titulo da Vaga</label>
          <div class="control">
            <input class="input" type="text" v-model="title" required />
          </div>
          <p class="help has-text-left">
            Por exemplo: Programador, JavaScript ou Python
          </p>
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label has-text-left">Descrição</label>
          <div class="control">
            <textarea
              class="textarea"
              v-model="description"
              maxlength="300"
            ></textarea>
          </div>
          <p class="help has-text-left">Informe os detalhes da vaga</p>
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="column my-3">
        <div class="field">
          <label class="label has-text-left">Salário</label>
          <input type="number" v-model="salary" class="input" />
          <p class="help has-text-left">Informe os detalhes da vaga</p>
        </div>
      </div>

      <div class="column my-3">
        <div class="field">
          <div class="control">
            <div class="select">
              <label class="label has-text-left">Modalidade</label>
              <select v-model="modality">
                <option value="" disabled>--Selecione</option>
                <option value="1">Home Office</option>
                <option value="2">Presencial</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div class="column my-3">
        <div class="field">
          <div class="control">
            <div class="select">
              <label class="label has-text-left">Tipo</label>
              <select v-model="type">
                <option value="" disabled>--Selecione</option>
                <option value="1">CLT</option>
                <option value="2">PJ</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="
        control
        is-flex is-align-items-flex-start
        align-button-center-is-size-touch
      "
    >
      <button class="button is-primary" @click="registerNewVacancy()">
        Cadastrar
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "PublicarVaga",
  data: () => ({
    title: "",
    description: "",
    salary: "",
    modality: "",
    type: "",
  }),

  methods: {
    registerNewVacancy() {
      if (this.validateForm()) {
        this.resetForm();
        this.$swal({
          icon: "success",
          title: "Registro com sucesso",
          text: `A vaga ${this.title} foi registrada com sucesso!`,
        });
      } else {
        this.$swal({
          icon: "error",
          title: "Ocorreu um erro...",
          text: `Por favor, preencha corretamente o formulário!`,
        });
      }
    },
    resetForm() {
      (this.title = ""),
        (this.description = ""),
        (this.salary = ""),
        (this.modality = ""),
        (this.type = "");
    },
    validateForm() {
      let validate = true;

      if (!this.title) validate = false;
      if (!this.description) validate = false;
      if (!this.salary) validate = false;
      if (!this.modality) validate = false;
      if (!this.type) validate = false;

      return validate;
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  color: #a3a3a3;
}

.select:not(.is-multiple):not(.is-loading)::after {
  top: 3.2rem;
}

@media (max-width: 768px) {
  .align-button-center-is-size-touch {
    margin-top: 40px;
  }

  .column.my-3 {
    display: flex;
  }
}
</style>
