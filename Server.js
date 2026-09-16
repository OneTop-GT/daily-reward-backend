const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Daily Reward Backend Online"
    });
});

app.post("/player/join", (req, res) => {
    const { userId, username } = req.body;

    if (!userId) {
        return res.status(400).json({
            success: false,
            message: "userId is required"
        });
    }

    console.log("Player joined:");
    console.log("UserId:", userId);
    console.log("Username:", username);

    res.json({
        success: true,
        message: "Player registered",
        userId: userId
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
