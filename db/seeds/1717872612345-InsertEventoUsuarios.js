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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertEventoUsuarios1717872612345 = void 0;
var InsertEventoUsuarios1717872612345 = /** @class */ (function () {
    function InsertEventoUsuarios1717872612345() {
    }
    InsertEventoUsuarios1717872612345.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("INSERT INTO evento_usuarios (id, \"status_participante\", \"eventoId\", \"usuarioId\") VALUES \n            ('a1b2c3d4-e5f6-7890-abcd-ef1234567890', 'A', 'e86ab35b-38f7-441f-8919-07c3f640ec3d', '123e4567-e89b-12d3-a456-426614174000'),\n            ('e1299bd9-5726-446b-a154-230bc8366e24', 'A', '5ecbae43-e74c-4628-a437-fad673c849d9', '123e4567-e89b-12d3-a456-426614174000'),\n            ('971d0958-4ee1-4ca3-a5bb-8ebe78699967', 'A', '3f4e0ebf-3bd0-4bd7-8719-8396e7925563', '123e4567-e89b-12d3-a456-426614174000')")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    InsertEventoUsuarios1717872612345.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("DELETE FROM evento_usuarios WHERE id IN (\n                'a1b2c3d4-e5f6-7890-abcd-ef1234567890', \n                'e1299bd9-5726-446b-a154-230bc8366e24', \n                '971d0958-4ee1-4ca3-a5bb-8ebe78699967'\n            );")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return InsertEventoUsuarios1717872612345;
}());
exports.InsertEventoUsuarios1717872612345 = InsertEventoUsuarios1717872612345;
