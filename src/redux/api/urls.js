const TESTING_URLS = {
    AUTH_URL: "http://173.249.20.192:8900/api/v1",
    USER_URL: "http://173.249.20.192:8901/api/v1",
    ADMIN_URL: "http://173.249.20.192:8902/api/v1",
    FILE_URL: "http://173.249.20.192:8903/api/v1",
    SHOP_URL: "http://173.249.20.192:8904/api/v1",
    ORDER_URL: "http://173.249.20.192:8905/api/v1",
    NOTIFICATION_URL: "http://173.249.20.192:8906/api/v1",
    PAYMENT_URL: "http://173.249.20.192:8907/api/v1",
}

const OFFICIAL_URLS = {
    AUTH_URL: "http://173.249.20.192:8900/api/v1",
    USER_URL: "http://173.249.20.192:8901/api/v1",
    ADMIN_URL: "http://173.249.20.192:8902/api/v1",
    FILE_URL: "http://173.249.20.192:8903/api/v1",
    SHOP_URL: "http://173.249.20.192:8904/api/v1",
    ORDER_URL: "http://173.249.20.192:8905/api/v1",
    NOTIFICATION_URl: "http://173.249.20.192:8906/api/v1",
    PAYMENT_URL: "http://173.249.20.192:8907/api/v1",
}
const {
    AUTH_SWAGGER, USER_SWAGGER, ADMIN_SWAGGER, FILE_SWAGGER, SHOP_SWAGGER,ORDER_SWAGGER,
    NOTIFICATION_SWAGGER, PAYMENT_HOST,
} = process.env.REACT_APP_ENVIRONMENT === 'production'
    ? OFFICIAL_URLS
    : TESTING_URLS;

export const _urlAunt = AUTH_SWAGGER + "/jwt";
export const _urlUser = USER_SWAGGER + "/users";
export const _urlAdmin = ADMIN_SWAGGER + "/admin";
export const _urlFile = FILE_SWAGGER + "/file";
export const _urlShop = SHOP_SWAGGER + "/shops";
export const _urlProducts = SHOP_SWAGGER + "/products"
export const _urlOrder = ORDER_SWAGGER + "/order";
export const _urlNotification = NOTIFICATION_SWAGGER;
export const _urlPayment = PAYMENT_HOST + "/payment";
