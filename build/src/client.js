"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientAuthentication = exports.ClientRegistration = void 0;
const webauthn_1 = require("@passwordless-id/webauthn");
function ClientRegistration(username) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const challenge = "a7c61ef9-dc23-4806-b486-2428938a547e";
            const registration = yield webauthn_1.client.register(username, challenge, {
                authenticatorType: "auto",
                userVerification: "required",
                timeout: 60000,
                attestation: false,
                userHandle: "recommended to set it to a random 64 bytes value",
                debug: false
            });
            console.log(registration);
            return registration.credential;
        }
        catch (e) {
            console.log(e);
        }
    });
}
exports.ClientRegistration = ClientRegistration;
function ClientAuthentication(publicId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const challenge = "56535b13-5d93-4194-a282-f234c1c24500";
            const authentication = yield webauthn_1.client.authenticate([publicId], challenge, {
                "authenticatorType": "auto",
                "userVerification": "required",
                "timeout": 60000
            });
            return authentication;
        }
        catch (e) {
            console.log("Authentication failed");
        }
    });
}
exports.ClientAuthentication = ClientAuthentication;