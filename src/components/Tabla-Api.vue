<template>
  <div>
    <div class="container my-5">
      <h1>Tabla Estudiantes</h1>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Correo</th>
            <th>DNI</th>
            <th>Género</th>
            <th>Teléfono</th>
            <th>
              <router-link class="btn btn-primary" to="/api-estudiantes-crear"
                >Agregar Estudiante</router-link
              >
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="estudiante in estudiantes" :key="estudiante.id">
            <td>{{ estudiante.nombres }}</td>
            <td>{{ estudiante.apellidos }}</td>
            <td>{{ estudiante.correo }}</td>
            <td>{{ estudiante.dni }}</td>
            <td>{{ estudiante.genero }}</td>
            <td>{{ estudiante.telefono }}</td>
            <td>
              <button
                class="btn btn-danger"
                @click.prevent="deleteEstudiantes(estudiante.id)"
              >
                Borrar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="container my-5">
      <h1>Tabla Maestros</h1>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Correo</th>
            <th>DNI</th>
            <th>Asignatura</th>
            <th>
              <router-link class="btn btn-primary" to="/api-maestros-crear"
                >Agregar Maestro</router-link
              >
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="maestro in maestros" :key="maestro.id">
            <td>{{ maestro.nombres }}</td>
            <td>{{ maestro.apellidos }}</td>
            <td>{{ maestro.correo }}</td>
            <td>{{ maestro.dni }}</td>
            <td>{{ maestro.asignatura }}</td>
            <td>
              <button class="btn btn-danger" @click="deleteMaestros(maestro.id)">
                Borrar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

let urlEstudiantes = "http://localhost:8080/api-jarvis/public/api/estudiantes";
let urlMaestros = "http://localhost:8080/api-jarvis/public/api/maestros";

export default {
  data() {
    return {
      estudiantes: [],
      maestros: [],
    };
  },
  mounted() {
    this.getEstudiantes();
    this.getMaestros();
  },

  methods: {
    getEstudiantes() {
      axios
        .get(urlEstudiantes)
        .then((res) => {
          this.estudiantes = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getMaestros() {
      axios
        .get(urlMaestros)
        .then((res) => {
          this.maestros = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    deleteEstudiantes(id) {
      if (window.confirm("Desea Eliminar el Estudiante?")) {
        axios
          .delete(urlEstudiantes + "/" + id)
          .then((res) => {
            this.getEstudiantes();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },

    deleteMaestros(id) {
      if (window.confirm("Desea Eliminar el Maestro?")) {
        axios
          .delete(urlMaestros + "/" + id)
          .then((res) => {
            this.getMaestros();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },

  },
};
</script>

<style>
</style>