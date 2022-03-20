const products = [
  {
    name: "Playstation 4",
    imageUrl: 
    "https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: 
    "The PlayStation 4 (PS4) is a home video game console developed by Sony Computer Entertainment. Announced as the successor to the PlayStation 3 in February 2013, it was launched on November 15, 2013, in North America, November 29, 2013 in Europe, South America and Australia, and on February 22, 2014 in Japan",
    price: 399,
    countInStock: 35
  },
  {
    name: "Playstation 5",
    imageUrl: 
    "https://images.unsplash.com/photo-1622297845775-5ff3fef71d13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=707&q=80",
    description: 
    "The PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020, in Australia, Japan, New Zealand, North America, and South Korea, with worldwide release following a week later. The PS5 is part of the ninth generation of video game consoles, along with Microsoft's Xbox Series X and Series S consoles, which were released in the same month.",
    price: 499,
    countInStock: 15
  },
  {
    name: "Iphone 12",
    imageUrl: 
    "https://images.unsplash.com/photo-1611791485440-24e8239a0377?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    description: 
    "The iPhone 12 and 12 Mini is the first major redesign since the iPhone X. It features a chassis with flat edges, similar to the iPhone 4 and iPhone 5 designs, as well as the iPad Pro since 2018 and the 4th-generation iPad Air, which also released in 2020. The notch size is similar to previous iPhone models, despite speculation about a reduction in width.The borders around the display are thinner by 35% than any previous model. The new design also comes with a ceramic-hardened front glass, marketed as Ceramic Shield, while the back retains the previous generation Dual-Ion Exchange strengthened glass.",
    price: 499,
    countInStock: 13
  },
  {
    name: "canon eos 1d",
    imageUrl: 
    "https://images.unsplash.com/photo-1474138452695-d27840ebf07e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: 
    "The Canon EOS-1D X is the company's flagship professional DSLR. It's built around an 18MP full-frame sensor capable of shooting at up to 14 frames per second (12fps with AF) and offers a maximum ISO sensitivity of 204,800, effectively replacing both the 1D Mark IV and 1DS Mark III in Canon's lineup. Despite looking a lot like previous 1D-series cameras, the X has been extensively reworked and includes more professional video features than any other Canon DSLR.",
    price: 1.155,
    countInStock: 8
  },
  {
    name: "JBL FLIP 4",
    imageUrl: 
    "https://images.unsplash.com/photo-1561930661-20c9650e3e25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    description: 
    "JBL Flip 4 is the next generation in the award-winning Flip series; it is a portable Bluetooth speaker that delivers surprisingly powerful stereo sound. This compact speaker is powered by a 3000mAh rechargeable Li-ion battery that offers up to 12 hours of continuous, high-quality audio playtime.",
    price: 199,
    countInStock: 8
  },
]

module.exports = products;