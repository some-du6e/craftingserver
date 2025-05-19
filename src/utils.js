function dlog(thething, type = "info") {
    const debug = process.env.DEBUG;
    if (debug) {
        switch (type.toLowerCase()) {
            case "error":
                console.error(`[ERROR] ${thething}`);
                break;
            case "warn":
                console.warn(`[WARN] ${thething}`);
                break;
            case "info":
                console.info(`[INFO] ${thething}`);
                break;
            case "debug":
                console.debug(`[DEBUG] ${thething}`);
                break;
            default:
                console.log(`[LOG] ${thething}`);
        }
    }
}

// Export the function
export { dlog };
