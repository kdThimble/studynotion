import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactStars from "react-rating-stars-component";

import { TiHeartFullOutline } from "react-icons/ti";
import { RiDeleteBin6Line } from "react-icons/ri";
import { removeFromCart } from "../../redux/slices/cartSlice";
import IconBtn from "../Reusable/IconBtn";

const MyWishlist = () => {
  const { totalPrice, totalItems } = useSelector((state) => state.cart);
  const { cart } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    
    const handleCheckout = () => {
        console.log("PAyment to be integrated");
     }

  return (
    <div className="text-richblack-5 p-8">
      <h1>Your Cart</h1>
      <p className="text-richblack-300">{totalItems} Courses in cart</p>
      {totalItems > 0 ? (
        <div>
          {cart.map((course, index) => {
            return (
              <div key={index} className="flex items-center gap-5">
                <img
                  src={course.thumbnail}
                  alt={course.courseName}
                  className="w-[100px] h-[100px] object-cover"
                />
                <div>
                  <p className="text-lg">{course?.courseName}</p>
                  <p className="text-richblack-300">{course?.category.name}</p>
                  <div>
                    <span>4.8</span>
                    <ReactStars
                      count={5}
                      onChange={() => {}}
                      edit={false}
                      value={4.8}
                      half={true}
                      size={20}
                      // fullIcon={<FaRegFaceGrinHearts />}
                      emptyIcon={<TiHeartFullOutline />}
                      filledIcon={<TiHeartFullOutline />}
                      activeColor="#ff0000"
                    />
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        dispatch(removeFromCart(course._id));
                      }}
                    >
                      <RiDeleteBin6Line />
                      <span>Remove</span>
                    </button>
                  </div>
                  <p className="text-richblack-300">{course.price}</p>
                </div>
              </div>
            );
          })}
          <div>
            <p>Total Price: Rs : {totalPrice}</p>
            <IconBtn text="Checkout" onclick={() => handleCheckout}>
              {" "}
            </IconBtn>
          </div>
        </div>
      ) : (
        <div>
          <p>No Courses in cart</p>
        </div>
      )}
    </div>
  );
};

export default MyWishlist;
