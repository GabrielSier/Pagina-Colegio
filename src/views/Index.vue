<template>
    <Cabecera></Cabecera>
    <Nav></Nav>
    <Login></Login>
  <Footer></Footer>
</template>

<script>
import Footer from '../components/Footer.vue'
import Cabecera from '../components/Cabecera.vue'
import Login from '../components/Login.vue'
import Nav from '../components/Nav.vue'
export default {
components:{
    Footer,
    Cabecera,
    Login,
    Nav
}
}
</script>

<style scoped>

</style>