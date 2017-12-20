const menu = require("./menu.json");
const system = require("./system/system.js");
mongoClient = system.mongoClient;
mongodb = system.mongodb;
url = system.url;

/* загружаем список заказов */
mongoClient.connect(url, function(err, db){
        db.collection("orderStatus").insertMany([
            {id:1, name: "Заказано"},
            {id:2, name: "Готовится"},
            {id:3, name: "Доставляется"},
            {id:4, name: "Возникли сложности"},
            {id:5, name: "Подано"}
        ]);
    db.close();
});

/* загружаем меню */
mongoClient.connect(url, function(err, db){
    db.collection("menu").insertMany(menu);
    db.close();
});

