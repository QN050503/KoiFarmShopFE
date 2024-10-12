import PropTypes from "prop-types";

// Account class constructor
class Cart {
  constructor(
    id,
    orderId,
    price,
    totalPrice,
    quantity,
    status,
    createdDate,
    modifiedDate,
    deletedDate,
    isDeleted,
    cartDetails,
    order
  ) {
    this.id = id;
    this.orderId = orderId;
    this.price = price;
    this.totalPrice = totalPrice;
    this.quantity = quantity;
    this.status = status;
    this.createdDate = createdDate;
    this.modifiedDate = modifiedDate;
    this.deletedDate = deletedDate;
    this.isDeleted = isDeleted;
    this.cartDetails = cartDetails;
    this.order = order;
  }
}

// AccountComponent to display account information
const cartComponent = ({ cart }) => {
  return (
    <div>
      <h1>Cart Information</h1>
      <p>
        <strong>ID:</strong> {cart.id}
      </p>
      <p>
        <strong>Name:</strong> {cart.orderId}
      </p>
      <p>
        <strong>Email:</strong> {cart.price}
      </p>
      <p>
        <strong>Phone:</strong> {cart.totalPrice}
      </p>
      <p>
        <strong>Status:</strong> {cart.quantity}
      </p>
      <p>
        <strong>Point:</strong> {cart.order}
      </p>
      <p>
        <strong>Is Deleted:</strong> {cart.isDeleted ? "Yes" : "No"}
      </p>
    </div>
  );
};

// Define PropTypes for AccountComponent
cartComponent.propTypes = {
  account: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    roleId: PropTypes.number,
    gender: PropTypes.string,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    phone: PropTypes.string,
    address: PropTypes.string,
    dateOfBirth: PropTypes.string,
    point: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    createdDate: PropTypes.string,
    modifiedDate: PropTypes.string,
    deletedDate: PropTypes.string,
    isDeleted: PropTypes.bool.isRequired,
    consignments: PropTypes.array,
    feedbacks: PropTypes.array,
    orders: PropTypes.array,
    role: PropTypes.string,
  }).isRequired,
};

export default Cart;
