<template>
  <div >
      <aside class="overflow-auto">
           <div class="sidebar-container">
  <div class="sidebar-logo">
    Área Personal
  </div>
  <ul class="sidebar-navigation">
    <li class="header">
        <a href="#">
            <i class="fa fa-home" aria-hidden="true"> Inicio del sitio</i>
        </a>
    </li>
    <li>
      <a href="#">
        <i class="fa fa-home" aria-hidden="true"></i> Calendario
      </a>
    </li>
    <li>
      <a href="#">
        <i class="fa fa-tachometer" aria-hidden="true"></i> Archivos Privados
      </a>
    </li>
    <li class="header"><button v-on:click="getcursos" type="button" class="btn "> Ver Mis Materias</button></li>
    <li class="fa fa-tachometer" aria-hidden="true" v-for="(item, index) in this.cursos[0]" :key="index">
        <a href="#">
        <i class="fa fa-tachometer" aria-hidden="true"></i> {{item}}
      </a>
    </li>
  </ul>
</div>


      </aside>
      
<div class="content-container">

  <div class="container-fluid">

    <!-- Main component for a primary marketing message or call to action -->
    <div class="jumbotron">
     <Nav></Nav>
     <Footer></Footer>
    </div>

  </div>
</div>
  </div>
</template>

<script>
import {db} from '../firebaseDb'
import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'
export default {

    data(){
        return{
            cursos:[],
            prosesor:'',
        }
    },
    methods:{
        getcursos(){
             db.collection("Profesores").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        this.cursos.push(doc.data().Cursos)
    });
    
});
            console.log(this.cursos)
        }
    },
name :'Sidebar',
components:{
    Nav,
    Footer,
}
}
</script>

<style scope>
.sidebar-container {
    margin: 10px;
  position: fixed;
  width: 220px;
  height: 100%;
  left: 0;
  overflow-x: hidden;
  overflow-y: auto;
  background: #39A6A3;
  color: #fff;
}

.content-container {
  padding-top: 20px;
}

.sidebar-logo {
  padding: 10px 15px 10px 30px;
  font-size: 20px;
  background-color: #F3F2C9;
}

.sidebar-navigation {
  padding: 0;
  margin: 0;
  list-style-type: none;
  position: relative;
}

.sidebar-navigation li {
  background-color: transparent;
  position: relative;
  display: inline-block;
  width: 100%;
  line-height: 20px;
}

.sidebar-navigation li a {
  padding: 10px 15px 10px 30px;
  display: block;
  color: #fff;
}

.sidebar-navigation li .fa {
  margin-right: 10px;
}

.sidebar-navigation li a:active,
.sidebar-navigation li a:hover,
.sidebar-navigation li a:focus {
  text-decoration: none;
  outline: none;
}

.sidebar-navigation li::before {
  background-color: #F3F2C9;
  position: absolute;
  content: '';
  height: 100%;
  left: 0;
  top: 0;
  -webkit-transition: width 0.2s ease-in;
  transition: width 0.2s ease-in;
  width: 3px;
  z-index: -1;
}

.sidebar-navigation li:hover::before {
  width: 100%;
}

.sidebar-navigation .header {
  font-size: 12px;
  text-transform: uppercase;
  background-color: #39A6A3;
  padding: 10px 15px 10px 30px;
}

.sidebar-navigation .header::before {
  background-color: transparent;
}

.content-container {
  padding-left: 220px;
}
</style>