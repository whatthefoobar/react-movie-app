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
require("dotenv/config");
var express_1 = require("express");
var path_1 = require("path");
var cors_1 = require("cors");
var axios_1 = require("axios");
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
var port = 5000;
var BASE_URL = "https://api.themoviedb.org/3";
var API_KEY = process.env.API_KEY;
app.get("/api/featured-movies", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, axios_1.default.get("".concat(BASE_URL, "/discover/movie?sort_by=popularity.desc&api_key=").concat(API_KEY, "&page=1"))];
            case 1:
                response = _a.sent();
                res.json(response.data);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                res.status(500).json({ error: "Internal Server Error" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//node : to do can i somehow get all results and paginate through all results not just the fisrt 20 results on a page?
// Endpoint to fetch featured movie by ID
app.get("/api/featured-movies/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, apiUrl, response, movie, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                apiUrl = "".concat(BASE_URL, "/movie/").concat(id, "?api_key=").concat(API_KEY, "&language=en-US");
                return [4 /*yield*/, fetch(apiUrl)];
            case 2:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 3:
                movie = _a.sent();
                res.json(movie);
                return [3 /*break*/, 5];
            case 4:
                error_2 = _a.sent();
                console.error("Error fetching featured movie:", error_2);
                res.status(500).json({ error: "Internal Server Error" });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
//search by key term
app.get("/api/movies/search", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var searchTerm, response, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                searchTerm = req.query.searchTerm;
                if (!searchTerm) {
                    return [2 /*return*/, res.status(400).json({ error: "Search term is required" })];
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, axios_1.default.get("".concat(BASE_URL, "/search/movie?api_key=").concat(API_KEY, "&query=").concat(searchTerm, "&page=1"))];
            case 2:
                response = _a.sent();
                res.json(response.data);
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                res.status(500).json({ error: "Internal Server Error" });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
// for deplayment
if (process.env.NODE_ENV === "production") {
    var __dirname_1 = path_1.default.resolve();
    app.use(express_1.default.static(path_1.default.join(__dirname_1, "/frontend/build")));
    // if in production the frontend buikd is served from the published backend
    app.get("*", function (req, res) {
        return res.sendFile(path_1.default.resolve(__dirname_1, "frontend", "build", "index.html"));
    });
}
else {
    var __dirname_2 = path_1.default.resolve();
    app.get("/", function (req, res) {
        res.send("API is running....");
    });
}
app.listen(port, function () {
    console.log("Server is running on http://localhost:".concat(port));
});
