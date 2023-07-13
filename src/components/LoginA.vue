<template>
  <div id="login">
      <section>
          <div class="card">
  <div class="card-header">
    LOGIN
  </div>
  <div class="card-body">
    <div class="container">
  <div class="row">
    <div class="col-sm">
      <form  >
  <div class="form-group">
    <input type="text" v-model="usuario" class="form-control" id="exampleInputEmail1"  placeholder="Usuario">
    <small id="emailHelp" class="form-text text-muted">Nunca compartiremos tu informacion</small>
  </div>
  <div class="form-group">
    <input type="password" v-model="contraseña" class="form-control" id="exampleInputPassword1" placeholder="Contraseña">
  </div>
</form>
      <button type="button" v-on:click="Log" class="btn btn-primary">Acceder</button>
    </div>
    <div class="col-sm">
      <p><a href="">¿Olvidó su nombre de usuario o contraseña?</a></p>
      <p>comuniquese con su director de grupo o coordinador encargado</p>
    </div>
  </div>
</div>
  </div>
</div>
      </section>
     
  </div>
</template>

<script>
import {db} from '../firebaseDb'
export default {
    name:'LoginA',
data(){
        return{
            usuarios:[],
            Contraseñas:[],
            usuario:'',
            contraseña:'',
            autentificado:false,
            usuauth:false,
            contauth:false
        }
    },
methods :{
    Log(){
        db.collection("Alumnos").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        this.usuarios.push(doc.data().Usuario)
        this.Contraseñas.push(doc.data().Contraseña)
    });
    
});
        this.usuarios.forEach((valor)=>{
            if(valor==this.usuario ){
              this.usuauth =true
            }
        })
       this.Contraseñas.forEach((valor)=>{
            if(valor==this.contraseña ){
              this.contauth =true
            }
        })
       if(this.usuauth==true && this.contauth==true) {
         alert('la persona '+ this.usuario+' ha sido autenticada')
         this.$router.push('home') 
       }else{
          alert('la persona '+ this.usuario+' No se encuentraregistrada')
       }
    }
},
}
</script>

<style scoped>
#login{
     margin: 0 auto; /* Added */
        float: none; /* Added */
        
    margin-top: 50px;
    margin-bottom: 60px;
    max-width: 700px;
    min-width: 300px;
}
form div{
  margin-top: 20px;
  margin-bottom: 20px;
}


</style>