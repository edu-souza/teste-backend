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
exports.ModalidadeEntity = void 0;
var evento_entity_1 = require("../../../../../../../../src/evento/evento.entity");
var typeorm_1 = require("typeorm");
var ModalidadeEntity = function () {
    var _classDecorators = [(0, typeorm_1.Entity)({ name: 'modalidade' })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _nome_decorators;
    var _nome_initializers = [];
    var _nome_extraInitializers = [];
    var _icone_decorators;
    var _icone_initializers = [];
    var _icone_extraInitializers = [];
    var _eventos_decorators;
    var _eventos_initializers = [];
    var _eventos_extraInitializers = [];
    var ModalidadeEntity = _classThis = /** @class */ (function () {
        function ModalidadeEntity_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.nome = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _nome_initializers, void 0));
            this.icone = (__runInitializers(this, _nome_extraInitializers), __runInitializers(this, _icone_initializers, void 0));
            this.eventos = (__runInitializers(this, _icone_extraInitializers), __runInitializers(this, _eventos_initializers, void 0));
            __runInitializers(this, _eventos_extraInitializers);
        }
        return ModalidadeEntity_1;
    }());
    __setFunctionName(_classThis, "ModalidadeEntity");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)('uuid')];
        _nome_decorators = [(0, typeorm_1.Column)({ length: 100 })];
        _icone_decorators = [(0, typeorm_1.Column)({ length: 40, name: 'icone', nullable: true })];
        _eventos_decorators = [(0, typeorm_1.OneToMany)(function () { return evento_entity_1.EventoEntity; }, function (evento) { return evento.modalidade; })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _nome_decorators, { kind: "field", name: "nome", static: false, private: false, access: { has: function (obj) { return "nome" in obj; }, get: function (obj) { return obj.nome; }, set: function (obj, value) { obj.nome = value; } }, metadata: _metadata }, _nome_initializers, _nome_extraInitializers);
        __esDecorate(null, null, _icone_decorators, { kind: "field", name: "icone", static: false, private: false, access: { has: function (obj) { return "icone" in obj; }, get: function (obj) { return obj.icone; }, set: function (obj, value) { obj.icone = value; } }, metadata: _metadata }, _icone_initializers, _icone_extraInitializers);
        __esDecorate(null, null, _eventos_decorators, { kind: "field", name: "eventos", static: false, private: false, access: { has: function (obj) { return "eventos" in obj; }, get: function (obj) { return obj.eventos; }, set: function (obj, value) { obj.eventos = value; } }, metadata: _metadata }, _eventos_initializers, _eventos_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ModalidadeEntity = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ModalidadeEntity = _classThis;
}();
exports.ModalidadeEntity = ModalidadeEntity;
