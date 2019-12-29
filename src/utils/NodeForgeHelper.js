// https://www.npmjs.com/package/node-forge
import forge from 'node-forge'
const publicKey=`-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxW4SYRO7y0NhpZ7/O1Qg
QyrDw4+ZfPiLWzR68ey+K+tnXzPn/x+Ghvcj938ldd4gxWsMMgK6wIN/v110W6/7
aeiriQRuRFGRdB8hxe0tZbv4ar3GUXSivkhnU19ErqKQ0TYsAGHQWYyqANc0Cb8j
3a1dswNNG6h8I769x0tsIZNDeg/5fRlgOtYrZagG6y0GMST1/U2Yc4yUkV9CyW5m
gzEnsPtN9XuLyML/YKILNumu3+bfAxmBLnKGUR7NKTnwzSkAwSd99RXiNXRpkWOL
HTkyC0uzgDb2D2AFCrsw0Ygmfqp8v96JDbW2zRpnc4HZZqjHi42m4dsfDSEj8bjQ
PQIDAQAB
-----END PUBLIC KEY-----`;
const privateKey=`-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEAxW4SYRO7y0NhpZ7/O1QgQyrDw4+ZfPiLWzR68ey+K+tnXzPn
/x+Ghvcj938ldd4gxWsMMgK6wIN/v110W6/7aeiriQRuRFGRdB8hxe0tZbv4ar3G
UXSivkhnU19ErqKQ0TYsAGHQWYyqANc0Cb8j3a1dswNNG6h8I769x0tsIZNDeg/5
fRlgOtYrZagG6y0GMST1/U2Yc4yUkV9CyW5mgzEnsPtN9XuLyML/YKILNumu3+bf
AxmBLnKGUR7NKTnwzSkAwSd99RXiNXRpkWOLHTkyC0uzgDb2D2AFCrsw0Ygmfqp8
v96JDbW2zRpnc4HZZqjHi42m4dsfDSEj8bjQPQIDAQABAoIBAQCFNzFlmYgkrjGs
LG2x3aDrUWbIhROfNKHrh6zRotnrDqswnPiUt/PxC7+UF5HyR1C7hPC0qgzTK6e+
O1PxLfypyNo92OSCaruHrB4AzHnOZJhJhgXUHqxVUsuNgQH6CC1JTZFBLL8GPZjU
emFdlkCgKoPH75lO6U/iWqj5WdX7jI+F3WyTuajrYgnq8ZUtr2G1Y/nwhY/Nsq6/
4TnJLKbi8DoDoWhmC0ED7Ru380EaINg57HiigEbWylM8E9ZTyBPPOvofaO9M6o9v
AVwOII4gb0HCdQQTL0ZTPObrAXL/PsB9oGJ5VSZT/gsnaI6rpb4cCyRcM4HTe5zk
02lFnihhAoGBAO9SLWpcViebGImtTA0M4xRKrinRUbd4xMK5d8dLLquHcsr3Ty9g
ZOzCRFLWJW/HqXhgr2eEPHYcbetmkc+H0hcyiWtcdQMXjEVGJXWx4xC1Wfeje6Ye
GWR+FnFuQTmEeKxdScYxq0HhYYFRN3fKoFm2E1UZIlY43jNvZv/vm0YlAoGBANMw
f96ieklL3lIwhVUsKpsxPmXu71T67aGsvaV/IFjpmw4C+63QVI19N5GHVm76UqM2
Pa/UWgcuAeJVhXrc1BddvZedN0QtM8Uo9prRAhm7yeNtBjHXhbYvumTOjkwedC4Z
kapKPQdh1120OksV+WFYMzcW2ov5r4AglQ+Vico5AoGAbrRo5caI5BFOrIFJqM/J
S12waw+06VYoTptU2Q/iKt6hL1pves7wYMUMrfT5pFeMAW9YNF5rSYelITt1P7bo
bGqoPs2qIyAFdxYXxfXfv57kWzV4wUMzI9VftGD4Mw8gcztEITZgrjz/yb40FmnY
+ybKkpbp11C/GLPzxXilLzECgYBdBBJ9u3BC0jCkYIyJO/+0BNdny/oLos2BFPUe
bESSBKnvXO7+2jAzdUBBT6uJC6XUDvLSe6P/X4si5en5eEPN2tLDcVJDK+mOYAFl
pMLZFLXR/lXpI/TXjmP5PGS+L/eZylc2+qWwl65krhmysoX5EwDTtbQiTKG4vCEL
ESD0OQKBgA+OIJOLAVZUtAzqhljEjs4Dd7l86FZ0lbXMTVtThwgYf5ZLwqx/D24P
2cYiRWisPgQnOTfPwZLGqvoyMMxbmg63Vl5cTRYmmXFXT0AVvkGX3iNttnHJWlS5
/MTEWF68TxoDZ73uOVVUdWYje/zmxgopyIpnoB9RvQNq8Xbyn6xj
-----END RSA PRIVATE KEY-----
`;

export default {
    encryptRsa(v){
        var pem = forge.pki.publicKeyFromPem(publicKey)
        var encrypted = pem.encrypt(v, 'RSA-OAEP')
        return forge.util.encode64(encrypted)
    },
    decryptRsa(v){
        var pem = forge.pki.privateKeyFromPem(privateKey)
        var decrypted = pem.decrypt(forge.util.decode64(v), 'RSA-OAEP')
        return decrypted
    },
    encryptDes(word, keyStr){
        var cipher = forge.cipher.createCipher('DES-ECB', keyStr);
        cipher.start({iv: ''});
        cipher.update(forge.util.createBuffer(word));
        cipher.finish();
        var encrypted = cipher.output;
        return forge.util.encode64(encrypted.data)
    },
    decryptDes(word, keyStr){
        var decipher = forge.cipher.createDecipher('DES-ECB', keyStr);
        decipher.start({iv: ''});
        decipher.update(forge.util.createBuffer(forge.util.decode64(word)))
        var result = decipher.finish();
        return decipher.output.data
    },
    encryptAes(word, keyStr){
        // var iv = forge.util.hexToBytes(keyStr)
        // var iv = keyStr.split('').map(a=>a.charCodeAt())
        // AES-ECB、AES-CBC、AES-CFB、AES-OFB、AES-CTR、AES-GCM
        var cipher = forge.cipher.createCipher('AES-ECB', keyStr);
        cipher.start({iv: keyStr});
        cipher.update(forge.util.createBuffer(word));
        cipher.finish();
        var encrypted = cipher.output;
        // return encrypted.toHex()
        return forge.util.encode64(encrypted.data)
    },
    decryptAes(word, keyStr){
        // AES-ECB、AES-CBC、AES-CFB、AES-OFB、AES-CTR、AES-GCM
        var decipher = forge.cipher.createDecipher('AES-ECB', keyStr);
        decipher.start({iv: keyStr});
        decipher.update(forge.util.createBuffer(forge.util.decode64(word)))
        var result = decipher.finish(); // check 'result' for true/false
        // outputs decrypted hex
        return decipher.output.data
    },
    md5(v){
        var md = forge.md.md5.create()
        md.update(v)
        return md.digest().toHex()
    },
    sha1(v){
        var md = forge.md.sha1.create()
        md.update(v)
        return md.digest().toHex()
    },
    sha256(v){
        var md = forge.md.sha256.create()
        md.update(v)
        return md.digest().toHex()
    },
    sha384(v){
        var md = forge.md.sha384.create()
        md.update(v)
        return md.digest().toHex()
    },
    sha512(v){
        var md = forge.md.sha512.create()
        md.update(v)
        return md.digest().toHex()
    },
    getUuid(){
        var s = [];
        var hexDigits = "0123456789abcdef";
        for (var i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4";  
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); 
        s[8] = s[13] = s[18] = s[23] = "-";
        var uuid = s.join("");
        return uuid;
    },
    getUuid2(){
        var S4 = function() {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        }
        return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
    },
    getGuid(){
        var guid = "";
        for (var i = 1; i <= 32; i++){
            var n = Math.floor(Math.random()*16.0).toString(16);
            guid += n;
            if((i===8)||(i===12)||(i===16)||(i===20)){
                guid += "-";
            }
        }
        return guid;
    },
    log(){
        if(process.env.NODE_ENV !== 'production'){
            // console.log.apply(null,arguments);
        }
    }
}
