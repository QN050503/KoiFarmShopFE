/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Cart from "../../components/cart/cartComponent";

function CartPage() {

    useEffect(() => {
        fetchCart();
    })

    const fetchCart = async () => {
        try {
            const response = await axios.get("https://localhost:7229/api/Cart");
            const cartData = response.data;

            const cartList = cartData.map(
                (item) => new Cart (
                    item.id,
                    item.orderId,
                    item.price,
                    item.totalPrice,
                    item.quantity,
                    item.status,
                    item.createdDate,
                    item.modifiedDate,
                    item.deletedDate,
                    item.isDeleted,
                    item.cartDetails,
                    item.order
                )
            );
        } catch (error) {
            console.error("Error fetch cart data: ", error)
        }
    }

  return <div>

  </div>;
}

export default CartPage;
