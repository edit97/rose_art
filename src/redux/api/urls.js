const TESTING_URLS = {
    AUTH_URL: "http://173.249.20.192:8900/api/v1",
    USER_URL: "http://173.249.20.192:8901/api/v1",
    ADMIN_URL: "http://173.249.20.192:8902/api/v1",
    FILE_URL: "http://173.249.20.192:8903",
    SHOP_URL: "http://173.249.20.192:8904/api/v1",
    ORDER_URL: "http://173.249.20.192:8905/api/v1",
    NOTIFICATION_URL: "http://173.249.20.192:8906/api/v1",
    PAYMENT_URL: "http://173.249.20.192:8907/api/v1",
}

const OFFICIAL_URLS = {
    AUTH_URL: "http://173.249.20.192:8900/api/v1",
    USER_URL: "http://173.249.20.192:8901/api/v1",
    ADMIN_URL: "http://173.249.20.192:8902/api/v1",
    FILE_URL: "http://173.249.20.192:8903",
    SHOP_URL: "http://173.249.20.192:8904/api/v1",
    ORDER_URL: "http://173.249.20.192:8905/api/v1",
    NOTIFICATION_URl: "http://173.249.20.192:8906/api/v1",
    PAYMENT_URL: "http://173.249.20.192:8907/api/v1",
}
const {
    AUTH_URL, USER_URL, ADMIN_URL, FILE_URL, SHOP_URL,ORDER_URL,
    NOTIFICATION_URL, PAYMENT_URL,
} = process.env.REACT_APP_ENVIRONMENT === 'production'
    ? OFFICIAL_URLS
    : TESTING_URLS;

export const _urlAunt = AUTH_URL + "/jwt/token";
export const _urlUsers = USER_URL + "/users";
export const _urlActivation = USER_URL + "/users/activation";
export const _urlAdmin = ADMIN_URL + "/admin";
export const _urlFile = FILE_URL + "/file";
export const _urlShop = SHOP_URL + "/shops";
export const _urlProducts = SHOP_URL + "/products";
export  const _urlSlider = SHOP_URL + "/sliders"
export const _urlOrder = ORDER_URL + "/order";
export const _urlNotification = NOTIFICATION_URL;
export const _urlPayment = PAYMENT_URL + "/payment";
export const _urlSubscribe = USER_URL + "/subscribe";
export const _urlContacts = USER_URL + "/contacts";
export const _urlForgotPassword = USER_URL + "/users/forgot-password";
export const _hostMedia = FILE_URL

