window.globalConfig = {
    proxy: "https://cors-proxy.crawler.link/",   //insert proxy link for cors
    exchanges: [    // insert new obj with exchange to have opportunity to create new valid exchange
        {
            ccxtName: "binance",
            name: "Binance",
            img: "https://public.bnbstatic.com/20190405/eb2349c3-b2f8-4a93-a286-8f86a62ea9d8.png",  //img optional
            needPassword: false,
        },
        {
            ccxtName: "kucoin",
            name: "Kucoin",
            img: "https://play-lh.googleusercontent.com/dQ9d57qXuaxTEVwMnS6J4qxVsZLSJYSm-X6zKzV-_w7ClLYh8jSe0J83MhSUgy2kuA",
            needPassword: true,
        },
    ]
}