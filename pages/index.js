import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export default function index() {

  
  return (    
    <main className='AnangpuriaHomePage'>
      
      {/*-------------------------------------------------------------------------- */
      /*                                   Header                                   */
      /* --------------------------------------------------------------------------*/}
      
      <header>
        <div className='headerContainer'>
          <div className='left'>
            <p>Have any question? Please contact us on 0129-2206750-53</p>
          </div>
          <div className='right'>
            <div className='iconContainer'>
              <div className='icon'>
                <Link href='#'>
                  <Image src='/assets/AnangpuriaHomePage/hFacebook.svg' objectFit='contain' layout='fill' width={16} alt='img'/>
                </Link>
              </div>
              <div className='icon'>
                <Link href='#'>
                  <Image src='/assets/AnangpuriaHomePage/hTwitter.svg' objectFit='contain' layout='fill' width={16} alt='img'/>
                </Link>
              </div>
              <div className='icon'>
                <Link href='#'>
                  <Image src='/assets/AnangpuriaHomePage/hLinkedin.svg' objectFit='contain' layout='fill' width={16} alt='img'/>
                </Link>
              </div>
              <div className='icon'>
                <Link href='#'>
                  <Image src='/assets/AnangpuriaHomePage/hMail.svg' objectFit='contain' layout='fill' width={16} alt='img'/>
                </Link>
              </div>
            </div>
            <div className='language'>
              <Image src='/assets/AnangpuriaHomePage/india.svg' objectFit='contain' height={22} width={22} alt='img'/>
              <select>
                <option>English</option>
                <option>Hindi</option>
              </select>
            </div>
          </div>
        </div>
      </header>
      
      {/*-------------------------------------------------------------------------- */
      /*                                   Landing                                  */
      /* --------------------------------------------------------------------------*/}
      
      <section className='landing'>
        <div className='landingTitle'>
          <div className='left'>
            <Image src='/assets/AnangpuriaHomePage/mainTitle.svg' objectFit='contain' height={52} width={500} alt='img'/>
          </div>
          <div className='right'>
            <div className='slab'>
              <div className='slabLeft'>
                <Image src='/assets/AnangpuriaHomePage/email.svg' objectFit='contain' layout='fill' alt='img'/>
              </div>
              <div className='slabRight'>
                <h5>EMAIL</h5>
                <p>bsaei@anangpuria.com</p>
              </div>
            </div>
            <div className='slab'>
              <div className='slabLeft'>
                <Image src='/assets/AnangpuriaHomePage/phone.svg' objectFit='contain' layout='fill' alt='img'/>
              </div>
              <div className='slabRight'>
                <h5>PHONE</h5>
                <p>0129-2206750-53</p>
              </div>
            </div>
          </div>
        </div>
        <nav data-aos="fade-in" data-aos-delay="400">
          <div className='navLinks'>
            <Link href='#'><a>HOME</a></Link>
            <Link href='#'><a>ABOUT</a></Link>
            <Link href='#'><a>ACADEMICS</a></Link>
            <Link href='#'><a>ADMISSIONS</a></Link>
            <Link href='#'><a>STUDENT LIFE</a></Link>
            <Link href='#'><a>PLACEMENTS</a></Link>
          </div>
          <div className='hNavLinks' id='hNavLinks'>
            <h3>Menu</h3>
            <div className='caretDown'>
              <Image src='/assets/AnangpuriaHomePage/caretDown.svg' objectFit='contain' height={26} width={26} alt='img'/>
            </div>
          </div>
          <button>
            <Image src='/assets/AnangpuriaHomePage/search.svg' objectFit='contain' height={20} width={20} alt='img'/>
            Search
          </button>
        </nav>
        <div className='hNavLinksData' id='expandNav'>
          <div className='navLinks'>
              <Link href='#'><a>HOME</a></Link>
              <Link href='#'><a>ABOUT</a></Link>
              <Link href='#'><a>ACADEMICS</a></Link>
              <Link href='#'><a>ADMISSIONS</a></Link>
              <Link href='#'><a>STUDENT LIFE</a></Link>
              <Link href='#'><a>PLACEMENTS</a></Link>
            </div>
        </div>
        <div className='landingData'>
          <div className='landingDataText'>
            <h1 data-aos="fade-in" data-aos-delay="400">Find Your Career Opportunities with <span>Anangpuria</span> </h1>
            <div className='slab'>
              <h5 data-aos="fade-in" data-aos-delay="400">NEWS & ANNOUNCEMENTS</h5>
              <h6>01-03-2023</h6>
              <p>Report on webinar on Career Guidance, GPAT exam Presentation and Development of soft skills dated 28th february 2023</p>
            </div>
            <div className='landingDataBtns' data-aos="fade-up" data-aos-delay="400">
              <button>EXPLORE</button>
              <button>APPLY NOW</button>
              <button>VISIT US</button>
            </div>
          </div>
          <div className='landingDataImg'>
            <Image src='/assets/AnangpuriaHomePage/main.svg' objectFit='contain' height={600} width={600} alt='img'/>
          </div>
        </div>
      </section>
      
      {/*-------------------------------------------------------------------------- */
      /*                           Other Sectiopns                                  */
      /* --------------------------------------------------------------------------*/}
      
      <div className='otherSections'>
        
        <div className='box'>
          <div className='slab'>
            <Link href='#'>
              <Image src='/assets/AnangpuriaHomePage/sidePhone.svg' objectFit='contain' height={30} width={30} alt='img'/>
            </Link>
          </div>
          <div className='slab'>
            <Link href='#'>
              <Image src='/assets/AnangpuriaHomePage/sideWhatsapp.svg' objectFit='contain' height={30} width={30} alt='img'/>
            </Link>
          </div>
          <div className='slab'>
            <Link href='#'>
              <Image src='/assets/AnangpuriaHomePage/sideSupport.svg' objectFit='contain' height={30} width={30} alt='img'/>
            </Link>
          </div>
          <div className='slab'>
            <Link href='#'>
              <Image src='/assets/AnangpuriaHomePage/sideLocation.svg' objectFit='contain' height={30} width={30} alt='img'/>
            </Link>
          </div>
          <div className='slab'>
            <Link href='#'>
              <Image src='/assets/AnangpuriaHomePage/sideStar.svg' objectFit='contain' height={30} width={30} alt='img'/>
            </Link>
          </div>
        </div>
        
        {/* -------------------------------------------------------------------------- */
        /*                              OFFERED COURSES                                */
        /* --------------------------------------------------------------------------  */}
        
        <section className='offeredCourse'>
          <h2>OFFERED COURSES</h2>
          <div className='cardContainer'>
            <div className='courseCard' data-aos="flip-right" data-aos-delay="400">
              <div className='cardUp'>
                <Image src='/assets/AnangpuriaHomePage/course1.svg' objectFit='contain' height={150} width={250} alt='img'/>
                <div className='cardTitle'>
                  <h3>B.PHARM</h3>
                  <h5>BACHELOR OF PHARMACY</h5>
                </div>
                <p>The Bachelor of Pharmacy (B.Pharm) program at Anangpuria Institute of Pharmacy is a comprehensive four-year degree course designed to equip students with the knowledge and skills required to thrive in the ever-evolving pharmaceutical industry.</p>
              </div>
              <button>VIEW MORE</button>
            </div>
            <div className='courseCard' data-aos="flip-left" data-aos-delay="400">
              <div className='cardUp'>
                <Image src='/assets/AnangpuriaHomePage/course2.svg' objectFit='contain' height={150} width={250} alt='img'/>
                <div className='cardTitle'>
                  <h3>D.PHARM</h3>
                  <h5>DIPLOMA IN PHARMACY</h5>
                </div>
                <p>The Diploma in Pharmacy (D.Pharm) program at Anangpuria Institute of Pharmacy offers numerous benefits to students, making it an excellent choice for those looking to begin their journey in the field of pharmacy.</p>
              </div>
              <button>VIEW MORE</button>
            </div>
          </div>
        </section>
        
        {/* -------------------------------------------------------------------------- */
        /*                                BSAIP events                                 */
        /* --------------------------------------------------------------------------  */}
        
        <section className='bsaipEvent' data-aos="fade-up" data-aos-delay="400">
          <h2>BSAIP events</h2>
            <div className='scrollableContainer' id='scrollableContainer'>
             <div className='cardContainer' id='cardContainer'>
              
                <div className='eventCard'>
                  <div className='date'>
                    <h3>26</h3>
                    <h3>APR</h3>
                  </div>
                  <p>International Conference on Advancements in Pharmaceutical Education and Research</p>
                  <div className='timeAndLocation'>
                    <div className='slab'>
                      <div className='slabImg'>
                       <Image src='/assets/AnangpuriaHomePage/eventTime.svg' objectFit='contain' layout='fill' alt='img'/>
                      </div>
                      <p>April 26, 2023 - April 28, 2023</p>
                    </div>
                    <div className='slab'>
                      <div className='slabImg'>
                       <Image src='/assets/AnangpuriaHomePage/eventLocation.svg' objectFit='contain' layout='fill' alt='img'/>
                      </div>
                      <p>B. S. Anangpuria Educational Institutes</p>
                    </div>
                  </div>
                  <button>VIEW MORE INFORMATION</button>
                </div>
                
                <div className='eventCard'>
                <div className='date'>
                  <h3>28</h3>
                  <h3>APR</h3>
                </div>
                <p>International Conference on Advancements in Pharmaceutical Education and Research</p>
                <div className='timeAndLocation'>
                  <div className='slab'>
                    <div className='slabImg'>
                     <Image src='/assets/AnangpuriaHomePage/eventTime.svg' objectFit='contain' layout='fill' alt='img'/>
                    </div>
                    <p>April 27, 2023 - April 28, 2023</p>
                  </div>
                  <div className='slab'>
                    <div className='slabImg'>
                     <Image src='/assets/AnangpuriaHomePage/eventLocation.svg' objectFit='contain' layout='fill' alt='img'/>
                    </div>
                    <p>B. S. Anangpuria Educational Institutes</p>
                  </div>
                </div>
                <button>VIEW MORE INFORMATION</button>
              </div>
              
              <div className='eventCard'>
                <div className='date'>
                  <h3>27</h3>
                  <h3>APR</h3>
                </div>
                <p>International Conference on Advancements in Pharmaceutical Education and Research</p>
                <div className='timeAndLocation'>
                  <div className='slab'>
                    <div className='slabImg'>
                     <Image src='/assets/AnangpuriaHomePage/eventTime.svg' objectFit='contain' layout='fill' alt='img'/>
                    </div>
                    <p>April 26, 2023 - April 28, 2023</p>
                  </div>
                  <div className='slab'>
                    <div className='slabImg'>
                     <Image src='/assets/AnangpuriaHomePage/eventLocation.svg' objectFit='contain' layout='fill' alt='img'/>
                    </div>
                    <p>B. S. Anangpuria Educational Institutes</p>
                  </div>
                </div>
                <button>VIEW MORE INFORMATION</button>
              </div>
                
             </div>    
            </div>
            <div className='eventBtns'>
              <button>
                <Image src='/assets/AnangpuriaHomePage/eventLeftBtn.png' objectFit='contain' height={45} width={45} alt='img'/>
              </button>
              <button>
                <Image src='/assets/AnangpuriaHomePage/eventRightBtn.png' objectFit='contain' height={45} width={45} alt='img'/>
              </button>
            </div>
        </section>
        
        {/* -------------------------------------------------------------------------- */
        /*                                 Details -1                                  */
        /* --------------------------------------------------------------------------  */}
        
        <section className='details1'>
          <div className='detailImg' data-aos="slide-up" data-aos-delay="400">
            {/* <Image src='/assets/AnangpuriaHomePage/detail.jpg' objectFit='contain' height={750} width={600} alt='img'/> */}
            <iframe src="https://www.youtube.com/embed/D0UnqGm_miA?start=3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className='details' data-aos="slide-up" data-aos-delay="400">
            <h3>Why Choose Anangpuria <span>Institute of Pharmacy</span></h3>
            <p>Choosing the Anangpuria Institute of Pharmacy signifies a commitment to excellence and a dedication to shaping the future leaders of the pharmaceutical industry. We take pride in offering our students an exclusive, high-quality education that sets them apart from their peers and prepares them for success in their professional lives.</p>
            <div className='list'>
              <div className='slab'>
                <dic className='slabLeft'><Image src='/assets/AnangpuriaHomePage/ul.svg' layout='fill' alt='img'/></dic>
                <li>Tailored and intentional Education</li>
              </div>
              <div className='slab'>
                <dic className='slabLeft'><Image src='/assets/AnangpuriaHomePage/ul.svg' layout='fill' alt='img'/></dic>
                <li>Comprehensive Student Support Services</li>
              </div>
              <div className='slab'>
                <dic className='slabLeft'><Image src='/assets/AnangpuriaHomePage/ul.svg' layout='fill' alt='img'/></dic>
                <li>Networking Opportunities and Industry Connections:</li>
                </div>
              <div className='slab'>
                <dic className='slabLeft'><Image src='/assets/AnangpuriaHomePage/ul.svg' layout='fill' alt='img'/></dic>
                <li>Prestigious Reputation</li>
              </div>
            </div>
            <h3>Ensuring excellence and <span>quality education</span></h3>
            <p>At Anangpuria Institute of Pharmacy, we place a strong emphasis on maintaining an exclusive and intimate learning environment. By limiting our student intake, we can ensure that each student receives the personalised attention and guidance they deserve.This approach enables us to focus on delivering a high-quality education that empowers our students to excel academically and stand out in the competitive job market.</p>
            <div className='list'>
              <div className='slab'>
                <div className='slabLeft'><Image src='/assets/AnangpuriaHomePage/ul.svg' layout='fill' alt='img'/></div>
                <li>Industry-Level Labs</li>
              </div>
              <div className='slab'>
                <div className='slabLeft'><Image src='/assets/AnangpuriaHomePage/ul.svg' layout='fill' alt='img'/></div>
                <li>Problem-Based Learning Approach:</li>
              </div>
              <div className='slab'>
                <div className='slabLeft'><Image src='/assets/AnangpuriaHomePage/ul.svg' layout='fill' alt='img'/></div>
                <li>Experienced Faculty</li>
              </div>
            </div>
          </div>
        </section>
        
        {/* -------------------------------------------------------------------------- */
        /*                                 Details -2                                  */
        /* --------------------------------------------------------------------------  */}
        
        <section className='details2 details1'>
          <div className='details' data-aos="slide-up" data-aos-delay="400">
            <h3>A CAMPUS TO FALL <span>in love with</span></h3>
            <p>At Anangpuria Institute of Pharmacy, our state-of-the-art industry-level labs set us apart from other institutions in the vicinity.</p>
            <div className='gallery'>
              <div>
                <Image src='/assets/AnangpuriaHomePage/img1.jpg' objectFit='contain' height={210} width={210} alt='img'/>
                <Image src='/assets/AnangpuriaHomePage/img2.jpg' objectFit='contain' height={210} width={210} alt='img'/>
                <Image src='/assets/AnangpuriaHomePage/img3.jpg' objectFit='contain' height={210} width={210} alt='img'/>
              </div>
              <div>
                <Image src='/assets/AnangpuriaHomePage/img4.jpg' objectFit='contain' height={210} width={210} alt='img'/>
                <Image src='/assets/AnangpuriaHomePage/img5.jpg' objectFit='contain' height={210} width={210} alt='img'/>
                <Image src='/assets/AnangpuriaHomePage/img6.jpg' objectFit='contain' height={210} width={210} alt='img'/>
              </div>
            </div>
            <div className='gallerySlider container'>
              <Carousel className=''>
                <Carousel.Item>
                  <Image src='/assets/AnangpuriaHomePage/img1.jpg' objectFit='contain' height={400} width={400} alt='img'/>
                </Carousel.Item>
                <Carousel.Item>
                  <Image src='/assets/AnangpuriaHomePage/img2.jpg' objectFit='contain' height={400} width={400} alt='img'/>
                </Carousel.Item>
                <Carousel.Item>
                  <Image src='/assets/AnangpuriaHomePage/img3.jpg' objectFit='contain' height={400} width={400} alt='img'/>
                </Carousel.Item>
                <Carousel.Item>
                  <Image src='/assets/AnangpuriaHomePage/img4.jpg' objectFit='contain' height={400} width={400} alt='img'/>
                </Carousel.Item>
                <Carousel.Item>
                  <Image src='/assets/AnangpuriaHomePage/img5.jpg' objectFit='contain' height={400} width={400} alt='img'/>
                </Carousel.Item>
                <Carousel.Item>
                  <Image src='/assets/AnangpuriaHomePage/img6.jpg' objectFit='contain' height={400} width={400} alt='img'/>
                </Carousel.Item>
              </Carousel>
            </div>
            <div className='detailBtn'>  
              <button>LIFE AT BSAIP</button>
            </div>
          </div>    
          <div className='detailImg' data-aos="slide-up" data-aos-delay="400">
            {/* <Image src='/assets/AnangpuriaHomePage/detail.jpg' objectFit='contain' height={750} width={600} alt='img'/> */}
            <iframe width="600" height="750" src="https://www.youtube.com/embed/D0UnqGm_miA?start=3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </section>
        
        {/* -------------------------------------------------------------------------- */
        /*                                   Footer                                    */
        /* --------------------------------------------------------------------------  */}
        
        <section className='footer' data-aos="fade-in" data-aos-delay="400">
          <div className='footerLeft'>
            <Image src='/assets/AnangpuriaHomePage/fTitle.png' objectFit='contain' height={54} width={400} alt='img'/>
            <p>At Anangpuria Institute of Pharmacy, we believe in fostering an environment that nurtures creativity, innovation, and excellence.</p>
            <h4>Subscribe</h4>
            <form>
              <input type='email' placeholder='abc@gmail.com'/>
              <button type='submit'>SUBSCRIBE</button>
            </form>
            <div className='followSlab'>
              <h4>Follow Us On</h4>
              <div className='icons'>
                <Link href='#'>
                  <Image src='/assets/AnangpuriaHomePage/fFacebook.png' objectFit='contain' height={35} width={35} alt='img'/>
                </Link>
                <Link href='#'>
                  <Image src='/assets/AnangpuriaHomePage/fInstagram.png' objectFit='contain' height={35} width={35} alt='img'/>
                </Link>
                <Link href='#'>
                  <Image src='/assets/AnangpuriaHomePage/fLinkedin.png' objectFit='contain' height={35} width={35} alt='img'/>
                </Link>
                <Link href='#'>
                  <Image src='/assets/AnangpuriaHomePage/fTwitter.png' objectFit='contain' height={35} width={35} alt='img'/>
                </Link>
              </div>
            </div>
          </div>
          <div className='footerRight'>
            <div className='mainSlab'>
              <h4>Campus Address</h4>
              <div className='slab'>
                <p>B. S. Anangpuria Educational Institutes,Alampur, Ballabgarh-Sohna Major District Road,Faridabad-121004, Delhi-NCR, INDIA.</p>
                <button>
                  <Image src='/assets/AnangpuriaHomePage/location.png' objectFit='contain' height={25} width={25} alt='img'/>
                  Find Us On Map
                </button>
              </div>
            </div>
            <div className='mainSlab'>
              <h4>Our Courses</h4>
              <ul>
                <li>Bachelor of pharmacy</li>
                <li>Diploma in Pharmacy</li>
              </ul>
            </div>
            <div className='mainSlab'  data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
              <h4>Quick Links</h4>
              <div className='fLink'>
                <Link href='#'><a>about us</a></Link>
                <Link href='#'><a>Academics</a></Link>
                <Link href='#'><a>Admissions</a></Link>
                <Link href='#'><a>Student life</a></Link>
                <Link href='#'><a>placements</a></Link>
                <Link href='#'><a>FAQ’s</a></Link>
                <Link href='#'><a>Contact Us</a></Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* -------------------------------------------------------------------------- */
        /*                                  Copyright                                  */
        /* --------------------------------------------------------------------------  */}
        
        <div className='copyright'>
          <p>© BSAIP. All Rights Reserved.</p>
        </div>
        
      </div>
      
      {/* -------------------------------------------------------------------------- */
      /*                                Scroll To Top                                */
      /* --------------------------------------------------------------------------  */}
      
      <button id='scrollToTopBtn'>
        <Image src='/assets/AnangpuriaHomePage/topBtn.png' objectFit='contain' height={40} width={40} alt='img'/>
      </button>
      
    </main>
  )
}