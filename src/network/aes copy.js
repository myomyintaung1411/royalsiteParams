/* eslint-disable */
import CryptoJS from "crypto-js";
import md5 from 'js-md5'
let gameEn =  {
  key: "@hKe9@A1lKe9$Tz1kE@8HnG7",
  iv: '1234567890123456'
}
export default {
  /**
   * aes加密解密
   * 加密encrypt
   * 解密decrypt
   */
  encrypt(data) {
    var key = CryptoJS.enc.Utf8.parse(gameEn.key);
    var iv = CryptoJS.enc.Utf8.parse(gameEn.iv);
    var encrypted = CryptoJS.AES.encrypt(data, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    return encrypted.toString();
  },


  decrypt(data) {
    // console.log("KEYIV ======> ", G_KP);
    var key = CryptoJS.enc.Utf8.parse(gameEn.key);
    var iv = CryptoJS.enc.Utf8.parse(gameEn.iv);

    // var base64 = CryptoJS.enc.Base64.parse(data);
    // var src = CryptoJS.enc.Base64.stringify(base64);

    var decrypted = CryptoJS.AES.decrypt(data, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    // console.log("Decrypted Text ===========> ", decrypted);
    return decrypted.toString(CryptoJS.enc.Utf8);
  },

  GameEnter_Function  ()  {
    let data = {
      name: gameEnterInfo?.value?.name,
      password: md5(gameEnterInfo?.value?.pw),
    };
    var endata = AES.encrypt(JSON.stringify(data));
    window.open(
      Global.old_pc_game_url + `?token=${endata}`
    );
   }
};
