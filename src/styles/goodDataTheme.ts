// 
// https://www.gooddata.com/docs/cloud/customize-appearance/create-custom-themes/
// https://www.gooddata.com/docs/gooddata-ui/latest/learn/apply_theming/
// https://github.com/gooddata/gooddata-ui-sdk/blob/master/libs/sdk-model/src/theme/index.ts#L765
// 
import { ITheme } from "@gooddata/sdk-model";

export const customTheme: ITheme = {
    palette: {
        primary: {
            base: "#285C70"
        },
        error: {
            base: "#d13049"
        },
        success: {
            base: "#25a953"
        },
        warning: {
            base: "#FF9546"
        }
    },
    typography: {
        font: "url(https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2)",
        fontBold: "url(https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2)"
    },
    button: {
        borderRadius: "2",
        dropShadow: true
    },
    modal: {
        title: {
            color: "#06131E",
            lineColor: "#DFE0E5"
        },
        borderColor: "#ffffff",
        borderRadius: "6",
        borderWidth: "2",
        dropShadow: true,
        outsideBackgroundColor: "#DFE0E5"
    },
    tooltip: {
        color: "#FFFFFFCC",
        backgroundColor: "#413C5E"
    },
    analyticalDesigner: {
        title: {
            color: "#06131E"
        }
    },
    dashboards: {
        title: {
            color: "#285C70",
            backgroundColor: "#FFFFFF",
            borderColor: "#BFC4E0"
        },
        navigation: {
            title: {
                color: "#FFF"
            },
            borderColor: "#285C70",
            item: {
                color: "#AFC9D1",
                hoverColor: "#AFC9D1",
                selectedColor: "#06131E",
                selectedBackgroundColor: "#fff"
            },
            backgroundColor: "#06131E"
        },
        filterBar: {
            filterButton: {
                backgroundColor: "#FFFFFF"
            },
            backgroundColor: "#FFFFFF",
            borderColor: "#AFC9D1"
        },
        section: {
            title: {
                color: "#285C70",
                lineColor: "#FFFFFF"
            },
            description: {
                color: "#999EA5"
            }
        },
        content: {
            kpiWidget: {
                title: {
                    color: "#AFC9D1",
                    textAlign: "center"
                },
                kpi: {
                    primaryMeasureColor: "#FFF",
                    secondaryInfoColor: "#FFF"
                },
                borderColor: "#AFC9D1",
                borderRadius: "6",
                borderWidth: "2",
                backgroundColor: "#122f40",
                dropShadow: false
            },
            widget: {
                title: {
                    color: "#06131E",
                    textAlign: "center"
                },
                borderColor: "#ffffff",
                borderRadius: "6",
                borderWidth: "1",
                dropShadow: false
            },
            backgroundColor: "#FFFFFF"
        }
    }
};
