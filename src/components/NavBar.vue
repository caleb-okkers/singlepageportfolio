<template lang="">
    <nav class="navbar navbar-dark sticky-top">
                        <div class="container-fluid">
                          <a class="navbar-brand hometext" href="#">CO</a>
                          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                          </button>
                          <div class="offcanvas offcanvas-end nav" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                            <div class="offcanvas-header">
                              <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel"></h5>
                              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item">
                                  <router-link class="nav-link" aria-current="page" href="#Home">Home</router-link> 
                                </li>
                                <li class="nav-item">
                                  <a class="nav-link" href="#about">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#resume">Resume</a>
                                  </li>
                                <li class="nav-item">
                                  <a class="nav-link" href="#skills">Skills</a>
                                </li>
                                <li class="nav-item">
                                  <a class="nav-link" href="#projects">Projects</a>
                                </li>
                                <li class="nav-item">
                                  <a class="nav-link" href="#testimonials">Testimonials</a>
                                </li>
                                <li class="nav-item">
                                  <a class="nav-link" href="#contact">Contact</a>
                                </li>
                                
                              </ul>
                              
                            </div>
                          </div>
                        </div>
                      </nav>
</template>
<script>

export default {

}
</script>
<style scoped>
    
</style>