# Website may be visited <a href='https://jspoh.github.io/projects/demo-websites/e-commerce/products.html'>here</a>

Note: This website taps into your localStorage. You may enter 'localStorage.clear()' in the console to delete the stored data.

<hr>

<img src='lib/homepage.PNG'>

This is the main landing page. The user may scroll/use arrow keys to snap to the next section.
<br>

<img src='lib/guitarpage.PNG'>

When hovering over the category tab, a pop-up menu will appear - prompting the user to select a type of item to view. This screenshot shows the page when the guitar product option is selected.

The white heart will turn red when clicked on and will add the related item to the liked items list. The cart with a plus sign will add the item selected into the user's cart when clicked on while changing the plus sign to a cross. The cart with the cross sign can be clicked on to remove the item from cart.

<br>

<img src='lib/likedpage.PNG'>

This page consolidates the user's liked items. The user may click on any of the listed items to go back to the product page to view the item in order to remove it from liked items or to add to cart.

<br>

<img src='lib/cartpage.PNG'>
          
This page consolidates the user's cart items and also allows the user to checkout their cart. All fields must be filled and the cart must not be empty in order to check out successfully.

<br>

<img src='lib/checkoutmodalpage.PNG'>

Upon checking out, this modal will pop up to give the user a summary. A version will be logged in the console as well.

<br>

<img src='consolelocalstorage.PNG'>

All liked/cart items are saved to the localStorage so that the data may survive page refreshes and even the os rebooting. The user will have to enter localStorage.clear() into the console or clear their browser's memory to delete this data.
