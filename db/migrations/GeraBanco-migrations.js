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
exports.Migrations1725326337496 = void 0;
var Migrations1725326337496 = /** @class */ (function () {
    function Migrations1725326337496() {
        this.name = 'Migrations1725326337496';
    }
    Migrations1725326337496.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("CREATE TABLE \"evento_usuarios\" (\"id\" uuid NOT NULL DEFAULT uuid_generate_v4(), \"status_participante\" character varying(1) NOT NULL, \"eventoId\" uuid, \"usuarioId\" uuid, CONSTRAINT \"PK_dc5a3b4e4004dbf29ed97974804\" PRIMARY KEY (\"id\"))")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"usuario\" (\"id\" uuid NOT NULL DEFAULT uuid_generate_v4(), \"nome\" character varying(100) NOT NULL, \"email\" character varying(100) NOT NULL, \"data_nascimento\" TIMESTAMP NOT NULL, \"senha\" character varying(255) NOT NULL, \"imagem\" character varying(100), \"acesso\" character varying(10) NOT NULL,refreshtoken text, \"cidadeId\" uuid, CONSTRAINT \"PK_a56c58e5cabaa04fb2c98d2d7e2\" PRIMARY KEY (\"id\"))")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"cidade\" (\"id\" uuid NOT NULL DEFAULT uuid_generate_v4(), \"nome\" character varying NOT NULL, \"estado\" character(2) NOT NULL, CONSTRAINT \"PK_9fefdadd1d47000e7fa6d2abc8c\" PRIMARY KEY (\"id\"))")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"evento\" (\"id\" uuid NOT NULL DEFAULT uuid_generate_v4(), \"titulo\" character varying(100) NOT NULL, \"descricao\" text NOT NULL, \"tipo\" character varying(100) NOT NULL, \"data\" TIMESTAMP NOT NULL, \"hora\" TIME, \"dia_semana\" character varying, \"quantidade_participantes\" integer NOT NULL, \"latitude\" character varying, \"longitude\" character varying, \"imagem\" text, \"admin\" character varying, \"bairro\" character varying NOT NULL, \"rua\" character varying NOT NULL, \"numero\" character varying, \"complemento\" character varying, \"status\" character varying NOT NULL, \"status_aprovacao\" character varying NOT NULL, \"cidadeId\" uuid, \"modalidadeId\" uuid, CONSTRAINT \"PK_ceb2e9607555230aee6aff546b0\" PRIMARY KEY (\"id\"))")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"modalidade\" (\"id\" uuid NOT NULL DEFAULT uuid_generate_v4(), \"nome\" character varying(100) NOT NULL, \"icone\" character varying(40), CONSTRAINT \"PK_6ed9e01b68c48e129e0e41fc202\" PRIMARY KEY (\"id\"))")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"evento_usuarios\" ADD CONSTRAINT \"FK_9fea26f6e3571a9881f7f068d0a\" FOREIGN KEY (\"eventoId\") REFERENCES \"evento\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"evento_usuarios\" ADD CONSTRAINT \"FK_ce698d429ab5ca93753b1ea0bd1\" FOREIGN KEY (\"usuarioId\") REFERENCES \"usuario\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"usuario\" ADD CONSTRAINT \"FK_f15ef5e406fe408e921573c7ad8\" FOREIGN KEY (\"cidadeId\") REFERENCES \"cidade\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"evento\" ADD CONSTRAINT \"FK_245693914452ab1f730af0cfb1c\" FOREIGN KEY (\"cidadeId\") REFERENCES \"cidade\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"evento\" ADD CONSTRAINT \"FK_6703a705bc477df2e419304adc3\" FOREIGN KEY (\"modalidadeId\") REFERENCES \"modalidade\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 10:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Migrations1725326337496.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE \"evento\" DROP CONSTRAINT \"FK_6703a705bc477df2e419304adc3\"")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"evento\" DROP CONSTRAINT \"FK_245693914452ab1f730af0cfb1c\"")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"usuario\" DROP CONSTRAINT \"FK_f15ef5e406fe408e921573c7ad8\"")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"evento_usuarios\" DROP CONSTRAINT \"FK_ce698d429ab5ca93753b1ea0bd1\"")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"evento_usuarios\" DROP CONSTRAINT \"FK_9fea26f6e3571a9881f7f068d0a\"")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"modalidade\"")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"evento\"")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"cidade\"")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"usuario\"")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"evento_usuarios\"")];
                    case 10:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Migrations1725326337496;
}());
exports.Migrations1725326337496 = Migrations1725326337496;
