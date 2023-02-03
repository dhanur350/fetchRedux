export const addtoCart = (data) => {
  console.warn("action called", data);
  return {
    type: "Add_TO_CART",
    data: "1 item"
  };
};
