"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("../../server/schema/Contact");
const keywords_1 = __importDefault(require("../../server/schema/keywords"));
const person = {
    name: "Ante Tomić",
    about: "Software Engineer at Infobip and occasional presenter.",
    image: {
        url: "people/ante.jpg",
    },
    social: {
        homepage: "",
        twitter: "",
        github: "antetmc2",
        facebook: "",
        medium: "",
        instagram: "",
        linkedin: "antetomic",
        youtube: "",
        devto: "",
    },
    location: {
        country: {
            name: "Croatia",
            code: "HR",
        },
        city: "Zagreb",
    },
    keywords: [keywords_1.default.REACT],
    type: [Contact_1.ContactType.SPEAKER],
};
exports.default = person;
//# sourceMappingURL=ante.js.map