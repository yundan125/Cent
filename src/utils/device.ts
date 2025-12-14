export const isAndroidDevice = () => {
    if (typeof navigator === "undefined") {
        return false;
    }
    const platform =
        (navigator as Navigator & { userAgentData?: { platform?: string } })
            .userAgentData?.platform ??
        navigator.platform ??
        "";
    const ua = navigator.userAgent ?? "";
    return /android/i.test(platform) || /android/i.test(ua);
};
