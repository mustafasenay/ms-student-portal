<template>
  <div>
    <section>
      <div class="container-fluid">
        <div class="row bg-image">
          <div class="col-xl-1"></div>
          <div class="col-xl-3 bg-white p-5">
              <i class="fas fa-globe-africa fs-1 mt-5 text-pink"></i>
              <h1 class="mt-3 text-pink">Login</h1>
              <form>
                <div class="mb-3 mt-3">
                  <label for="exampleInputEmail1" class="form-label">Student ID</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1">
                </div>
                <div class="mb-3 form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1">
                  <label class="form-check-label" for="exampleCheck1">Remember me</label>
                </div>
                <button type="submit" class="btn bg-pink">Login</button>
              </form>
          </div>
          <div class="col-xl-8"></div>
        </div>
      </div>
    </section>
    
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  *{

  }
  .bg-image{
    background-image: url("../assets/harvard.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
  }
  .text-pink{
    color: pink;
  }
  .bg-pink{
    background-color: pink;
  }
</style>