import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { WishlistService } from '../../services/wishlist.service';
import { ProductService } from '../services/product.service';
import { CartItem } from '../../models/cart';
import { WishItem } from '../../models/wishlist';
import { HotToastService } from '@ngneat/hot-toast';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product:any;
  WishItems!: WishItem[];
  constructor(
    private _product: ProductService,
    private _cartService: CartService,
    private _wishlistService: WishlistService,
    private _toast: HotToastService
  ) { }

  ngOnInit(): void {
    this.getWishList();
  }

  addProductToWishList(item: any, event: any) {
    const WishItem: WishItem = {
      product: item
    };
    if (event.currentTarget.classList.contains("is-favourite")) {
      event.currentTarget.classList.remove("is-favourite")
      this._wishlistService.deleteWishItem(WishItem.product.id);
      this._toast.error('Product removed from wishlist',
        {
          position: 'top-left'
        });
    }
    else {
      event.currentTarget.classList.add("is-favourite")
      this._wishlistService.setWishItem(WishItem);
      this._toast.success('Product added to wishlist successfully',
        {
          position: 'top-left'
        });
    }
  }
   validarUrls(input:any) {
    // Verifica si el input es null, undefined o no es una cadena
    if (input === null || input === undefined || typeof input !== "string") {
      console.log("El input es null, undefined o no es una cadena válida.");
      return [];
    }

    // Divide la cadena en un array, eliminando espacios innecesarios
    const urlArray = input.split(",").map(url => url.trim());

    // Verifica si el array está vacío o contiene solo valores vacíos
    if (urlArray.length === 0 || (urlArray.length === 1 && urlArray[0] === "")) {
      console.log("El array está vacío.");
      return [];
    }

    // Valida cada URL en el array con una expresión regular
    const urlRegex = /^(https?:\/\/[^\s/$.?#].[^\s]*)$/;
    const urlValidas = urlArray.filter(url => urlRegex.test(url));

    if (urlValidas.length === 0) {
      console.log("No hay URLs válidas.");
      return [];
    }

    // Devuelve el array de URLs válidas
    console.log("URLs válidas:", urlValidas);
    return urlValidas;
  }


   createProduct(dataArray:any) {

    const products = []; // Array para almacenar los productos

        for (let i = 0; i < dataArray.length; i++) {
          const data = dataArray[i]; // Obtener el array del producto actual
          var urls:any = this.validarUrls(data[4]);
          var category:any = this.validarUrls(data[5]);
          products.push({
            id: data[0], // ID estático o dinámico
            title: data[1], // Segundo valor como título
            price: data[2], // Tercer valor como precio

            description: data[3] || "Descripción no disponible", // Descripción del producto, valor por defecto si no se proporciona

            images:urls,
            creationAt: data[5], // Fecha de creación
            updatedAt: data[6], // Fecha de actualización
            category: category, // Objeto de la categoría
          });
        }
        return  products;


  }


  addProductToCart(item: any) {
    const cartItem: CartItem = {
      product: item,
      quantity: 1
    };
    this._cartService.setCartItem(cartItem);
    this._toast.success('Product added to cart successfully',
      {
        position: 'top-left'
      });

  }

  productInWishList(itm: any) {
    const cartItemExist = this.WishItems.find((item) => item.product.id === itm.id);
    return cartItemExist;
  }
  getWishList() {


    this._wishlistService.wishList$.subscribe((cart) => {
      this.WishItems = cart.items!;
    });
  }

}
