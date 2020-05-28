const Strings = {
  APPLICATION: {
    RED_AND_WHITE: "Red & White",
    ROUTES: {
      HOME_SCREEN: "/",
      ORDER_SCREEN: "/confirmOrder",
      ABOUT_US_SCREEN: "/about",
      SHOP: "/shop/:category",
      DEFAULT_CATEGORY: "men"
    },
    API: {
      FEATURES: "http://nijinserver.herokuapp.com/dummy/shopping/features",
      PRODUCTS: "http://nijinserver.herokuapp.com/dummy/shopping/shop/"
    },
    ABOUT_US_SCREEN: {
      IMAGES: {
        TOP_IMAGE_ALT_TEXT: "Find your style here!",
        MIDDLE_IMAGE_ALT_TEXT: "working from home?"
      }
    },
    SHOPPING_SCREEN: {
      MENU: {
        NAVIGATION: {
          SHOPPING_CATEGORY: {
            MEN: "/shop/men",
            WOMEN: "/shop/women",
            KIDS: "/shop/kids",
          },
          ABOUT_US: "/about"
        }
      },
      USER_DETAILS: {
        USER_NAME: "Hi Ashok",
        PIC: "https://instagram.fcjb1-1.fna.fbcdn.net/v/t51.2885-15/e35/36895581_215839485741591_7276993072779493376_n.jpg?_nc_ht=instagram.fcjb1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=AgZj31w4DPsAX_j7k_J&oh=e1bb267bcdba10f5c2a53257db09b499&oe=5EF5FD8A"
      },
      BUTTON_ACTION: {
        ADD_TO_CART: "add-to-cart",
        WISHLIST: "wishlist"
      },
      NO_CART_ITEMS: "No Items in Cart."
    },
    ORDERS_SCREEN: {
      BUTTON: {
        CONTINUE_SHOPPING: "Continue Shopping"
      }
    }
  }
};

export default Strings;
