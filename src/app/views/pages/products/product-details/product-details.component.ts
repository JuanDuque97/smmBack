import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselService } from 'ngx-owl-carousel-o/lib/services/carousel.service';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart';
import { HotToastService } from '@ngneat/hot-toast';
import { WishItem } from '../../models/wishlist';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  backgroundPos: string = 'center center';
  startPosition: number = 0; // Position of active Slide
  @ViewChild("myCarousel") myCarousel!: ElementRef;  // slider One Big Image

  slider1Settings: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    // navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false,
    startPosition: this.startPosition
  }

  slider2Settings: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    margin: 10,
    dots: false,
    navSpeed: 700,
    center: true,
    // navText: ['', ''],
    responsive: {
      0: {
        items: 3
      },
      400: {
        items: 3
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: false,
    // animateOut: 'slideOutUp',
    // animateIn: 'slideInUp'
  }

  slider3Settings: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    margin: 10,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      },
      1200: {
        items: 5
      },
      1400: {
        items: 5
      },
      1600: {
        items: 5
      }
    },
    nav: true,
  }

  product: any
  productId!: number
  categoryId!: number
  imgNotFounded: boolean = false;
  cartList!: CartItem[];
  WishItems!: WishItem[];
  quantity!: number
  loremText: string = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, quos aspernatur eum dolorr eprehenderit eos et libero debitis itaque voluptatem! Laudantium modi sequi, id numquam liberosed quaerat. Eligendi, ipsum!`;
  categoryProducts: any
  isProductInWishList: boolean = false;
  productInCartList: any;

  constructor(
    private _productService: ProductService,
    private _cartService: CartService,
    private _route: ActivatedRoute,
    private _toast: HotToastService,
    private _wishlistService: WishlistService,
  ) { }


  ZoomImage(event: any) {
    const { left, top, width, height } = event.target.getBoundingClientRect();
    const x = ((event.pageX - left) / width) * 100;
    const y = ((event.pageY - top) / height) * 100;
    this.backgroundPos = `${x}% ${y}%`;
  }


  nextSlide(event: any) {
    if (event.dragging == false) {
      this.startPosition = event.data.startPosition;
      const anyService = this.myCarousel as any;
      const carouselService = anyService.carouselService as CarouselService;
      carouselService.to(this.startPosition, 3)
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



  getproduct() {
    this._productService.getSingleProduct(this.productId).subscribe((data) => {

     const formattedData = data.map((item:any) => {
          return {
            id: item[0],
            title: item[1],
            price: item[2],
            mainImage: item[3],
            images: item[4].split(', '), // Separa las imágenes en un arreglo
            codes: item[5].split(', '),   // Separa los códigos en un arreglo
            creationAt: item[6],
            updatedAt: item[7],
            category: item[8],
            description: item[9]
          };
        });

        console.log(formattedData);
      this.product =formattedData
      this.categoryId = this.product.category.id;
      this.getProductsByCategory(this.categoryId);
      this.productInCartList = this.checkProductInCartList(this.product);
      this.isProductInWishList = this.productInWishList(this.product);
      if (this.product.images.length == 1) {
        this.imgNotFounded = true
      }
    })
  }

  getCartList() {
    this._cartService.cart$.subscribe((cart) => {
      this.cartList = cart.items!;
      if(this.product){
        this.productInCartList = this.checkProductInCartList(this.product);
      }
    });
  }

  getWishList() {
    this._wishlistService.wishList$.subscribe((cart) => {
      this.WishItems = cart.items!;
      if(this.product){
        this.isProductInWishList = this.productInWishList(this.product);
      }
    });
  }

  checkProductInCartList(product: any) {
    const cartItemExist = this.cartList.find((item) => item.product.id === product.id);
    this.quantity = cartItemExist?.quantity || 0
    return cartItemExist;
  }

  productInWishList(product: any) {
    const WishItemExist = this.WishItems.some((item) => item.product.id === product.id);
    return WishItemExist;
  }

  updateCartItemQuantity(value: number, product: any, operation: string) {
    if (operation == "+") {
      value++;
    } else {
      value--;
    }
    this._cartService.setCartItem(
      {
        product: product,
        quantity: value,
      },
      true
    );
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

  addProductToWishList(item: any) {
    const WishItem: WishItem = {
      product: item
    };
    if (this.isProductInWishList) {
      this._wishlistService.deleteWishItem(WishItem.product.id);
      this._toast.error('Product removed from wishlist',
        {
          position: 'top-left'
        });
    }
    else {
      this._wishlistService.setWishItem(WishItem);
      this._toast.success('Product added to wishlist successfully',
        {
          position: 'top-left'
        });
    }
  }



  getProductsByCategory(categoryId: number) {
    this._productService.getProductsByCategory(categoryId).subscribe((data) => {
      console.log(data);
      console.log(data);
      this.categoryProducts = this.createProduct(data);

      console.log(this.categoryProducts);
    })
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.productId = params['id'];
      this.getproduct();
      this.getCartList();
      this.getWishList();
    });

  }

}
