export const metrics = [
    {
        name: "Net Profit Margin",
        value: (metrics) => {return Math.round(metrics["Net Income"] * 100 / metrics["Total Revenue"], 2)},
        icon: "icon",
        tooltip: 5,
        desc: "Something more than..."
    },
    {
        name: "Total Asset Turnover",
        value: (metrics) => {return Math.round(metrics["Total Revenue"] / metrics["Total Assets"], 2)},
        icon: "icon",
        tooltip: 6,
        desc: "Something more than..."
    },
]