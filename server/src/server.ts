import { fastify } from "fastify";
import cors from "@fastify/cors";

import { getAllPromptsRoute } from "./routes/get-all-prompts";
import { uploadVideoRoute } from "./routes/upload-video";
import { createTranscriptionRoute } from "./routes/create-transcription";
import { generateAICompletionRoute } from "./routes/generate-ai-completion";

const app = fastify({
    bodyLimit: 25 * 1024 * 1024 // 25mb
});

app.register(cors, {
    origin: "*",
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
    preflight: true
});

app.register(getAllPromptsRoute);
app.register(uploadVideoRoute);
app.register(createTranscriptionRoute);
app.register(generateAICompletionRoute);

app.listen({
    host: "0.0.0.0",
    port: process.env.PORT ? +process.env.PORT : 3333
}).then(() => {
    console.log("HTTP Server Running!");
});