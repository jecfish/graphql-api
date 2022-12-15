"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Session_1 = require("../../../server/schema/Session");
const keywords_1 = __importDefault(require("../../../server/schema/keywords"));
const carolyn_stransky_1 = __importDefault(require("../../people/carolyn-stransky"));
const talk = {
    people: [carolyn_stransky_1.default],
    title: "Life is hard and so is learning GraphQL",
    description: `Learning a new technology can be daunting. For many of us, the way we try to make sense of a new technology is through their documentation and the examples we see online. The problem with GraphQL is that - because there’s no “vanilla” GraphQL - there’s no central hub for all of the information and tooling necessary to learn. While documentation is meant to serve as a tool for teaching, it’s underutilized and scattered throughout our community.

Consider this talk a voyage through the ups and downs of learning GraphQL. Along the way, we’ll touch on the major pain points faced by GraphQL beginners and how we can better enable our docs for learning and comprehension.`,
    type: Session_1.SessionType.TALK,
    keywords: [keywords_1.default.GRAPHQL],
    urls: {
        web: "",
        slides: "http://slides.graphql-finland.fi/2018/04-carolyn-stransky.pdf",
        video: "https://www.youtube.com/watch?v=FsRSdGuj588",
    },
};
exports.default = talk;
//# sourceMappingURL=carolyn-stransky.js.map