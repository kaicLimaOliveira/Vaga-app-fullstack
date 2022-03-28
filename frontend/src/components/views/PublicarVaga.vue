<template>
  <form class="container mt-4 px-6">
    <div class="has-text-left my-5 is-size-5 has-text-weight-bold" data-test="title">
      Apresente sua vaga para milhares de profissionais e de graça
    </div>

    <div class="columns is-flex is-flex-wrap-wrap is-align-content-center">
      <div class="column">
        <div class="field">
          <label class="label has-text-left">Titulo da Vaga</label>
          <div class="control">
            <input
              class="input"
              id="title"
              type="text"
              name="titleVacancy"
              v-model="state.title"
              data-test="title"
              required
            />
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
              id="description"
              v-model="state.description"
              maxlength="300"
              name="descriptionVacancy"
              required
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
          <input
            type="number"
            id="salary"
            v-model="state.salary"
            name="salaryVacancy"
            class="input"
            required
          />
          <p class="help has-text-left">Informe os detalhes da vaga</p>
        </div>
      </div>

      <div class="column my-3">
        <div class="field">
          <div class="control">
            <div class="select">
              <label class="label has-text-left">Modalidade</label>
              <select name="modalityVacancy" id="modality" v-model="state.modality" required>
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
              <select name="typeVacancy" id="type" v-model="state.type" required>
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
      <button class="button is-primary" @click.prevent="registerNewVacancy" data-test="buttonNewVacancy">
        Cadastrar
      </button>
    </div>

    <noscript>
      <p data-test="vacancys">
        {{ state.vacancys }}
      </p>
    </noscript>
  </form>
</template>

<script setup>
import { axiosCreate } from "../../services/axios";
import { reactive } from "vue";
import { sweetAlert } from "../../plugins/sweetAlert";

const state = reactive({
  title: "",
  description: "",
  salary: "",
  modality: "",
  type: "",
  vacancys: 0,
});

function registerNewVacancy() {
  if (validateForm()) {
    create();
    resetForm();
    state.vacancys += 1
    sweetAlert({ icon: "success", title: "Vaga publicada com sucesso!" });
  }

  sweetAlert({
    icon: "error",
    title: "Ocorreu um erro...",
    text: "Por favor, preencha corretamente o formulário!",
  });
  
}

function create() {
  try {
    const sendRequest = async () => {
      const response = await axiosCreate
        .post("new_vacancy", {
          title: state.title,
          description: state.description,
          salary: state.salary,
          modality: state.modality,
          type: state.type,
        })
        .catch((e) => console.log(e.response));
    };

    sendRequest();
  } catch (e) {
    console.log(e);
  }
}

function resetForm() {
  (state.title = ""),
    (state.description = ""),
    (state.salary = ""),
    (state.modality = ""),
    (state.type = "");
}

function validateForm() {
  let validate = true;

  if (!state.title) validate = false;
  if (!state.description) validate = false;
  if (!state.salary) validate = false;
  if (!state.modality) validate = false;
  if (!state.type) validate = false;

  if(state.description.length > 300) validate = false;

  return validate;
}
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
