const menu = [
  {
    id: 1,
    title: "Pork 上選豬肉鍋",
    chinese: "(重塑肉 部位-前腿肉)",
    category: "HotPot",
    price: 259,
    img: "./images/main4.jpg",
    desc: `Can choose A or B. A is more meat ,B is more vegetables. `,
    
  },
  {
    id: 2,
    title: "Chicken Breast 低脂雞肉鍋",
    chinese: "(重塑肉 部位-雞胸肉)",
    category: "HotPot",
    price: 269,
    img: "./images/main8.jpg",
    desc: `Can choose A or B. A is more meat ,B is more vegetables.  `,
  },
  {
    id: 3,
    title: "Pork Shoulder  梅花豬肉鍋",
    chinese: "(原肉 部位-肩胛肉)",
    category: "HotPot",
    price: 269,
    img: "./images/main3.jpg",
    desc: `Can choose A or B. A is more meat ,B is more vegetables.`,
  },
  {
    id: 4,
    title: "Vegetarian 清香素食鍋(全素)",
    chinese: "清香素食鍋",
    category: "HotPot",
    price: 269,
    img: "./images/hotpot15.jpg",
    desc: `Vegetarians please order this`,
  },
  {
    id: 5,
    title: "Lamb 上選羊肉鍋",
    chinese: "(重塑肉 部位-類似培根 油花很像培根)",
    category: "HotPot",
    price: 285,
    img: "./images/main7.jpg",
    desc: `Can choose A or B. A is more meat ,B is more vegetables.`,
  },
  {
    id: 6,
    title: "BeefBelly   培根牛肉鍋",
    chinese: "(原肉 部位-胸腹肉)",
    category: "HotPot",
    price: 279,
    img: "./images/main2.jpg",
    desc: `Can choose A or B. A is more meat ,B is more vegetables. `,
  },
  {
    id: 7,
    title: "Pork Belly 培根豬肉鍋",
    chinese: "(原肉 部位-胸腹肉)",
    category: "HotPot",
    price: 285,
    img: "./images/main6.jpg",
    desc: `Can choose A or B. A is more meat ,B is more vegetables.`,
  },
  {
    id: 8,
    title: "Pesto Chicken Fillets 香蒜雞柳鍋",
    chinese: "(原肉 部位-雞胸柳條)",
    category: "HotPot",
    price: 289,
    img: "https://1.bp.blogspot.com/-jduISli1Eoc/WFU8IuWqAJI/AAAAAAAAFiE/KnVcYY3586swpxObYhNf95Tm45A62drkACPcB/w1200-h630-p-k-no-nu/20161210_183825.jpg",
    desc: `Pesto Chicken Fillets`,
  },
  {
    id: 9 ,
    title: "Chicken Drumsticks with Mushrooms 香菇雞腿鍋",
    chinese: "(原肉 部位-雞腿肉)",
    category: "HotPot",
    price: 289,
    img: "https://upssmile.com/wp-content/uploads/2017/02/IMG_2234%E7%B8%AE%E5%9C%96.jpg",
    desc: `Chicken Drumsticks with Mushrooms`,
  },
  {
    id: 10,
    title: "Top Blade Steak 大眾牛肉鍋",
    chinese: "(原肉 部位-肩胛肉)",
    category: "HotPot",
    price: 289,
    img: "./images/main1.jpg",
    desc: `Can choose A or B. A is more meat ,B is more vegetables.`,
  },
  {
    id: 11,
    title: "Prime Lamb Shoulder 頂級羊肩鍋",
    chinese: "(重塑肉 部位-羊肩肉)",
    category: "HotPot",
    price: 315,
    img: "https://1.bp.blogspot.com/-7KskQ_fxyb8/X8YuS5ry68I/AAAAAAAAcTU/kI8WY535NZAc25Gy6ccSx0ju3RrJPM8KACNcBGAsYHQ/s2048/%25E7%2581%25AB%25E9%258D%258B5.jpg",
    desc: `Prime Lamb Shoulder 頂級羊肩鍋`,
  },
  {
    id: 12 ,
    title: "Top lamb ribs  羊肋排鍋",
    chinese: "(原肉 部位-羊肋排)",
    category: "HotPot",
    price: 330,
    img: "https://pic.pimg.tw/penguinpeng/1401969513-1455440509_n.jpg",
    desc: `lamb ribs`,
  },
  {
    id: 13,
    title: "Beef aging 熟成牛肉鍋",
    chinese: "(原肉 部位-後腿肉)",
    category: "HotPot",
    price: 310,
    img: "./images/main13.jpg",
    desc: `Can choose A or B. A is more meat ,B is more vegetables.  `,
  },
  {
    id: 14,
    title: "Flat Iron Pork 霜降豬肉鍋",
    chinese: "(重塑肉 部位-豬頸肉)",
    category: "HotPot",
    price: 330,
    img: "https://greensupply.com.tw/file/user/product/594prodImg20180823033006_1.jpg",
    desc: `Can choose A or B. A is more meat ,B is more vegetables.`,
  },
  {
    id: 15,
    title: "Beef Sirloin 沙朗牛肉鍋",
    chinese: "(原肉 部位-腰脊肉)",
    category: "HotPot",
    price: 335,
    img: "./images/main10.jpg",
    desc: `Beef Sirloin`,
  },
  {
    id: 16,
    title: "Flat Iron Steak 霜降牛肉鍋",
    chinese: "(原肉 部位-肩胛肉)",
    category: "HotPot",
    price: 440,
    img: "./images/main12.jpg",
    desc: `Flat Iron Steak`,
  },
  {
    id: 17,
    title: "American Boneless Beef Short Ribs 美國無骨牛小排鍋",
    chinese: "(原肉 部位-肋脊肉)",
    category: "HotPot",
    price: 490,
    img: "./images/hotpot20.jpg",
    desc: `American Boneless Beef Short Ribs`,
  },
  {
    id: 18,
    title: "Milkfish Fillet 虱目魚柳鍋",
    chinese: "虱目魚柳鍋",
    category: "HotPot",
    price: 285,
    img: "https://www.chientu.com.tw/app_script/DisplayCut.ashx?file=202107131805530.jpg&rootDir=upload/product/&w=640&h=480",
    desc: `Not suitable for people allergic to seafood`,
  },
  {
    id: 19,
    title: "Clams 蛤蜊鍋",
    chinese: "蛤蜊鍋",
    category: "HotPot",
    price: 350,
    img: "./images/hotpot1.jpg",
    desc: `Not suitable for people allergic to seafood`,
  },
  {
    id: 20,
    title: "Oysters 鮮蚵鍋",
    chinese: "鮮蚵鍋",
    category: "HotPot",
    price: 350,
    img: "./images/hotpot2.jpg",
    desc: `Not suitable for people allergic to seafood.`,
  },
  {
    id: 21,
    title: "2-Kinds of Seafood 海鮮雙拼鍋",
    chinese: "海鮮雙拼鍋",
    category: "HotPot",
    price: 390,
    img: "./images/hotpot3.jpg",
    desc: `2-Kinds Of Seafood can choose Oysters,Clams, Shrimp, Fish Fillet.<br>Not suitable for people allergic to seafood.`,
  },
  {
    id: 22,
    title: "Shrimp 鮮蝦鍋",
    chinese: "鮮蝦鍋",
    category: "HotPot",
    price: 350,
    img: "./images/hotpot5.jpg",
    desc: `Not suitable for people allergic to seafood.`,
  },
  {
    id: 23,
    title: "Fish Fillet 魚片鍋",
    chinese: "魚片鍋",
    category: "HotPot",
    price: 350,
    img: "./images/41.jpg",
    desc: `Not suitable for people allergic to seafood.`,
  },
  {
    id: 24,
    title: "3-Kinds of Seafood 三鮮鍋",
    chinese: "三鮮鍋",
    category: "HotPot",
    price: 405,
    img: "./images/42.jpg",
    desc: `3-Kinds Of Seafood can choose Oysters,Clams, Shrimp, Fish Fillet.<br>Not suitable for people allergic to seafood.`,
  },
  {
    id: 25,
    title: "Oysters With Choice of Meat 鮮蚵肉片鍋",
    chinese: "鮮蚵肉片鍋",
    category: "HotPot",
    price: 355,
    img: "./images/hotpot10.jpg",
    desc: `Can choose A or B. A is more meat ,B is more vegetables.<br>Not suitable for people allergic to seafood.`,
  },
  {
    id: 26,
    title: "Fish Fillet with Choice of Meat 鮮魚肉片鍋",
    chinese: "鮮魚肉片鍋",
    category: "HotPot",
    price: 355,
    img: "./images/33.jpg",
    desc: `Can choose A or B. A is more meat ,B is more vegetables.<br>Not suitable for people allergic to seafood.`,
  },
  {
    id: 27,
    title: "Shrimp with Choice of Meat 鮮蝦肉片鍋",
    chinese: "鮮蝦肉片鍋",
    category: "HotPot",
    price: 355,
    img: "./images/hotpot12.jpg",
    desc: `Can choose A or B. A is more meat ,B is more vegetables.<br>Not suitable for people allergic to seafood.`,
  },
  {
    id: 28,
    title: "Clams with Choice of Meat 蛤蜊肉片鍋",
    chinese: "蛤蜊肉片鍋",
    category: "HotPot",
    price: 355,
    img: "./images/hotpot14.jpg",
    desc: `Can choose A or B. A is more meat ,B is more vegetables.<br>Not suitable for people allergic to seafood.`,
  },
  {
    id: 29,
    title: "3-Kinds of Seafood with Choice of Meat 三鮮肉片鍋",
    chinese: "三鮮肉片鍋",
    category: "HotPot",
    price: 420,
    img: "./images/36.jpg",
    desc: `Can choose A or B. A is more meat ,B is more vegetables.<br>Not suitable for people allergic to seafood.`,
  },
  
  
  
  
  
  {
    id: 30,
    title: "Egg 蛋",
    chinese: "蛋",
    category: "sideMeal",
    price: 12,
    img: "./images/egg.jpg",
    desc: `If you order a pot, you can choose to rice,egg,noodle,winter noodle,noodles oodles for one.`,
  },
  {
    id: 31,
    title: "rice 飯",
    chinese: "飯",
    category: "sideMeal",
    price: 15,
    img: "./images/rice.jpg",
    desc: `If you order a pot, you can choose to rice,egg,noodle,winter noodle,noodles oodles for one.`,
  },
  {
    id: 32,
    title: "winter noodles 冬粉",
    chinese: "冬粉",
    category: "sideMeal",
    price: 15,
    img: "./images/1.jpg",
    desc: `If you order a pot, you can choose to rice,egg,noodle,winter noodle,noodles oodles for one.`,
  },
  {
    id: 33,
    title: "noodles 烏龍麵",
    chinese: "烏龍麵",
    category: "sideMeal",
    price: 15,
    img: "./images/1.png",
    desc: `If you order a pot, you can choose to rice,egg,noodle,winter noodle,noodles oodles for one.`,
  },
  {
    id: 34,
    title: "noodles oodles 王子麵",
    chinese: "王子麵",
    category: "sideMeal",
    price: 15,
    img: "./images/2.jpg",
    desc: `If you order a pot, you can choose to rice,egg,noodle,winter noodle,noodles oodles for one.`,
  },
  {
    id: 35,
    title: "Braised pork rice 魯肉飯",
    chinese: "魯肉飯",
    category: "sideMeal",
    price: 30,
    img: "./images/rice2.jpg",
    desc: `If you order a pot, you can choose to rice,egg,noodle,winter noodle,noodles oodles for one or +NT10 upgrade Braised pork rice.`,
  },
  {
    id: 36,
    title: "Spicy Braised pork rice 麻辣魯肉飯",
    chinese: "魯肉飯",
    category: "sideMeal",
    price: 35,
    img: "./images/rice2.jpg",
    desc: `If you order a pot, you can choose to rice,egg,noodle,winter noodle,noodles oodles for one or +NT10 upgrade Braised pork rice.`,
  },
  {
    id: 37,
    title: "Tossed Rice with Pork Lard 豬油拌飯",
    chinese: "豬油拌飯",
    category: "sideMeal",
    price: 25,
    img: "https://www.chientu.com.tw/upload/web/product/carte4.jpg",
    desc: `If you order a pot, you can choose to rice,egg,noodle,winter noodle,noodles oodles for one or +NT10 Tossed Rice with Pork Lard.`,
  },
  {
    id: 38,
    title: "Golden Shrimp Starch 金多蝦漿",
    chinese: "金多蝦漿",
    category: "else",
    price: 50,
    img: "./images/carte1.jpg",
    desc: `Not suitable for people allergic to seafood.`,
  },
  {
    id: 39,
    title: "Pig Blood Rice Cake 豬血糕",
    chinese: "豬血糕",
    category: "else",
    price: 30,
    img: "./images/carte3.jpg",
    desc: `Pig Blood Rice Cake.`,
  },
  {
    id: 40,
    title: "Taro 芋頭",
    chinese: "芋頭",
    category: "else",
    price: 45,
    img: "./images/taro.jpg",
    desc: `Taro is a tropical plant grown primarily for its edible corms.`,
  },
  {
    id: 41,
    title: "Fish Ball with Egg Stuffing 魚包蛋",
    chinese: "魚包蛋",
    category: "else",
    price: 60,
    img: "./images/123.jpg",
    desc: `Fish Ball with Egg Stuffing.`,
  },
  {
    id: 42,
    title: "Oily Chicken Platter 油雞",
    chinese: "油雞",
    category: "else",
    price: 170,
    img: "./images/recommend1.jpg",
    desc: `Oily Chicken Platter.`,
  },
  {
    id: 43,
    title: "Deep-Fried Pork Ribs 排骨酥",
    chinese: "排骨酥",
    category: "else",
    price: 50,
    img: "./images/recommend2.jpg",
    desc: `Deep-Fried Pork Ribs.`,
  },
  {
    id: 44,
    title: "Spicy Duck Blood 麻辣鴨血",
    chinese: "麻辣鴨血",
    category: "else",
    price: 40,
    img: "./images/recommend3.jpg",
    desc: `Hot and Spicy Duck Blood Jelly.`,
  },
  {
    id: 45,
    title: "Drunken Chicken Platter 醉雞盤",
    chinese: "醉雞盤",
    category: "else",
    price: 170,
    img: "./images/recommend4.jpg",
    desc: `Drunken Chicken Platter.`,
  },
  {
    id: 46,
    title: "Lobster Salad Ball 龍蝦沙拉丸",
    chinese: "龍蝦沙拉丸",
    category: "else",
    price: 40,
    img: "./images/recommend5.jpg",
    desc: `Lobster Salad Ball.`,
  },
  
  

];
export default menu;
