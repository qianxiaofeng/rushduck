import dayjs from "dayjs";

const EVENT_DATA = [
    {
        date: dayjs('2021-06-04T00:00:00.000+08:00'),
        event: {
            title: "第一天",
            detail: "体温超过38.3度，同时白细胞小于3000或中性粒细胞小于1500，立即返院治疗",
        }
    },
    {
        date: dayjs('2021-06-10T00:00:00.000+08:00'),
        event: {
            title: "血常规",
            detail: "",
        }
    },
    {
        date: dayjs('2021-06-13T00:00:00.000+08:00'),
        event: {
            title: "血常规",
            detail: "",
        }
    },
    {
        date: dayjs('2021-06-17T00:00:00.000+08:00'),
        event: {
            title: "血常规",
            detail: "",
        }
    },
    {
        date: dayjs('2021-06-20T00:00:00.000+08:00'),
        event: {
            title: "血常规",
            detail: "",
        }
    },
    {
        date: dayjs('2021-06-23T00:00:00.000+08:00'),
        event: {
            title: "返院",
            detail: "",
        }
    },
    {
        date: dayjs('2021-06-24T00:00:00.000+08:00'),
        event: {
            title: "采血",
            detail: "肝、肾功，离子，血脂，血糖，血常规",
        }
    },
    {
        date: dayjs('2021-06-25T00:00:00.000+08:00'),
        event: {
            title: "用药",
            detail: "",
        }
    },
]

export {EVENT_DATA}