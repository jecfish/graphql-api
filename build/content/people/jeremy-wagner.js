"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Jeremy Wagner",
    about: "I'm a web performance consultant, developer, writer, and speaker. I work to make the web faster for everyone, everywhere.",
    image: {
        url: "people/jeremy.jpg",
    },
    social: {
        homepage: "https://jeremy.codes",
        twitter: "malchata",
        github: "malchata",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "",
        youtube: "",
    },
    location: {
        country: {
            name: "United States",
            code: "US",
        },
        city: "Lakeville",
    },
    keywords: [keywords_1.default.REACT],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=jeremy-wagner.js.map