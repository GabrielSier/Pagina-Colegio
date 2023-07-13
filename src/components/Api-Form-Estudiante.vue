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
      <h1>Formulario Estudiantes</h1>

      <form @submit.prevent="crear()" class="w-75 mx-auto">
        <div class="form-group m-3">
          <label>Nombre</label>
          <input
            type="text"
            v-model="estudiante.nombres"
            class="form-control"
            placeholder="Ingrese el Nombre"
          />
        </div>
        <div class="form-group m-3">
          <label>Apellido</label>
          <input
            type="text"
            v-model="estudiante.apellidos"
            class="form-control"
            placeholder="Ingrese el Apellido"
          />
        </div>
        <div class="form-group m-3">
          <label>Correo</label>
          <input
            type="email"
            v-model="estudiante.correo"
            class="form-control"
            placeholder="Ingrese el Correo"
          />
        </div>
        <div class="form-group m-3">
          <label>DNI</label>
          <input
            type="text"
            v-model="estudiante.dni"
            class="form-control"
            placeholder="Ingrese el DNI"
          />
        </div>

        <div class="form-group m-3">
          <label>Teléfono</label>
          <input
            type="text"
            v-model="estudiante.telefono"
            class="form-control"
            placeholder="Ingrese el Teléfono"
          />
        </div>

        <div class="form-group m-3">
          <label>Género</label>
          <input
            type="text"
            v-model="estudiante.genero"
            class="form-control"
            placeholder="Ingrese el Género (F o M)"
          />
        </div>

        <button type="submit" class="btn btn-primary m-3">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

let urlEstudiantes = "http://localhost:8080/api-jarvis/public/api/estudiantes";

export default {
  data() {
    return {
      estudiante: {
        id: null,
        nombres: "",
        apellidos: "",
        correo: "",
        dni: "",
        genero: "",
        telefono: "",
      },
    };
  },
  methods: {
    crear: function () {
      let parametros = {
        nombres: this.estudiante.nombres,
        apellidos: this.estudiante.apellidos,
        correo: this.estudiante.correo,
        dni: this.estudiante.dni,
        genero: this.estudiante.genero,
        telefono: this.estudiante.telefono,
      };
      axios
        .post(urlEstudiantes, parametros)
        .then((response) => {
          alert("Se ha Creado un Nuevo Estudiante!");
          this.$router.back();
        })
        .catch((err) => {
          console.log(err);
        });
      this.estudiante.nombres = "";
      this.estudiante.apellidos = "";
      this.estudiante.correo = "";
      this.estudiante.dni = "";
      this.estudiante.genero = "";
      this.estudiante.telefono = "";
    },
  },
};
</script>

<style scoped>
</style>