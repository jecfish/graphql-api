"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Mark Dalgleish",
    about: "CSS Modules co-creator, Playroom, Braid, MelbJS. OSS / UI / design / tooling at @seek-oss",
    image: {
        url: "people/mark.jpg",
    },
    social: {
        homepage: "",
        twitter: "markdalgleish",
        github: "markdalgleish",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "",
        youtube: "",
        devto: "",
    },
    location: {
        country: {
            name: "Australia",
            code: "AU",
        },
        city: "Melbourne",
    },
    keywords: [keywords_1.default.REACT],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=mark.js.map