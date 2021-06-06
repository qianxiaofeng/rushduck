const RATE = {
    HIGHLY_RECOMMEND: {value: 2, name: "highly recommend"},
    RECOMMEND: {value: 1, name: "recommend"},
    NEUTRAL: {value: 0, name: "neutral"},
    NOT_RECOMMEND: {value: -1, name: "not recommend"},
    AVOID: {value: -2, name: "avoid"},
}

const FOOD_GROUP = {
    VEGETABLE: {name: "vegetable", name_cn: "蔬菜"},
    FRUIT: {name: "fruit", name_cn: "水果"},
    BEAN: {name: "bean", name_cn: "豆制品"},
    MEAT_AND_DAIRY: {name: "meat_and_dairy", name_cn: "肉和奶"},
    NUTS_AND_SEED: {name: "nuts_and_seed", name_cn: "坚果"},
    CONDIMENT_AND_SAUCE: {name: "condiment_and_sauce", name_cn: "调味品"},
    BEVERAGE: {name: "beverage", name_cn: "饮料"},
    SWEET: {name: "sweet", name_cn: "甜品"},
    OIL_AND_FAT: {name: "oil_and_fat", name_cn: "油"},
    SEAFOOD: {name: "seafood", name_cn: "海鲜"},
    SPICY_AND_HERB: {name: "spice_and_herb", name_cn: "香辛料"},
    GRAIN: {name: "grain", name_cn: "谷物"},
}

const HER2_FOODS = [
    {
        name: "apple",
        name_cn: "苹果",
        group: FOOD_GROUP.FRUIT,
        rate: RATE.RECOMMEND,
    },
    {
        name: "greens",
        name_cn: "绿叶菜",
        group: FOOD_GROUP.VEGETABLE,
        rate: RATE.HIGHLY_RECOMMEND,
    },
    {
        name: "bell_pepper",
        name_cn: "灯笼椒",
        group: FOOD_GROUP.VEGETABLE,
        rate: RATE.RECOMMEND,
    },
    {
        name: "black_pepper",
        name_cn: "黑胡椒",
        group: FOOD_GROUP.SPICY_AND_HERB,
        rate: RATE.RECOMMEND,
    },
    {
        name: "blackberries",
        name_cn: "黑莓",
        group: FOOD_GROUP.FRUIT,
        rate: RATE.RECOMMEND,
    },
    {
        name: "blueberries",
        name_cn: "蓝莓",
        group: FOOD_GROUP.FRUIT,
        rate: RATE.HIGHLY_RECOMMEND,
    },
    {
        name: "cabbage",
        name_cn: "卷心菜，包菜",
        group: FOOD_GROUP.VEGETABLE,
        rate: RATE.HIGHLY_RECOMMEND,
    },
    {
        name: "broccoli",
        name_cn: "西兰花",
        group: FOOD_GROUP.VEGETABLE,
        rate: RATE.HIGHLY_RECOMMEND,
    },
    {
        name: "carrots",
        name_cn: "胡萝卜",
        group: FOOD_GROUP.VEGETABLE,
        rate: RATE.HIGHLY_RECOMMEND,
    },
    {
        name: "cauliflower",
        name_cn: "椰菜花，白菜花，花椰菜，菜花",
        group: FOOD_GROUP.VEGETABLE,
        rate: RATE.RECOMMEND,
    },
    {
        name: "celery",
        name_cn: "芹菜",
        group: FOOD_GROUP.VEGETABLE,
        rate: RATE.RECOMMEND,
    },
    {
        name: "cherries",
        name_cn: "樱桃",
        group: FOOD_GROUP.FRUIT,
        rate: RATE.RECOMMEND,
    },
    {
        name: "leafy cruciferous vegetables",
        name_cn: "十字花科菜，白菜，甘蓝，芥菜，芝麻菜，",
        group: FOOD_GROUP.VEGETABLE,
        rate: RATE.HIGHLY_RECOMMEND,
    },
    {
        name: "cranberries",
        name_cn: "蔓越莓",
        group: FOOD_GROUP.FRUIT,
        rate: RATE.RECOMMEND,
    },
    {
        name: "cucumbers",
        name_cn: "黄瓜",
        group: FOOD_GROUP.VEGETABLE,
        rate: RATE.RECOMMEND,
    },
    {
        name: "flaxseed",
        name_cn: "亚麻籽",
        group: FOOD_GROUP.SPICY_AND_HERB,
        rate: RATE.RECOMMEND,
    },
    {
        name: "grapes",
        name_cn: "红葡萄",
        group: FOOD_GROUP.FRUIT,
        rate: RATE.HIGHLY_RECOMMEND,
    },
    {
        name: "green tea",
        name_cn: "有机绿茶",
        group: FOOD_GROUP.BEVERAGE,
        rate: RATE.RECOMMEND,
    },
    {
        name: "hot peppers",
        name_cn: "辣椒",
        group: FOOD_GROUP.SPICY_AND_HERB,
        rate: RATE.RECOMMEND,
    },
    {
        name: "lettuce",
        name_cn: "生菜",
        group: FOOD_GROUP.VEGETABLE,
        rate: RATE.RECOMMEND,
    },
    {
        name: "extra virgin olive oil",
        name_cn: "初榨橄榄油",
        group: FOOD_GROUP.OIL_AND_FAT,
        rate: RATE.RECOMMEND,
    },
    {
        name: "onions",
        name_cn: "红洋葱，葱，姜，蒜",
        group: FOOD_GROUP.VEGETABLE,
        rate: RATE.HIGHLY_RECOMMEND,
    },
    {
        name: "pomegranates",
        name_cn: "石榴",
        group: FOOD_GROUP.FRUIT,
        rate: RATE.RECOMMEND,
    },
    {
        name: "pumpkins",
        name_cn: "南瓜",
        group: FOOD_GROUP.VEGETABLE,
        rate: RATE.RECOMMEND,
    },
    {
        name: "brown rice",
        name_cn: "有机糙米，黑米，紫米，红米",
        group: FOOD_GROUP.GRAIN,
        rate: RATE.RECOMMEND,
    },
    {
        name: "salmon",
        name_cn: "大西洋三文鱼",
        group: FOOD_GROUP.SEAFOOD,
        rate: RATE.RECOMMEND,
    },
    {
        name: "herring and sardines",
        name_cn: "鲱鱼，青鱼，沙丁鱼",
        group: FOOD_GROUP.SEAFOOD,
        rate: RATE.RECOMMEND,
    },
    {
        name: "strawberries",
        name_cn: "新鲜草莓",
        group: FOOD_GROUP.FRUIT,
        rate: RATE.RECOMMEND,
    },
    {
        name: "sweet potatoes",
        name_cn: "红薯",
        group: FOOD_GROUP.VEGETABLE,
        rate: RATE.NEUTRAL,
    },
    {
        name: "purple sweet potatoes",
        name_cn: "紫薯",
        group: FOOD_GROUP.VEGETABLE,
        rate: RATE.RECOMMEND,
    },
    {
        name: "tomatoes",
        name_cn: "番茄，西红柿",
        group: FOOD_GROUP.VEGETABLE,
        rate: RATE.HIGHLY_RECOMMEND,
    },
    {
        name: "turmeric",
        name_cn: "姜黄粉",
        group: FOOD_GROUP.SPICY_AND_HERB,
        rate: RATE.HIGHLY_RECOMMEND,
    },
    {
        name: "turnips",
        name_cn: "红萝卜",
        group: FOOD_GROUP.VEGETABLE,
        rate: RATE.RECOMMEND,
    },
    {
        name: "walnuts",
        name_cn: "核桃仁（每日不超过30g，5个核桃）",
        group: FOOD_GROUP.NUTS_AND_SEED,
        rate: RATE.RECOMMEND,
    },
    {
        name: "alcohol",
        name_cn: "啤酒，白酒，烈酒",
        group: FOOD_GROUP.BEVERAGE,
        rate: RATE.AVOID,
    },
    {
        name: "red wine",
        name_cn: "红酒",
        group: FOOD_GROUP.BEVERAGE,
        rate: RATE.NOT_RECOMMEND,
    },
    {
        name: "beef",
        name_cn: "牛肉",
        group: FOOD_GROUP.MEAT_AND_DAIRY,
        rate: RATE.AVOID,
    },
    {
        name: "soybeans",
        name_cn: "黄豆，豆腐",
        group: FOOD_GROUP.BEAN,
        rate: RATE.RECOMMEND,
    },
    {
        name: "sugar",
        name_cn: "单糖，多糖，添加糖，含糖饮料",
        group: FOOD_GROUP.SWEET,
        rate: RATE.NOT_RECOMMEND,
    },
    {
        name: "cashew nuts",
        name_cn: "腰果",
        group: FOOD_GROUP.NUTS_AND_SEED,
        rate: RATE.NEUTRAL,
    },
    {
        name: "peanuts",
        name_cn: "花生",
        group: FOOD_GROUP.NUTS_AND_SEED,
        rate: RATE.NOT_RECOMMEND,
    },
    {
        name: "pistachio nuts",
        name_cn: "开心果",
        group: FOOD_GROUP.NUTS_AND_SEED,
        rate: RATE.NEUTRAL,
    },
    {
        name: "mushrooms",
        name_cn: "蘑菇",
        group: FOOD_GROUP.VEGETABLE,
        rate: RATE.HIGHLY_RECOMMEND,
    },
    {
        name: "White button mushrooms",
        name_cn: "白蘑菇",
        group: FOOD_GROUP.VEGETABLE,
        rate: RATE.HIGHLY_RECOMMEND,
    },
    {
        name: "shiitake mushrooms",
        name_cn: "香菇",
        group: FOOD_GROUP.VEGETABLE,
        rate: RATE.RECOMMEND,
    },
    {
        name: "reishi mushroom",
        name_cn: "灵芝粉",
        group: FOOD_GROUP.VEGETABLE,
        rate: RATE.NEUTRAL,
    },


]

const FIND_HER2_FOODS_BY_NAME = (name) => {
    return HER2_FOODS.find(f => f.name === name);
}

export {HER2_FOODS, FIND_HER2_FOODS_BY_NAME, FOOD_GROUP, RATE};