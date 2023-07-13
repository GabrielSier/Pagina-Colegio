<template>
  <div>
         <img src="../assets/escudo.jpg">
      <header >
            <div class="pos-f-t">
              <nav class="navbar navbar-expand-lg    navbar-light bg-light" >
                <div class="container-fluid">
                  <a class="navbar-brand" href="#"> Menu</a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item ">
                        <a class="nav-link" href="../Pages/index.html">INICIO </a>
                      </li>
                      <li class="nav-item">
                        <router-link class="nav-link" to="/api">API</router-link>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">NOTICIAS</a>
                      </li>
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          CONOZCANOS
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a class="dropdown-item" href="../Pages/Reseña.html">Reseña Historica </a>
                          <a class="dropdown-item" href="#">misión y vision</a>
                          <a class="dropdown-item" href="#">Valores</a>
                          <a class="dropdown-item" href="#">Objetivos Institucionales</a>
                          <a class="dropdown-item" href="#">Principios</a>
                          <a class="dropdown-item" href="#">Simbolos</a>
                          <a class="dropdown-item" href="#">Himno</a>
                        </div>
                      </li>
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          AREAS ACADEMICAS
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a class="dropdown-item" href="#">Directivos</a>
                          <a class="dropdown-item" href="#">Educacion Fisica</a>
                          <a class="dropdown-item" href="#">Matematicas</a>
                          <a class="dropdown-item" href="#">Educacion Religiosa Escolar</a>
                          <a class="dropdown-item" href="#">Lengua Castellana </a>
                          <a class="dropdown-item" href="#">Ingles</a>
                          <a class="dropdown-item" href="#">Informatica</a>
                          <a class="dropdown-item" href="#">Artistica</a>
                          <a class="dropdown-item" href="#">Ciencias Naturales</a>
                          <a class="dropdown-item" href="#">Ciencias Sociales</a>
                          <a class="dropdown-item" href="#">Orientadores Escolares</a>
                        </div>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">EGRESADOS</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">HERRAMIENTAS DIGITALES</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </header>
  </div>
</template>

<script>
export default {
name:'nav'
}
</script>

<style  scoped>
img{
    display: block;
    width: 100px;
    margin-bottom: 10px;
    margin-left: 50px;
    margin-top: 20px;
}
</style>