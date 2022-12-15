"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "François Wouts",
    about: "🚀 Developer Happiness Engineer",
    image: {
        url: "people/francois.jpg",
    },
    social: {
        homepage: "https://fwouts.com/",
        twitter: "fwouts",
        github: "fwouts",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "fwouts",
        youtube: "",
        devto: "",
    },
    location: {
        country: {
            name: "Australia",
            code: "AU",
        },
        city: "Sydney",
    },
    keywords: [keywords_1.default.REACT],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=francois.js.map