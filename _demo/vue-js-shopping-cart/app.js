window.vue = new Vue({
    el: "#app",
    data: {
        loading: true,
        cart: [],
        saved: []
    },
    methods: {
        delete_from_cart: function(index) {
            this.cart.splice(index, 1);
        },
        delete_from_saved: function(index) {
            this.saved.splice(index, 1)
        },
        save_for_later: function(index) {
            var item = this.cart[index];
            this.cart.splice(index, 1);
            this.saved.push(item);
        },
        add_to_cart: function(index) {
            var item = this.saved[index];
            this.saved.splice(index, 1);
            this.cart.push(item);
        }
    },
    created: function() {
        fetch('./data.json')
            .then(res => res.json())
            .then(res => {
                setTimeout(function() {
                    this.loading = false;
                    this.cart = res.cart;
                    this.saved = res.saved;
                }.bind(this), 1000);
            })
    }
});