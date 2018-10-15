const shop = [
  {
    name: "javascript",
    price: "abc",
    quantity: 0
  },
  {
    name: "c++",
    price: "abc",
    quantity: 0
  },
  {
    name: "c",
    price: "abc",
    quantity: 0
  },
  {
    name: "data structure",
    price: "abc",
    quantity: 0
  },
  {
    name: "operating system",
    price: "abc",
    quantity: 0
  }
];

const vm = new Vue({
  el: "#app",
  data: {
    items: [],
    shop: shop,
    showCart: false,
    verified: false,
    quantity: 1
  },
  computed: {
    total() {
      var total = 0;
      for(var i = 0; i < this.items.length; i++) {
        total += this.items[i].price;
      }
      return total;
    }
  },
  methods: {
    addToCart(item) {
      item.quantity += 1;
      this.items.push(item);
    },
    removeFromCart(item) {
      item.quantity -= 1;
      this.items.splice(this.items.indexOf(item), 1);
    }
  }
});
