const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

const userSchema = new mongoose.Schema(
    {
        username: String,
        password: String,
        contact: String,
        email: String,
        otp: String,
        avatar: {
            type: String,
            default: "",
        },
        links: {
            type: Object,
            default: {
                linkedin: "",
                github: "",
                behance: "",
            },
        },
        education: {
            type: Array,
            default: [],
        },
        skill: {
            type: Array,
            default: [],
        },
        project: {
            type: Array,
            default: [],
        },
        experience: {
            type: Array,
            default: [],
        },
        interest: {
            type: Array,
            default: [],
        },
    },

    { timestamps: true }
);

userSchema.plugin(plm);

const user = mongoose.model("user", userSchema);

module.exports = user;