const ORIGINAL_SPRITE_1 =
    "https://suroi.io/atlases/fall-53201d69@1x.png";

const ORIGINAL_SPRITE_2 =
    "https://suroi.io/atlases/fall-47240854@1x.png";

const ORIGINAL_SPRITE_3 =
    "https://suroi.io/atlases/fall-02a15fd1@1x.png";

const ORIGINAL_SPRITE_4 =
    "https://suroi.io/atlases/fall-a0e6314a@1x.png";

const ORIGINAL_SPRITE_5 =
    "https://suroi.io/atlases/fall-b8f2fc6e@1x.png";



const CUSTOM_SPRITE_1 =
    "https://crazedcodernate.github.io/SuroiTest/fall-02a15fd1@1x-REPLACER.png";
const CUSTOM_SPRITE_2 =
    "https://crazedcodernate.github.io/SuroiTest/fall-47240854@1x-REPLACER.png";
const CUSTOM_SPRITE_3 =
    "https://crazedcodernate.github.io/SuroiTest/fall-53201d69@1x-REPLACER.png";
const CUSTOM_SPRITE_4 =
    "https://crazedcodernate.github.io/SuroiTest/fall-a0e6314a@1x-REPLACER.png";
const CUSTOM_SPRITE_5 =
    "https://crazedcodernate.github.io/SuroiTest/fall-b8f2fc6e@1x-REPLACER.png";

// Listen for requests BEFORE they are sent
chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        console.log("[SuroiCheat] Intercepting:", details.url);

        // If the requested URL is the one we want to replace:
        if (details.url === ORIGINAL_SPRITE_1) {
            console.log("[SuroiCheat] -> Redirecting to:", CUSTOM_SPRITE_1);
            return { redirectUrl: CUSTOM_SPRITE_1 };
        }
        else if (details.url === ORIGINAL_SPRITE_2) {
            console.log("[SuroiCheat] -> Redirecting to:", CUSTOM_SPRITE_2);
            return { redirectUrl: CUSTOM_SPRITE_2 };
        }
        else if (details.url === ORIGINAL_SPRITE_3) {
            console.log("[SuroiCheat] -> Redirecting to:", CUSTOM_SPRITE_3);
            return { redirectUrl: CUSTOM_SPRITE_3 };
        }
        else if (details.url === ORIGINAL_SPRITE_4) {
            console.log("[SuroiCheat] -> Redirecting to:", CUSTOM_SPRITE_4);
            return { redirectUrl: CUSTOM_SPRITE_4 };
        }
        else if (details.url === ORIGINAL_SPRITE_5) {
            console.log("[SuroiCheat] -> Redirecting to:", CUSTOM_SPRITE_5);
            return { redirectUrl: CUSTOM_SPRITE_5 };
        }

        // If not that exact URL, do nothing
        return {};
    },
    { urls: ["*://suroi.io/*"] },
    ["blocking"]
);
