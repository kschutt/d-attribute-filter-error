import tigerFactory, { ContextDeferredAuthProvider, redirectToTigerAuthentication, TigerTokenAuthProvider } from "@gooddata/sdk-backend-tiger";

const createBackend = (token = '') => {
    const factory = tigerFactory().onHostname("https://dashboard.outburstdata.com");
    if (token) {
        return factory.withAuthentication(new TigerTokenAuthProvider(token));
    } else {
        return factory.withAuthentication(new ContextDeferredAuthProvider(redirectToTigerAuthentication));
    }
};

export default createBackend;