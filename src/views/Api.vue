<template>
    <Cabecera></Cabecera>
    <Nav></Nav>
    <TablaApi></TablaApi>
    <Footer></Footer>
</template>

<script>
import Footer from '../components/Footer.vue'
import Cabecera from '../components/Cabecera.vue'
import TablaApi from '../components/Tabla-Api.vue'
import Nav from '../components/Nav.vue'
export default {
components:{
    Footer,
    Cabecera,
    TablaApi,
    Nav
}
}
</script>

<style scoped>

</style>