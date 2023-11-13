import {Injectable} from '@angular/core';
import * as CryptoJS from 'crypto-js';
import {environment} from "../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {
  private secretKey = CryptoJS.enc.Utf8.parse(environment.secretKey);
  private fixedIV = CryptoJS.enc.Utf8.parse('mExSanM1tVyEV1hjSqBlTcZkEjmYpQWV7Nmnr0thwhw=');

  constructor() {
  }

  encrypt(data: string): string {
    const encrypted = CryptoJS.AES.encrypt(data, this.secretKey, {iv: this.fixedIV});
    return encrypted.toString();
  }

  decrypt(encryptedData: string): string {
    const decrypted = CryptoJS.AES.decrypt(encryptedData, this.secretKey, {iv: this.fixedIV});
    return decrypted.toString(CryptoJS.enc.Utf8);
  }
}
