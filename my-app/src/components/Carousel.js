import React from 'react'

export default function Carousel() {
  return (
    <div>
    <div>
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
  <div className="carousel-inner" id='carousel'>
    <div className="carousel-caption" style={{zIndex:"10"}}>
  <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
    </form> 
    </div>
    <div className="carousel-item active">
      <img src="https://media.istockphoto.com/id/1389161234/photo/chilli-mushroom-indian-snack-food.jpg?s=612x612&w=0&k=20&c=ULd9M--SV7IKWlWk5-QUlEGn9_kYRz3EqMZX5cVhq-U=" className="d-block w-100 "  style={{filter:"brightness(70%)"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://media.istockphoto.com/id/1256958573/photo/chilli-paneer-or-spicy-cottage-cheese-garnish-with-capsicum-onion-cabbage-and-spring-onion.jpg?s=612x612&w=0&k=20&c=81jAhcd9h--PeHTZxF-wAzflwcXx2P0ws6hXvoXF2Nc=" className="d-block w-100" style={{filter:"brightness(70%)"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://media.istockphoto.com/id/881481784/photo/indian-cuisine-paneer-tikka-kabab-asian-salad-top-view.jpg?s=612x612&w=0&k=20&c=e0Uu43RJxPqSQMoRhLLaZS6jVimBxhAdJUoHotn1TfQ=" style={{filter:"brightness(70%)"}} className="d-block w-100"  alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
</div>
 )
}
