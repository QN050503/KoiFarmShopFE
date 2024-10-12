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

    const CartTable = ({ carts, title }) => {
        return (
          <div>
            <h2>{title}</h2>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={{ border: "1px solid black", padding: "8px" }}>ID</th>
                  <th style={{ border: "1px solid black", padding: "8px" }}>
                    Name
                  </th>
                  <th style={{ border: "1px solid black", padding: "8px" }}>
                    Email
                  </th>
                  <th style={{ border: "1px solid black", padding: "8px" }}>
                    Phone
                  </th>
                  <th style={{ border: "1px solid black", padding: "8px" }}>
                    Status
                  </th>
                  <th style={{ border: "1px solid black", padding: "8px" }}>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {accounts.map((account) => (
                  <tr key={account.id}>
                    <td style={{ border: "1px solid black", padding: "8px" }}>
                      {account.id}
                    </td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>
                      {account.name}
                    </td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>
                      {account.email}
                    </td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>
                      {account.phone}
                    </td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>
                      {account.status}
                    </td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>
                      <button onClick={() => updateAccount(account.id)}>
                        Update
                      </button>
                      {!account.isDeleted && (
                        <button onClick={() => deleteAccount(account.id)}>
                          Delete
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      };
    
      AccountTable.propTypes = {
        accounts: PropTypes.array.isRequired, // accounts should be an array
        title: PropTypes.string.isRequired, // title should be a string
      };
}

export default CartPage;
