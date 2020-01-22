//Add a description to the data object with the value "A pair of warm, fuzzy socks". Then display the description using an expression in an p element, underneath the h1.

var app = new Vue({
    el: '#app',
    data: {
      product: 'Socks',
      brand: "The Best",
      selected: 0,
      link: 'https://www.vuemastery.com/courses/intro-to-vue-js/vue-instance/',
      details: ["Unisex","Universal size","100% cotton"],
      variants: [
        {
          varID: 1,
          varColour: "Green",
          varImage: 'images/socks.jpg',
          quantity: 100,
          sizes:[34,35,36,37,38,39],
          ordered:0
        },
        {
          varID: 2,
          varColour: "Blue",
          varImage: 'images/blue_socks.jpg',
          quantity: 10,
          sizes:[34,35],
          ordered:0
        },        
      ],
      
    },
    
    methods: {
      // we're using anymous functions
      // addToCart: function () {
      //   this.cart+=1
      // },
      // We can use shorter version but not all browsers support it
      addToCart() {
        this.variants[this.selected].ordered += 1
        this.variants[this.selected].quantity -= 1
      },      
      changeImage(index){
        this.selected=index
        console.log(selected)
      },
      removeFromCart(){
        this.variants[this.selected].ordered -= 1
        this.variants[this.selected].quantity += 1
      },
      order(){
        window.alert("Ordered!");
      }
    },

    computed: {
      title() {
        return this.brand + " " + this.product
      },
      instock(){
        return this.variants[this.selected].quantity
      },
      image(){
        return this.variants[this.selected].varImage
      },
      size(){
        return this.variants[this.selected].sizes
      },
      cart(){
        return this.variants[1].ordered + this.variants[0].ordered       
      }
    }
  })