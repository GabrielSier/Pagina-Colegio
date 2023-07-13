<template>
  <div>
    <div class="container">
  <div class="row">
    <div class="col-sm">
        <div class="row">
            <div class="cos-sm">
                 <img src="../assets/Professor.jpg" alt="">
            </div>
            <div class="cos-sm">
                  <button type="button"  v-on:click="logPro" class="btn btn-primary">Maestros</button>
            </div>
        </div>
    </div>
    <div class="col-sm">
        <div class="row">
            <div class="cos-sm">
                 <img src="../assets/alumno.jpg" alt="">
            </div>
            <div class="cos-sm">
                  <button type="button" v-on:click="LogEst" class="btn btn-primary">Estudiantes</button>
            </div>
        </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
export default {
name: 'Eleccion',
methods:{
    logPro(){
         this.$router.push('Index') 
    },
    LogEst(){
    this.$router.push('IndexA') 
    }
}
}
</script>

<style scoped>
 img{
     width: 200px;
     margin: 30px;
     
 }
 button{
     margin-bottom: 10px;
 }
</style>