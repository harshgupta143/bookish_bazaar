$(document).ready(function() {
	var productItem = [{
			productName: "Accounts",
			price: "Rs. 430.00",
			photo: "accounts.jpeg.jpg"
		},
		{
			productName: "It Ends With Us",
			price: "Rs. 170.00",
			photo: "it ends with us.jpg"
		},
		{
			productName: "Novel",
			price: "Rs. 250.00",
			photo: "novel.jpg"
		},
		{
			productName: "Medical",
			price: "Rs. 600.00",
			photo: "medical.jpg"
		},{
			productName: "Love story",
			price: "Rs. 180.00",
			photo: "/love story.jpg"
		},
		{
			productName: "KarmaYoga",
			price: "Rs. 170.00",
			photo: "/vivekananda-literature-4-different-books-500x500.webp"
		},
		{
			productName: "Software Engineering",
			price: "Rs. 370.00",
			photo: "/Software testing.jpg"
		},
		{
			productName: "Physics",
			price: "Rs. 600.00",
			photo: "/Nootan Physics.jpg"
		}];
	showProductGallery(productItem);
	showCartTable();
});

function addToCart(element) {
	var productParent = $(element).closest('div.product-item');

	var price = $(productParent).find('.price').text();
	var productName = $(productParent).find('.productname').text();
	var quantity = $(productParent).find('.product-quantity').val();

	var cartItem = {
		productName: productName,
		price: price,
		quantity: quantity
	};
	var cartItemJSON = JSON.stringify(cartItem);

	var cartArray = new Array();
	// If javascript shopping cart session is not empty
	if (sessionStorage.getItem('shopping-cart')) {
		cartArray = JSON.parse(sessionStorage.getItem('shopping-cart'));
	}
	cartArray.push(cartItemJSON);

	var cartJSON = JSON.stringify(cartArray);
	sessionStorage.setItem('shopping-cart', cartJSON);
	showCartTable();
}

function emptyCart() {
	if (sessionStorage.getItem('shopping-cart')) {
		// Clear JavaScript sessionStorage by index
		sessionStorage.removeItem('shopping-cart');
		showCartTable();
	}
}



function removeCartItem(index) {
	if (sessionStorage.getItem('shopping-cart')) {
		var shoppingCart = JSON.parse(sessionStorage.getItem('shopping-cart'));
		sessionStorage.removeItem(shoppingCart[index]);
		showCartTable();
	}
}

	function showCartTable() {
		var cartRowHTML = "";
		var itemCount = 0;
		var grandTotal = 0;
	
		var price = 0;
		var quantity = 0;
		var subTotal = 0;
	
		if (sessionStorage.getItem('shopping-cart')) {
			var shoppingCart = JSON.parse(sessionStorage.getItem('shopping-cart'));
			itemCount = shoppingCart.length;
	
			//Iterate javascript shopping cart array
			shoppingCart.forEach(function(item) {
				var cartItem = JSON.parse(item);
				localStorage.setItem("a",cartItem.price);
				price = parseFloat(cartItem.price.replace("Rs. ",""));
				quantity = parseInt(cartItem.quantity);
				subTotal = price * quantity
	
				cartRowHTML += "<tr>" +
					"<td>" + cartItem.productName + "</td>" +
					"<td class='text-right'>Rs." + price.toFixed(2) + "</td>" +
					"<td class='text-right'>" + quantity + "</td>" +
					"<td class='text-right'>Rs." + subTotal.toFixed(2) + "</td>" +
					"</tr>";
	
				grandTotal += subTotal;
			});
		}
	
		$('#cartTableBody').html(cartRowHTML);
		$('#itemCount').text(itemCount);
		$('#totalAmount').text("Rs." + grandTotal.toFixed(2));
	}



function showProductGallery(product) {
	//Iterate javascript shopping cart array
	var productHTML = "";
	product.forEach(function(item) {
		productHTML += '<div class="product-item">'+
					'<img src="/Photos/' + item.photo + '">'+
					'<div class="productname">' + item.productName + '</div>'+
					'<div class="price"> ' + item.price + '</div>'+
					'<div class="cart-action">'+
						'<input type="text" class="product-quantity" name="quantity" value="1" size="2" />'+
						'<input type="submit" value="Add to Cart" class="add-to-cart" onClick="addToCart(this)" />'+
					'</div>'+
				'</div>';
				"<tr>";
		
	});
	$('#product-item-container').html(productHTML);
}