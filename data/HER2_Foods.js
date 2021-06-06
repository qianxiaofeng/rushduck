const RATE = {
    HIGHLY_RECOMMEND: {value: 2, name: "highly recommend"},
    RECOMMEND: {value: 1, name: "recommend"},
    NEUTRAL: {value: 0, name: "neutral"},
    NOT_RECOMMEND: {value: -1, name: "not recommend"},
    AVOID: {value: -2, name: "avoid"},
}

const FOOD_GROUP = {
    VEGETABLE: {name: "vegetable"},
    FRUIT: {name: "fruit"},
    BEAN: {name: "bean"},
    MEAT_AND_DAIRY: {name: "meat_and_dairy"},
    NUTS_AND_SEED: {name: "nuts_and_seed"},
    CONDIMENT_AND_SAUCE: {name: "condiment_and_sauce"},
    BEVERAGE: {name: "beverage"},
    SWEET: {name: "sweet"},
    OIL_AND_FAT: {name: "oil_and_fat"},
    SEAFOOD: {name: "seafood"},
    SPICY_AND_HERB: {name: "spice_and_herb"},
    GRAIN: {name: "grain"},
}

const HER2_FOODS = [
    {
        name: "apple",
        name_cn: "苹果",
        group: FOOD_GROUP.FRUIT,
        rate: RATE.RECOMMEND,
    },
    {
        name: "salmon",
        name_cn: "三文鱼",
        group: FOOD_GROUP.SEAFOOD,
        rate: RATE.RECOMMEND,
    },
    {
        name: " greens",
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
        name: "cabbage",
        name_cn: "卷心菜",
        group: FOOD_GROUP.VEGETABLE,
        rate: RATE.HIGHLY_RECOMMEND,
    },

]

const FIND_HER2_FOODS_BY_NAME = (name) => {
    return HER2_FOODS.find(f => f.name === name);
}

export {HER2_FOODS, FIND_HER2_FOODS_BY_NAME};