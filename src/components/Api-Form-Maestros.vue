<template>
  <div>
    <div
      class="
        container
        d-flex
        flex-column
        justify-content-center
        w-50
        my-5
        py-5
        bg-light
      "
    >
      <h1>Formulario Maestros</h1>

      <form @submit.prevent="crear()" class="w-75 mx-auto">
        <div class="form-group m-3">
          <label>Nombre</label>
          <input
            type="text"
            v-model="maestro.nombres"
            class="form-control"
            placeholder="Ingrese el Nombre"
          />
        </div>
        <div class="form-group m-3">
          <label>Apellido</label>
          <input
            type="text"
            v-model="maestro.apellidos"
            class="form-control"
            placeholder="Ingrese el Apellido"
          />
        </div>
        <div class="form-group m-3">
          <label>Correo</label>
          <input
            type="email"
            v-model="maestro.correo"
            class="form-control"
            placeholder="Ingrese el Correo"
          />
        </div>
        <div class="form-group m-3">
          <label>DNI</label>
          <input
            type="text"
            v-model="maestro.dni"
            class="form-control"
            placeholder="Ingrese el DNI"
          />
        </div>

        <div class="form-group m-3">
          <label>Asignatura</label>
          <input
            type="text"
            v-model="maestro.asignatura"
            class="form-control"
            placeholder="Ingrese el Teléfono"
          />
        </div>

        <button type="submit" class="btn btn-primary m-3">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

let urlMaestros = "http://localhost:8080/api-jarvis/public/api/maestros";

export default {
  data() {
    return {
      maestro: {
        id: null,
        nombres: "",
        apellidos: "",
        correo: "",
        dni: "",
        asignatura: "",
      },
    };
  },
  methods: {
    crear: function () {
      let parametros = {
        nombres: this.maestro.nombres,
        apellidos: this.maestro.apellidos,
        correo: this.maestro.correo,
        dni: this.maestro.dni,
        asignatura: this.maestro.asignatura,
      };
      axios
        .post(urlMaestros, parametros)
        .then((response) => {
          alert("Se ha Creado un Nuevo Maestro!");
          this.$router.back();
        })
        .catch((err) => {
          console.log(err);
        });
      this.maestro.nombres = "";
      this.maestro.apellidos = "";
      this.maestro.correo = "";
      this.maestro.dni = "";
      this.maestro.asignatura = "";
    },
  },
};
</script>

<style scoped>
</style>