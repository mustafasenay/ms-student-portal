<template>
  <div>
    <section>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid p-0">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav mx-auto mt-3">
                <router-link 
                  to="/"
                  tag = "a"
                  class="nav-link me-5 rounded-3 fs-2 p-3 text-pink">
                  Login
                </router-link>
                <router-link 
                  to="/mydashboard"
                  tag = "a"
                  class="nav-link rounded-3 fs-2 p-3 text-pink">
                  Dashboard
                </router-link>
            </div>
          </div>
        </div>
       </nav>
    </section>   
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .text-pink{
    color: pink!important;
  }
  .text-pink:hover{
    color: rgb(250, 167, 181)!important;
  }
</style>