import React from 'react'
import style from './page.module.css'
import homeCar from './img/img_car.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {

  const navigate = useNavigate();

  const loginHandler = () => {
    navigate('/login');
  } 

  const logoutHandler = () => {
    navigate('/logout');
  }

  const user = useSelector( store => store.user.data )

  return (
    <>
      <nav className="navbar navbar-expand-lg mt-2 sticky-top " style={{backgroundColor:'#F1F3FF'}}>
        <div className="container">
          <div className={`${style.boxHome} mb-4`}></div>
          <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Our Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Why Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Testimonial</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">FAQ</a>
              </li>
              {/* {Public} */}
              { user === null && 
                <li className="nav-item">
                  <button className="register btn btn-success ml-3" onClick={loginHandler}>Login</button>
                </li>
              }
              {/* {Protected} */}
              { user !== null && 
                <li className="nav-item">
                  <button className="register btn btn-success ml-3" onClick={logoutHandler}>Log out</button>
                </li>
              }
              
            </ul>
          </div>
        </div>
      </nav>

      <section className='welcome d-flex align-item-center' style={{backgroundColor:'#F1F3FF'}}>
            <div className='container-fluid mt-5 d-flex'>
                <div className='container'>
                    <div className="row px-5">
                        <div className={`col-6 ${style.welcomeText}`}>
                            <h1 className={style.sewa}>Sewa dan Rental Mobil Terbaik di Kawasan (Lokasimu)</h1>
                            <p className={style.selamat}>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebututhanmu untuk sewa mobil selama 24 jam.</p>
                        </div>
                        <div className={`col-6 ${style.welcomeImage}`}>
                            <img src={homeCar} alt="Gambar Mobil"/>
                        </div>
                    </div>
                </div>
                
            </div>
      </section>
    </>
  )
}

export default Home