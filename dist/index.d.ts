declare const config: {
    content: any[];
    darkMode: string;
    theme: {
        fontFamily: {
            sans: string[];
            serif: string[];
        };
        extend: {
            spacing: {
                132: string;
            };
            typography: {
                DEFAULT: {
                    css: {
                        color: string;
                    };
                };
            };
            fontSize: {
                h1: string[];
                h2: string[];
                h3: string[];
                h4: string[];
                h5: string[];
                h6: string[];
                p: string[];
                "4xl": string;
            };
            colors: {
                primary: string;
                secondary: string;
                gray1: string;
                gray2: string;
                gray3: string;
                gray5: string;
                gray7: string;
                neutralLightest: string;
                positive: string;
                neutral: string;
                negative: string;
                lightBG: string;
                lightBGStop: string;
                lightBGStart: string;
                lightBorder: string;
                lightPrimaryText: string;
                lightSecondaryText: string;
                lightOnPrimaryText: string;
                lightInput: string;
                lightButtonText: string;
                darkBG: string;
                darkBGStop: string;
                darkBGStart: string;
                darkBorder: string;
                darkPrimaryText: string;
                darkSecondaryText: string;
                darkOnPrimaryText: string;
                darkInput: string;
                darkButtonText: string;
            };
            boxShadow: {
                lg: string;
            };
            width: {
                327: string;
                589: string;
                600: string;
                748: string;
                750: string;
                1220: string;
                760: string;
                7.5: string;
                4.5: string;
            };
            minWidth: {
                760: string;
                1220: string;
            };
            maxWidth: {
                420: string;
                700: string;
                760: string;
                1220: string;
                mobileCard: string;
            };
            height: {
                61: string;
                70: string;
                80: string;
                120: string;
                130: string;
                150: string;
                160: string;
                170: string;
                180: string;
                200: string;
                220: string;
                230: string;
                240: string;
                fit: string;
            };
            minHeight: {
                40: string;
                61: string;
                70: string;
                80: string;
                120: string;
                130: string;
                150: string;
                160: string;
                170: string;
                180: string;
                200: string;
                220: string;
                230: string;
                240: string;
            };
            maxHeight: {
                90: string;
            };
        };
    };
    plugins: any[];
};
declare function test(): void;
