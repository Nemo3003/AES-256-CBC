const CryptoJS = require('crypto-js');

// Function to encrypt the request body for the MerchantHash header
function getMerchantHash(body) {
  const key = CryptoJS.enc.Base64.parse("$key");
  const iv = CryptoJS.enc.Base64.parse("$iv");
  const encrypted = CryptoJS.AES.encrypt(body, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  const merchantHash = encrypted.toString();

  // Print the merchantHash to the console


  return merchantHash;
}

// Create cart data
const cart_data = {
  Currency: 'ARS',
  Merchant_Name: 'Comercio BNPL',
  Products: 'Cuadro',
  Document: null,
  Phone_Number: null,
  Address: null,
  Description: 'Pago por el pedido #000003390',
  Email: 'tobi@directo.com.ar',
  Merchant_Order_Id: '000003390',
  Notify_Url: 'www.test-vtex.com',
  Price: 8889.0000,
  Return_Url_Success: 'www.test-vtex.com',
  Return_Url_Error: 'www.test-vtex.com',
  Additional_Data: 'none',
  Integration_Type: 'VTEX',
};

// Convert cart data to JSON
const request_body = JSON.stringify(cart_data);

// Encrypt the request body
const merchantHash = getMerchantHash(request_body);
console.log("merchantHash:", merchantHash);

// You can now use the `merchantHash` for your API request headers or as needed.
