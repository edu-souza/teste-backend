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
exports.InsertModalidade1717801456258 = void 0;
var InsertModalidade1717801456258 = /** @class */ (function () {
    function InsertModalidade1717801456258() {
    }
    InsertModalidade1717801456258.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("INSERT INTO modalidade (id, nome, icone) VALUES " +
                            "('5751520f-04b6-4777-a70f-6835f6744808', 'Baseball', 'baseball.svg')," +
                            "('b82f46cd-d7eb-4b0c-b331-069b1fe7935f', 'Basquete', 'basquete.svg')," +
                            "('1ac19240-dd74-48c8-9d8c-f98a82f964dc', 'Bowling', 'bowling-ball-outline.svg')," +
                            "('126095f4-054f-4d9f-9558-a5cef8c41849', 'Caminhada', 'caminhada.svg')," +
                            "('0c50f003-1f5d-4700-ac69-3ae3fc9ed913', 'Corrida', 'corrida.svg')," +
                            "('2d091fac-e1d5-4d7e-b123-a2c3de2e36d8', 'Futebol Americano', 'futebol-americano.svg')," +
                            "('3e4e1d35-5f67-42f4-8473-1f9b19d814b7', 'Futebol', 'futebol.svg')," +
                            "('4c7d2f5b-6d8e-4f5c-9783-cb5d8fa1e4b0', 'Handebol', 'handebol.svg')," +
                            "('5d8f0e4b-7e9f-4f9a-9b8d-df7d9f8a2bcb', 'Musculação', 'musculacao.svg')," +
                            "('6e9a1f4c-8e1f-4f9b-ab9d-e7a9f9b8e2cd', 'Natação', 'natacao.svg')," +
                            "('7f0a2f5d-9f2e-4fab-ab0d-f8b9e0a1f3d2', 'Rugby', 'rugby.svg')," +
                            "('8a1b3c4d-ae5f-4fc1-b9cd-ef1a2b3c4d5f', 'Skate', 'skate.svg')," +
                            "('09fd02ce-0cd8-45fc-9dc0-111e2a4bdad3', 'Tênis', 'tenis.svg')," +
                            "('3473971e-2c67-4bcd-8277-44cc7ffb3999', 'Tênis de Mesa', 'tennisball-outline.svg')," +
                            "('4270dc09-9a7f-400f-92f7-47352f62c60f', 'Vôlei', 'volei.svg')")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    InsertModalidade1717801456258.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("DELETE FROM modalidade WHERE id IN (" +
                            "'5751520f-04b6-4777-a70f-6835f6744808', " +
                            "'b82f46cd-d7eb-4b0c-b331-069b1fe7935f', " +
                            "'1ac19240-dd74-48c8-9d8c-f98a82f964dc', " +
                            "'126095f4-054f-4d9f-9558-a5cef8c41849', " +
                            "'0c50f003-1f5d-4700-ac69-3ae3fc9ed913', " +
                            "'2d091fac-e1d5-4d7e-b123-a2c3de2e36d8', " +
                            "'3e4e1d35-5f67-42f4-8473-1f9b19d814b7', " +
                            "'4c7d2f5b-6d8e-4f5c-9783-cb5d8fa1e4b0', " +
                            "'5d8f0e4b-7e9f-4f9a-9b8d-df7d9f8a2bcb', " +
                            "'6e9a1f4c-8e1f-4f9b-ab9d-e7a9f9b8e2cd', " +
                            "'7f0a2f5d-9f2e-4fab-ab0d-f8b9e0a1f3d2', " +
                            "'8a1b3c4d-ae5f-4fc1-b9cd-ef1a2b3c4d5f', " +
                            "'09fd02ce-0cd8-45fc-9dc0-111e2a4bdad3', " +
                            "'3473971e-2c67-4bcd-8277-44cc7ffb3999', " +
                            "'4270dc09-9a7f-400f-92f7-47352f62c60f'" +
                            ");")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return InsertModalidade1717801456258;
}());
exports.InsertModalidade1717801456258 = InsertModalidade1717801456258;
