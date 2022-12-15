"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Matteo Frana",
    about: "Founder of @ReactBricks, the Visual editing CMS.",
    image: {
        url: "people/matteo.jpg",
    },
    social: {
        homepage: "https://reactbricks.com/",
        twitter: "matfrana",
        github: "matteofrana",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "",
        youtube: "",
        devto: "",
    },
    location: {
        country: {
            name: "Italy",
            code: "IT",
        },
        city: "Bergamo",
    },
    keywords: [keywords_1.default.REACT],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=matteo.js.map