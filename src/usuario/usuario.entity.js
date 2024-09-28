"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioEntity = void 0;
var typeorm_1 = require("typeorm");
var cidade_entity_1 = require("../../../../../../../../src/cidade/cidade.entity");
var evento_usuario_entity_1 = require("../../../../../../../../src/evento_usuario/evento_usuario.entity");
var UsuarioEntity = function () {
    var _classDecorators = [(0, typeorm_1.Entity)({ name: 'usuario' })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _nome_decorators;
    var _nome_initializers = [];
    var _nome_extraInitializers = [];
    var _email_decorators;
    var _email_initializers = [];
    var _email_extraInitializers = [];
    var _dataNascimento_decorators;
    var _dataNascimento_initializers = [];
    var _dataNascimento_extraInitializers = [];
    var _senha_decorators;
    var _senha_initializers = [];
    var _senha_extraInitializers = [];
    var _imagem_decorators;
    var _imagem_initializers = [];
    var _imagem_extraInitializers = [];
    var _acesso_decorators;
    var _acesso_initializers = [];
    var _acesso_extraInitializers = [];
    var _cidade_decorators;
    var _cidade_initializers = [];
    var _cidade_extraInitializers = [];
    var _eventosUsuarios_decorators;
    var _eventosUsuarios_initializers = [];
    var _eventosUsuarios_extraInitializers = [];
    var _refreshtoken_decorators;
    var _refreshtoken_initializers = [];
    var _refreshtoken_extraInitializers = [];
    var _passwordResetCode_decorators;
    var _passwordResetCode_initializers = [];
    var _passwordResetCode_extraInitializers = [];
    var _passwordResetExpiration_decorators;
    var _passwordResetExpiration_initializers = [];
    var _passwordResetExpiration_extraInitializers = [];
    var UsuarioEntity = _classThis = /** @class */ (function () {
        function UsuarioEntity_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.nome = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _nome_initializers, void 0));
            this.email = (__runInitializers(this, _nome_extraInitializers), __runInitializers(this, _email_initializers, void 0));
            this.dataNascimento = (__runInitializers(this, _email_extraInitializers), __runInitializers(this, _dataNascimento_initializers, void 0));
            this.senha = (__runInitializers(this, _dataNascimento_extraInitializers), __runInitializers(this, _senha_initializers, void 0));
            this.imagem = (__runInitializers(this, _senha_extraInitializers), __runInitializers(this, _imagem_initializers, void 0));
            this.acesso = (__runInitializers(this, _imagem_extraInitializers), __runInitializers(this, _acesso_initializers, void 0));
            this.cidade = (__runInitializers(this, _acesso_extraInitializers), __runInitializers(this, _cidade_initializers, void 0));
            this.eventosUsuarios = (__runInitializers(this, _cidade_extraInitializers), __runInitializers(this, _eventosUsuarios_initializers, void 0));
            this.refreshtoken = (__runInitializers(this, _eventosUsuarios_extraInitializers), __runInitializers(this, _refreshtoken_initializers, void 0));
            // Adicionando as colunas para o código de redefinição de senha e data de expiração
            this.passwordResetCode = (__runInitializers(this, _refreshtoken_extraInitializers), __runInitializers(this, _passwordResetCode_initializers, void 0));
            this.passwordResetExpiration = (__runInitializers(this, _passwordResetCode_extraInitializers), __runInitializers(this, _passwordResetExpiration_initializers, void 0));
            __runInitializers(this, _passwordResetExpiration_extraInitializers);
        }
        return UsuarioEntity_1;
    }());
    __setFunctionName(_classThis, "UsuarioEntity");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)('uuid')];
        _nome_decorators = [(0, typeorm_1.Column)({ length: 100 })];
        _email_decorators = [(0, typeorm_1.Column)({ length: 100 })];
        _dataNascimento_decorators = [(0, typeorm_1.Column)({ name: 'data_nascimento' })];
        _senha_decorators = [(0, typeorm_1.Column)({ length: 255 })];
        _imagem_decorators = [(0, typeorm_1.Column)({ length: 100, nullable: true })];
        _acesso_decorators = [(0, typeorm_1.Column)({ length: 10 })];
        _cidade_decorators = [(0, typeorm_1.ManyToOne)(function () { return cidade_entity_1.CidadeEntity; }, function (cidade) { return cidade.usuarios; })];
        _eventosUsuarios_decorators = [(0, typeorm_1.OneToMany)(function () { return evento_usuario_entity_1.EventoUsuarioEntity; }, function (eventoUsuario) { return eventoUsuario.usuario; })];
        _refreshtoken_decorators = [(0, typeorm_1.Column)({ type: 'text', nullable: true })];
        _passwordResetCode_decorators = [(0, typeorm_1.Column)({ type: 'text', nullable: true })];
        _passwordResetExpiration_decorators = [(0, typeorm_1.Column)({ type: 'timestamptz', nullable: true })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _nome_decorators, { kind: "field", name: "nome", static: false, private: false, access: { has: function (obj) { return "nome" in obj; }, get: function (obj) { return obj.nome; }, set: function (obj, value) { obj.nome = value; } }, metadata: _metadata }, _nome_initializers, _nome_extraInitializers);
        __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: function (obj) { return "email" in obj; }, get: function (obj) { return obj.email; }, set: function (obj, value) { obj.email = value; } }, metadata: _metadata }, _email_initializers, _email_extraInitializers);
        __esDecorate(null, null, _dataNascimento_decorators, { kind: "field", name: "dataNascimento", static: false, private: false, access: { has: function (obj) { return "dataNascimento" in obj; }, get: function (obj) { return obj.dataNascimento; }, set: function (obj, value) { obj.dataNascimento = value; } }, metadata: _metadata }, _dataNascimento_initializers, _dataNascimento_extraInitializers);
        __esDecorate(null, null, _senha_decorators, { kind: "field", name: "senha", static: false, private: false, access: { has: function (obj) { return "senha" in obj; }, get: function (obj) { return obj.senha; }, set: function (obj, value) { obj.senha = value; } }, metadata: _metadata }, _senha_initializers, _senha_extraInitializers);
        __esDecorate(null, null, _imagem_decorators, { kind: "field", name: "imagem", static: false, private: false, access: { has: function (obj) { return "imagem" in obj; }, get: function (obj) { return obj.imagem; }, set: function (obj, value) { obj.imagem = value; } }, metadata: _metadata }, _imagem_initializers, _imagem_extraInitializers);
        __esDecorate(null, null, _acesso_decorators, { kind: "field", name: "acesso", static: false, private: false, access: { has: function (obj) { return "acesso" in obj; }, get: function (obj) { return obj.acesso; }, set: function (obj, value) { obj.acesso = value; } }, metadata: _metadata }, _acesso_initializers, _acesso_extraInitializers);
        __esDecorate(null, null, _cidade_decorators, { kind: "field", name: "cidade", static: false, private: false, access: { has: function (obj) { return "cidade" in obj; }, get: function (obj) { return obj.cidade; }, set: function (obj, value) { obj.cidade = value; } }, metadata: _metadata }, _cidade_initializers, _cidade_extraInitializers);
        __esDecorate(null, null, _eventosUsuarios_decorators, { kind: "field", name: "eventosUsuarios", static: false, private: false, access: { has: function (obj) { return "eventosUsuarios" in obj; }, get: function (obj) { return obj.eventosUsuarios; }, set: function (obj, value) { obj.eventosUsuarios = value; } }, metadata: _metadata }, _eventosUsuarios_initializers, _eventosUsuarios_extraInitializers);
        __esDecorate(null, null, _refreshtoken_decorators, { kind: "field", name: "refreshtoken", static: false, private: false, access: { has: function (obj) { return "refreshtoken" in obj; }, get: function (obj) { return obj.refreshtoken; }, set: function (obj, value) { obj.refreshtoken = value; } }, metadata: _metadata }, _refreshtoken_initializers, _refreshtoken_extraInitializers);
        __esDecorate(null, null, _passwordResetCode_decorators, { kind: "field", name: "passwordResetCode", static: false, private: false, access: { has: function (obj) { return "passwordResetCode" in obj; }, get: function (obj) { return obj.passwordResetCode; }, set: function (obj, value) { obj.passwordResetCode = value; } }, metadata: _metadata }, _passwordResetCode_initializers, _passwordResetCode_extraInitializers);
        __esDecorate(null, null, _passwordResetExpiration_decorators, { kind: "field", name: "passwordResetExpiration", static: false, private: false, access: { has: function (obj) { return "passwordResetExpiration" in obj; }, get: function (obj) { return obj.passwordResetExpiration; }, set: function (obj, value) { obj.passwordResetExpiration = value; } }, metadata: _metadata }, _passwordResetExpiration_initializers, _passwordResetExpiration_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        UsuarioEntity = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return UsuarioEntity = _classThis;
}();
exports.UsuarioEntity = UsuarioEntity;
