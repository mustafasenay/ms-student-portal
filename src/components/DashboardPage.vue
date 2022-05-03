<template>
  <div>
    <section class="mb-5">
      <div class="container">
        <div class="row mt-5">
          <div class="col-xl-3 mt-5 d-flex justify-content-center border-end border-start flex-column p-3">
            <i class="fas fa-user-graduate fs-1 text-pink"></i>
            <h4 class="mt-3">Mustafa Şenay</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi natus voluptate iusto.</p>
            <h4>Student</h4>
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link fs-4 text-dark menuHover" aria-current="page" href="#"><i class="fas fa-home me-3 text-pink iconHover"></i>Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link fs-4 text-dark menuHover" href="#"><i class="far fa-calendar-alt me-3 text-pink iconHover"></i>Schedule</a>
              </li>
              <li class="nav-item">
                <a class="nav-link fs-4 text-dark menuHover" href="#"><i class="fas fa-chart-line me-3 text-pink iconHover"></i>Reports</a>
              </li>
              <li class="nav-item">
                <a class="nav-link fs-4 text-dark menuHover" href="#"><i class="fas fa-money-bill-alt me-3 text-pink iconHover"></i>Finance</a>
              </li>
              <li class="nav-item">
                <a class="nav-link fs-4 text-dark menuHover" href="#"><i class="fas fa-scroll me-3 text-pink iconHover"></i>Clearance</a>
              </li>
              <li class="nav-item">
                <a class="nav-link fs-4 text-dark menuHover" href="#"><i class="fas fa-user me-3 text-pink iconHover"></i>Information</a>
              </li>
            </ul>
            <h4>Apps</h4>
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link fs-4 text-dark menuHover" aria-current="page" href="#"><i class="fas fa-vote-yea me-3 text-pink iconHover"></i>Election</a>
              </li>
              <li class="nav-item">
                <a class="nav-link fs-4 text-dark menuHover" href="#"><i class="fas fa-comments me-3 text-pink iconHover"></i>Online Enrollment</a>
              </li>
              <li class="nav-item">
                <a class="nav-link fs-4 text-dark menuHover" href="#"><i class="fas fa-file-signature me-3 text-pink iconHover"></i>Online Enrollment</a>
              </li>
            </ul>
          </div>
          <div class="col-xl-8 mt-5 d-flex justify-content-center">
            <div class="container">
              <div class="row">
              <div class="col-xl-12 text-center">
                <i class="fas fa-user-circle logoSize text-pink"></i>
                <h1 class="text-center">Hello Mustafa</h1>
                <h4>Today is Tuesday,May 3,2022</h4>
                <ul class="nav justify-content-center mt-5">
                  <li class="nav-item me-4">
                    <i class="fas fa-money-bill-wave text-pink fs-3"></i>
                    <a class="nav-link text-dark" aria-current="page" href="#">Finance</a>
                  </li>
                  <li class="nav-item me-4">
                    <i class="fas fa-scroll text-pink fs-3"></i>
                    <a class="nav-link text-dark" aria-current="page" href="#">Clearance</a>
                  </li>
                  <li class="nav-item me-4">
                    <i class="fas fa-book text-pink fs-3"></i>
                    <a class="nav-link text-dark" aria-current="page" href="#">Handbook</a>
                  </li>
                  <li class="nav-item me-4">
                    <i class="far fa-envelope-open text-pink fs-3"></i>
                    <a class="nav-link text-dark" aria-current="page" href="#">E-mail</a>
                  </li>
                  <li class="nav-item me-4">
                    <i class="fas fa-chalkboard text-pink fs-3"></i>
                    <a class="nav-link text-dark" aria-current="page" href="#">Classroom</a>
                  </li>
                  <li class="nav-item me-4">
                    <i class="far fa-sticky-note text-pink fs-3"></i>
                    <a class="nav-link text-dark" aria-current="page" href="#">Resources</a>
                  </li>
                </ul>
              </div>
              <div class="row mt-5">
                <div class="col-xl-6">
                  <div class="accountBalance border">
                    <h4>Account Balance</h4>
                    <h1>$750.65</h1>
                    <p>Updated : 2 months ago</p>
                  </div>
                  <div class="recentPayments border">
                    <h4>Recent Payments</h4>
                    <div class="row d-flex align-items-center text-center">
                      <div class="col-md-6 p-1">
                        <h4>$1000</h4>
                      </div>
                      <div class="col-md-6 p-1">
                        <h6>January 18,2022</h6>
                      </div>
                    </div>
                  <div class="row border-top d-flex align-items-center text-center">
                      <div class="col-md-6 p-1">
                        <h4>$1000</h4>
                      </div>
                      <div class="col-md-6 p-1">
                        <h6>January 18,2022</h6>
                      </div>
                    </div>
                    <div class="row border-top d-flex align-items-center text-center">
                      <div class="col-md-6 p-1">
                        <h4>$1000</h4>
                      </div>
                      <div class="col-md-6 p-1">
                        <h6>January 18,2022</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6 border p-3 scheduleSide">
                  <div>
                    <h6 class="mb-3">This week's class schedule</h6>
                    <a href="#" class="btn bg-gray me-3 p-1 scheduleButton" style="border-radius:50px;">Mon</a>
                    <a href="#" class="btn bg-gray me-3 p-1 scheduleButton" style="border-radius:50px;">Tues</a>
                    <a href="#" class="btn bg-gray me-3 p-1 scheduleButton" style="border-radius:50px;">Wed</a>
                    <a href="#" class="btn bg-gray me-3 p-1 scheduleButton" style="border-radius:50px;">Thu</a>
                    <a href="#" class="btn bg-gray me-3 p-1 scheduleButton" style="border-radius:50px;">Fri</a>
                    <a href="#" class="btn bg-gray me-3 p-1 scheduleButton" style="border-radius:50px;">Sat</a>
                    <h5 class="mt-3">Living in the IT Era</h5>
                    <p>08:00AM-11:00PM</p>
                  </div>
                  <div class="border-top mt-4">
                    <h5 class="mt-3">Web Application Development 2</h5>
                    <p>03:00AM-06:00PM</p>
                  </div>
                  <div class="border-top mt-4">
                    <h5 class="mt-3">Architecture&Organization</h5>
                    <p>9:00AM-10:00PM</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
          <div class="col-xl-1 mt-5 d-flex justify-content-center border-start"></div>
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
  .text-pink{
    color: pink;
  }
  .logoSize{
    font-size: 200px;
  }
  .accountBalance{
    padding: 20px;
    border-radius: 25px;
  }
  .accountBalance:hover{
    background-color: pink;
    color: white;
  }
  .recentPayments{
    margin-top: 25px;
    padding: 10px;
    border-radius: 25px;
  }
  .bg-gray{
    background-color: rgb(188, 190, 190);
  }
  .scheduleButton{
    padding: 5px!important;
  }
  .scheduleButton:hover{
    background-color: pink;
    color: white;
  }
  .scheduleSide{
    border-radius: 25px;
  }
  .menuHover:hover{
    background-color: rgb(252, 122, 144);
  }
</style>