let isLoading = false;
export const checkoutComponent = () => {
  const checkoutCardComponent = document.querySelector(
    ".checkout-card-component"
  );

  // Get the confirm button
  const confirmButton = checkoutCardComponent.querySelector(".btn-primary");

  // Get the cancel button
  const cancelButton = checkoutCardComponent.querySelector(".btn-secondary");

  // Add event listener to the confirm button
  confirmButton.addEventListener("click", () => {
    if (isLoading) {
      // if the payment is already processing
      // log the message and don't continue the function
      console.log("The payment is already processing");

      return;
    }
    // set the data-loading attribute to 1
    // in order to change the buttons state to loading
    confirmButton.setAttribute("data-loading", "1");
    isLoading = true;
    cancelButton.setAttribute("disabled", "disabled");
  });
};
