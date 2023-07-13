<template>
    <Cabecera></Cabecera>
    <Nav></Nav>
    <ApiFormMaestros></ApiFormMaestros>
    <Footer></Footer>
</template>

<script>

import Footer from '../components/Footer.vue'
import Cabecera from '../components/Cabecera.vue'
import ApiFormMaestros from '../components/Api-Form-Maestros.vue'
import Nav from '../components/Nav.vue'

export default {
    components: {
        Cabecera,
        Nav,
        ApiFormMaestros,
        Footer
    }
}
</script>

<style>

</style>