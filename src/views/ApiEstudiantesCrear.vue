<template>
    <Cabecera></Cabecera>
    <Nav></Nav>
    <ApiFormEstudiante></ApiFormEstudiante>
    <Footer></Footer>
</template>

<script>

import Footer from '../components/Footer.vue'
import Cabecera from '../components/Cabecera.vue'
import ApiFormEstudiante from '../components/Api-Form-Estudiante.vue'
import Nav from '../components/Nav.vue'

export default {
    components: {
        Cabecera,
        Nav,
        ApiFormEstudiante,
        Footer
    }
}
</script>

<style>

</style>