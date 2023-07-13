<template>
    <Cabecera></Cabecera>
    <Nav></Nav>
    <LoginA></LoginA>
  <Footer></Footer>
</template>

<script>
import Footer from '../components/Footer.vue'
import Cabecera from '../components/Cabecera.vue'
import LoginA from '../components/LoginA.vue'
import Nav from '../components/Nav.vue'
export default {
components:{
    Footer,
    Cabecera,
    LoginA,
    Nav
}
}
</script>

<style scoped>

</style>