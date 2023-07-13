<template>
    <Cabecera></Cabecera>
    <Nav></Nav>
  <Carrusel></Carrusel>
  <Eleccion></Eleccion>
  <Footer></Footer>
</template>

<script>
import Footer from '../components/Footer.vue'
import Cabecera from '../components/Cabecera.vue'
import Nav from '../components/Nav.vue'
import Carrusel from '../components/Carrusel.vue'
import Eleccion from '../components/Eleccion.vue'
export default {
components:{
    Footer,
    Cabecera,
    Nav,
    Carrusel,
    Eleccion,

}
}
</script>

<style scoped>

</style>