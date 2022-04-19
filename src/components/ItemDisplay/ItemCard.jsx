import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./ItemCard.css";
import {ADD} from "../../Redux/Actions/action"

const ItemCard = () => {
  const products = [
    {
      id: 1,
      title: "Tshirt",
      description: "best queality ever, pure cotton",
      price: "2000",
      offer: "1200",
      image:
        "https://images.pexels.com/photos/5384423/pexels-photo-5384423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "check shirt",
      description: "best queality ever, pure cotton",
      price: "3000",
      offer: "2000",
      image:
        "https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title: "Slim Fit Jeans",
      description: "best queality ever, very comfortable",
      price: "2500",
      offer: "1500",
      image:
        "https://n1.sdlcdn.com/imgs/i/7/p/Cliths-Brown-Slim-Jeans-SDL261336682-1-0f59c.jpg",
    },
    {
      id: 4,
      title: "nike Air max",
      description: "best queality ever, very comfortable",
      price: "4500",
      offer: "3000",
      image:
        "https://images.pexels.com/photos/4273288/pexels-photo-4273288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      title: "nike Air max",
      description: "best queality ever, very comfortable",
      price: "6000",
      offer: "2500",
      image:
        "https://images.pexels.com/photos/9660926/pexels-photo-9660926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      title: "nike Air max",
      description: "best queality ever, very comfortable",
      price: "5500",
      offer: "4000",
      image:
        "https://images.pexels.com/photos/9565800/pexels-photo-9565800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      title: "nike Air max",
      description: "best queality ever, very comfortable",
      price: "4500",
      offer: "2500",
      image:
        "https://images.pexels.com/photos/6540998/pexels-photo-6540998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      title: "Addidas yezzy",
      description: "best queality ever, very comfortable",
      price: "5000",
      offer: "3200",
      image:
        "https://images.pexels.com/photos/6540947/pexels-photo-6540947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];


const dispatch = useDispatch()
const sendData=(e)=>{
  // console.log(e)
  dispatch(ADD(e))
}

  return (
    <>
      <div className="cardContainer">
        {products.map((prod) => (
          <div className="card" key={prod.id}>
            <div className="card_header">
              <img src={prod.image} alt="showImage" />
            </div>
            <div className="card_body">
              <h2> {prod.title} </h2>
              <p> {prod.description}.</p>
              <p>
                <b> Price : ₹ {prod.offer} </b>
                <span className="offer_Price"> ₹ {prod.price}</span>
              </p>
            </div>
            <div className="card_footer">
              <button onClick={()=>sendData(prod)}>
                Add to Cart <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemCard;
