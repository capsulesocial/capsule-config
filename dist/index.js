var config = {
    content: [],
    darkMode: "class",
    theme: {
        fontFamily: {
            sans: ["Noto", "sans-serif"],
            serif: ["NotoSerif", "serif"]
        },
        extend: {
            spacing: {
                132: "132px"
            },
            typography: {
                DEFAULT: {
                    css: {
                        color: "#000"
                    }
                }
            },
            fontSize: {
                h1: ["2.25rem", "1.1111"],
                h2: ["1.5rem", "1.5em"],
                h3: ["1.25rem", "1.6"],
                h4: ["1rem", "1.5"],
                h5: ["0.83rem", "1.25rem"],
                h6: ["0.67rem", "1rem"],
                p: ["1rem", "1.5rem"],
                "4xl": "2.6rem"
            },
            colors: {
                primary: "var(--color-text-primary)",
                secondary: "#7097AC",
                gray1: "#EEEEEE",
                gray2: "#DDDDDD",
                gray3: "#BBBBBB",
                // gray4: '#888888',
                gray5: "#777777",
                // gray6: '#454545',
                gray7: "#686868",
                hoverPost: "#FAFAFA",
                neutralLightest: "#F6F6F6",
                positive: "#1F7DAD",
                neutral: "#F0B785",
                negative: "#EE1F63",
                lightBG: "#FFFFFF",
                lightBGStop: "rgba(256, 256, 256, 0.95)",
                lightBGStart: "rgba(256, 256, 256, 0.90)",
                lightBorder: "rgba(0, 0, 0, 0.03)",
                lightPrimaryText: "#121212",
                lightSecondaryText: "#454545",
                lightOnPrimaryText: "#FFFFFF",
                lightInput: "rgba(0, 0, 0, 0.03)",
                lightButtonText: "#FFFFFF",
                darkBG: "#121212",
                darkBGStop: "rgba(46, 46, 46, 1)",
                darkBGStart: "rgba(46, 46, 46, 0.90)",
                darkBorder: "rgba(256, 256, 256, 0.05)",
                darkPrimaryText: "#FFFFFF",
                darkSecondaryText: "#EEEEEE",
                darkOnPrimaryText: "#121212",
                darkInput: "rgba(256, 256, 256, 0.05)",
                darkButtonText: "#FFFFFF"
            },
            boxShadow: {
                lg: "1px 2px 20px rgba(0, 0, 0, 0.07)",
                sm: "1px 2px 20px rgba(0, 0, 0, 0.03)"
            },
            width: {
                327: "327px",
                589: "589px",
                600: "600px",
                748: "748px",
                750: "750px",
                1220: "1220px",
                760: "760px",
                7.5: "62.5%",
                4.5: "37.5%"
            },
            minWidth: {
                760: "760px",
                1220: "1220px"
            },
            maxWidth: {
                420: "420px",
                700: "700px",
                760: "760px",
                1220: "1220px",
                mobileCard: "calc(100vw - 50px)"
            },
            height: {
                61: "calc(100vh - 61px)",
                70: "calc(100vh - 70px)",
                80: "calc(100vh - 80px)",
                115: "calc(100vh - 115px)",
                120: "calc(100vh - 120px)",
                130: "calc(100vh - 130px)",
                150: "calc(100vh - 150px)",
                160: "calc(100vh - 160px)",
                170: "calc(100vh - 170px)",
                180: "calc(100vh - 180px)",
                200: "calc(100vh - 200px)",
                210: "calc(100vh - 210px)",
                220: "calc(100vh - 220px)",
                230: "calc(100vh - 230px)",
                240: "calc(100vh - 240px)",
                fit: "fit-content"
            },
            minHeight: {
                40: "40vh",
                61: "calc(100vh - 61px)",
                70: "calc(100vh - 70px)",
                80: "calc(100vh - 80px)",
                115: "calc(100vh - 115px)",
                120: "calc(100vh - 120px)",
                130: "calc(100vh - 130px)",
                150: "calc(100vh - 150px)",
                160: "calc(100vh - 160px)",
                170: "calc(100vh - 170px)",
                180: "calc(100vh - 180px)",
                200: "calc(100vh - 200px)",
                210: "calc(100vh - 210px)",
                220: "calc(100vh - 220px)",
                230: "calc(100vh - 230px)",
                240: "calc(100vh - 240px)"
            },
            maxHeight: {
                90: "90vh"
            }
        }
    },
    plugins: [require("@tailwindcss/typography")]
};
function test() {
    console.log("test");
}
module.exports = {
    config: config,
    test: test
};
