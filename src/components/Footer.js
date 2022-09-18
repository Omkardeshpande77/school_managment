import React from 'react'
import NavLogo from '../Final_Logo.png'

const Footer = () => {
  const imgstyle={
   
        height: '190px',
        width: '300px'
  }
  return (
    <>
      <footer class=" text-center  footer-32892 expand-lg">
        <section class="mb-5 p-4">
          
        </section>
        <section class="">
          <div class="container text-center text-dark text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 text-white" >
                <h6 class="text-uppercase fw-bold mb-4">
                  <i class="fas fa-graduation-cap me-3"></i>Blue Swan Public School
                </h6>
                <img src={NavLogo} className='img-brand-f' style={imgstyle} />
              </div>

              

              {/* <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4"> */}
              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 text-white">
              <h6 class="text-uppercase fw-bold mb-4">Contact Us</h6>
                <p>
                  <i class="fas fa-home me-3"></i> At- Hutupara, Darlipali,Sundargarh,Odisha - 770072
                </p>
                <p>
                  <i class="fas fa-envelope me-3"></i>
                  info@blueswanpublicschool.in
                </p>
                <p>
                  <i class="fas fa-phone me-3"></i> +91 9673454330
                </p>
                
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 text-white">
                <h6 class="text-uppercase fw-bold mb-4">Our Social Media</h6>
                <a
            class="btn footer_buttons btn-floating m-1"
            href="#!"
            role="button"
          >
            <i class="fab  fa-facebook-f"></i>
          </a>
          <a
            class="btn footer_buttons btn-floating m-1"
            href="#!"
            role="button"
          >
            <i class="fab fa-twitter"></i>
          </a>

          <a
            class="btn footer_buttons btn-floating m-1"
            href="#!"
            role="button"
          >
            <i class="fab fa-google"></i>
          </a>

          <a
            class="btn footer_buttons btn-floating m-1"
            href="#!"
            role="button"
          >
            <i class="fab fa-instagram"></i>
          </a>

          <a
            class="btn footer_buttons btn-floating m-1"
            href="#!"
            role="button"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>

          <a
            class="btn footer_buttons  btn-floating m-1"
            href="#!"
            role="button"
          >
            <i class="fab fa-github"></i>
          </a>
              </div>
            </div>
          </div>
        </section>
        <hr></hr>
        
        <div class="text-start p-3 watermark bg-grey text-center"><p>© Blue Swan Public School 2021. All Rights Reserved
Designed & Maintened by <a className='uphill' href='https://uphilltech.com/'>Uphill Technologies </a></p></div>
      </footer>
    </>
  )
}

export default Footer