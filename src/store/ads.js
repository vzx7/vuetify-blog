export default {
    state: {
        ads: [
            {
                title: "First",
                description: "Hello I am description",
                promo: false,
                imageSrc:
                    "https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg",
                id: 12
            },
            {
                title: "Second",
                description: "Hello I am description",
                promo: true,
                imageSrc: "https://klike.net/uploads/posts/2019-07/1563795460_1.jpg",
                id: 13
            },
            {
                title: "Third",
                description: "Hello I am description",
                promo: true,
                imageSrc: "https://bipbap.ru/wp-content/uploads/2017/04/2-16.jpg",
                id: 27
            }
        ]
    },
    mutations: {},
    actions: {},
    getters: {
        ads(state) {
            return state.ads;
        },
        promoAds(state) {
            return state.ads.filter(ad => ad.promo);
        },
        myAds(state) {
            return state.ads;
        }
    }
}