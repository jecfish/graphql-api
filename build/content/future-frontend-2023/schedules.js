"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Session_1 = require("../../server/schema/Session");
// import * as locations from "../locations";
const people = __importStar(require("../people"));
// All times are given in GMT+0
const monday = {
    day: "2023-06-05",
    description: "Monday – workshops",
    // location: locations.paasitorni,
    intervals: [
        {
            begin: "05:00",
            end: "06:00",
            sessions: [
                {
                    type: Session_1.SessionType.ORGANIZATIONAL,
                    title: "Registration and breakfast",
                    description: "Register and enjoy breakfast on our behalf before the workshop.",
                },
            ],
        },
        {
            begin: "06:00",
            end: "13:30",
            sessions: [],
        },
        {
            begin: "09:00",
            end: "10:00",
            sessions: [
                {
                    type: Session_1.SessionType.LUNCH,
                    title: "Lunch",
                    description: "We have Finnish food in store for people attending the workshop.",
                },
            ],
        },
        {
            begin: "10:00",
            end: "11:30",
            title: "Workshops continue",
            sessions: [],
        },
        {
            begin: "11:30",
            end: "12:00",
            sessions: [
                {
                    type: Session_1.SessionType.COFFEE_BREAK,
                    title: "Break",
                    description: "Drink coffee, tea, or water.",
                },
            ],
        },
        {
            begin: "12:00",
            end: "13:30",
            title: "Workshops continue",
            sessions: [],
        },
    ],
};
const tuesday = {
    day: "2023-06-06",
    description: "Tuesday – workshops",
    // location: locations.paasitorni,
    intervals: [
        {
            begin: "05:00",
            end: "06:00",
            sessions: [
                {
                    type: Session_1.SessionType.ORGANIZATIONAL,
                    title: "Registration and breakfast",
                    description: "Register and enjoy breakfast on our behalf before the workshop.",
                },
            ],
        },
        {
            begin: "06:00",
            end: "13:30",
            sessions: [],
        },
        {
            begin: "09:00",
            end: "10:00",
            sessions: [
                {
                    type: Session_1.SessionType.LUNCH,
                    title: "Lunch",
                    description: "We have Finnish food in store for people attending the workshop.",
                },
            ],
        },
        {
            begin: "10:00",
            end: "11:30",
            title: "Workshops continue",
            sessions: [],
        },
        {
            begin: "11:30",
            end: "12:00",
            sessions: [
                {
                    type: Session_1.SessionType.COFFEE_BREAK,
                    title: "Break",
                    description: "Drink coffee, tea, or water.",
                },
            ],
        },
        {
            begin: "12:00",
            end: "13:30",
            title: "Workshops continue",
            sessions: [],
        },
    ],
};
const wednesday = {
    day: "2023-06-07",
    description: "Wednesday – workshops",
    // location: locations.paasitorni,
    intervals: [
        {
            begin: "05:00",
            end: "06:00",
            sessions: [
                {
                    type: Session_1.SessionType.ORGANIZATIONAL,
                    title: "Registration and breakfast",
                    description: "Register and enjoy breakfast on our behalf before the workshop.",
                },
            ],
        },
        {
            begin: "06:00",
            end: "13:30",
            sessions: [],
        },
        {
            begin: "09:00",
            end: "10:00",
            sessions: [
                {
                    type: Session_1.SessionType.LUNCH,
                    title: "Lunch",
                    description: "We have Finnish food in store for people attending the workshop.",
                },
            ],
        },
        {
            begin: "10:00",
            end: "11:30",
            title: "Workshops continue",
            sessions: [],
        },
        {
            begin: "11:30",
            end: "12:00",
            sessions: [
                {
                    type: Session_1.SessionType.COFFEE_BREAK,
                    title: "Break",
                    description: "Drink coffee, tea, or water.",
                },
            ],
        },
        {
            begin: "12:00",
            end: "13:30",
            title: "Workshops continue",
            sessions: [],
        },
    ],
};
const thursday = {
    day: "2023-06-08",
    description: "Thursday – conference",
    // location: locations.paasitorni,
    intervals: [
        {
            begin: "05:00",
            end: "05:50",
            sessions: [
                {
                    type: Session_1.SessionType.ORGANIZATIONAL,
                    title: "Registration and light breakfast",
                    description: `You can register later too.`,
                },
            ],
        },
        {
            begin: "05:50",
            end: "06:00",
            sessions: [
                {
                    type: Session_1.SessionType.ORGANIZATIONAL,
                    title: "Welcome",
                    description: "Quick welcome to the conference at the main stage.",
                    urls: {
                        video: "",
                    },
                },
            ],
        },
        {
            begin: "06:00",
            end: "07:30",
            title: "Opening",
            sessions: [
                {
                    type: Session_1.SessionType.TALK,
                    level: Session_1.Level.INTERMEDIATE,
                    title: "",
                    description: ``,
                    people: [],
                    urls: {
                        drawing: "",
                        slides: "",
                        video: "",
                    },
                },
                {
                    type: Session_1.SessionType.TALK,
                    level: Session_1.Level.INTERMEDIATE,
                    title: "",
                    description: ``,
                    people: [],
                    urls: {
                        drawing: "",
                        slides: "",
                        video: "",
                    },
                },
            ],
        },
        {
            begin: "07:30",
            end: "08:05",
            sessions: [
                {
                    type: Session_1.SessionType.COFFEE_BREAK,
                    title: "Break",
                    description: "Drink tasty Finnish coffee, live long and prosper.",
                },
            ],
        },
        {
            begin: "08:05",
            end: "09:35",
            title: "Sound",
            sessions: [
                {
                    type: Session_1.SessionType.TALK,
                    level: Session_1.Level.INTERMEDIATE,
                    title: "",
                    description: ``,
                    people: [people.kenWheeler],
                    urls: {
                        drawing: "",
                        slides: "",
                        video: "",
                    },
                },
                {
                    type: Session_1.SessionType.TALK,
                    level: Session_1.Level.INTERMEDIATE,
                    title: "",
                    description: ``,
                    people: [],
                    urls: {
                        drawing: "",
                        slides: "",
                        video: "",
                    },
                },
            ],
        },
        {
            begin: "09:35",
            end: "10:30",
            sessions: [
                {
                    type: Session_1.SessionType.LUNCH,
                    title: "Lunch",
                    description: "Lunch with a Finnish twist.",
                },
            ],
        },
        {
            begin: "10:30",
            end: "12:00",
            title: "Static site generation",
            sessions: [
                {
                    type: Session_1.SessionType.TALK,
                    level: Session_1.Level.INTERMEDIATE,
                    title: "Capri",
                    description: ``,
                    people: [people.felix],
                    urls: {
                        drawing: "",
                        slides: "",
                        video: "",
                    },
                },
                {
                    type: Session_1.SessionType.TALK,
                    level: Session_1.Level.INTERMEDIATE,
                    title: "",
                    description: ``,
                    people: [],
                    urls: {
                        drawing: "",
                        slides: "",
                        video: "",
                    },
                },
            ],
        },
        {
            begin: "12:00",
            end: "12:30",
            sessions: [
                {
                    type: Session_1.SessionType.COFFEE_BREAK,
                    title: "Break",
                    description: "Drink coffee. Again.",
                },
            ],
        },
        {
            begin: "12:30",
            end: "14:00",
            title: "Edge computing",
            sessions: [
                {
                    type: Session_1.SessionType.TALK,
                    level: Session_1.Level.INTERMEDIATE,
                    title: "",
                    description: ``,
                    people: [people.sunil],
                    urls: {
                        drawing: "",
                        slides: "",
                        video: "",
                    },
                },
                {
                    type: Session_1.SessionType.TALK,
                    level: Session_1.Level.INTERMEDIATE,
                    title: "",
                    description: ``,
                    people: [],
                    urls: {
                        drawing: "",
                        slides: "",
                        video: "",
                    },
                },
            ],
        },
        {
            begin: "14:00",
            end: "14:10",
            sessions: [
                {
                    type: Session_1.SessionType.ORGANIZATIONAL,
                    title: "Ending of the day",
                    description: "",
                },
            ],
        },
    ],
};
const friday = {
    day: "2023-06-09",
    description: "Friday – conference",
    // location: locations.paasitorni,
    intervals: [
        {
            begin: "05:00",
            end: "05:50",
            sessions: [
                {
                    type: Session_1.SessionType.ORGANIZATIONAL,
                    title: "Registration and light breakfast",
                    description: `You can register later too.`,
                },
            ],
        },
        {
            begin: "05:50",
            end: "06:00",
            sessions: [
                {
                    type: Session_1.SessionType.ORGANIZATIONAL,
                    title: "Welcome",
                    description: "Quick welcome to the conference at the main stage.",
                    urls: {
                        video: "",
                    },
                },
            ],
        },
        {
            begin: "06:00",
            end: "07:30",
            title: "Security",
            sessions: [
                {
                    type: Session_1.SessionType.TALK,
                    level: Session_1.Level.INTERMEDIATE,
                    title: "",
                    description: ``,
                    people: [people.liran],
                    urls: {
                        drawing: "",
                        slides: "",
                        video: "",
                    },
                },
                {
                    type: Session_1.SessionType.TALK,
                    level: Session_1.Level.INTERMEDIATE,
                    title: "",
                    description: ``,
                    people: [],
                    urls: {
                        drawing: "",
                        slides: "",
                        video: "",
                    },
                },
            ],
        },
        {
            begin: "07:30",
            end: "08:05",
            sessions: [
                {
                    type: Session_1.SessionType.COFFEE_BREAK,
                    title: "Break",
                    description: "Drink tasty Finnish coffee, live long and prosper.",
                },
            ],
        },
        {
            begin: "08:05",
            end: "09:35",
            title: "Design systems",
            sessions: [
                {
                    type: Session_1.SessionType.TALK,
                    level: Session_1.Level.INTERMEDIATE,
                    title: "",
                    description: ``,
                    people: [people.thaisSantos],
                    urls: {
                        drawing: "",
                        slides: "",
                        video: "",
                    },
                },
                {
                    type: Session_1.SessionType.TALK,
                    level: Session_1.Level.INTERMEDIATE,
                    title: "",
                    description: ``,
                    people: [],
                    urls: {
                        drawing: "",
                        slides: "",
                        video: "",
                    },
                },
            ],
        },
        {
            begin: "09:35",
            end: "10:30",
            sessions: [
                {
                    type: Session_1.SessionType.LUNCH,
                    title: "Lunch",
                    description: "Lunch with a Finnish twist.",
                },
            ],
        },
        {
            begin: "10:30",
            end: "12:00",
            title: "Frameworks",
            sessions: [
                {
                    type: Session_1.SessionType.TALK,
                    level: Session_1.Level.INTERMEDIATE,
                    title: "Solid.js",
                    description: ``,
                    people: [people.ryan],
                    urls: {
                        drawing: "",
                        slides: "",
                        video: "",
                    },
                },
                {
                    type: Session_1.SessionType.TALK,
                    level: Session_1.Level.INTERMEDIATE,
                    title: "",
                    description: ``,
                    people: [],
                    urls: {
                        drawing: "",
                        slides: "",
                        video: "",
                    },
                },
            ],
        },
        {
            begin: "12:00",
            end: "12:30",
            sessions: [
                {
                    type: Session_1.SessionType.COFFEE_BREAK,
                    title: "Break",
                    description: "Drink coffee. Again.",
                },
            ],
        },
        {
            begin: "12:30",
            end: "14:00",
            title: "Future of interfaces",
            sessions: [
                {
                    type: Session_1.SessionType.TALK,
                    level: Session_1.Level.INTERMEDIATE,
                    title: "",
                    description: ``,
                    people: [],
                    urls: {
                        drawing: "",
                        slides: "",
                        video: "",
                    },
                },
                {
                    type: Session_1.SessionType.TALK,
                    level: Session_1.Level.INTERMEDIATE,
                    title: "",
                    description: ``,
                    people: [],
                    urls: {
                        drawing: "",
                        slides: "",
                        video: "",
                    },
                },
            ],
        },
        {
            begin: "14:00",
            end: "14:10",
            sessions: [
                {
                    type: Session_1.SessionType.ORGANIZATIONAL,
                    title: "Ending of the day",
                    description: "",
                },
            ],
        },
    ],
};
exports.default = [monday, tuesday, wednesday, thursday, friday];
//# sourceMappingURL=schedules.js.map