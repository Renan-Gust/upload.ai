import { fastify } from "fastify";
import fastifyCors from "@fastify/cors";

import { getAllPromptsRoute } from "./routes/get-all-prompts";
import { uploadVideoRoute } from "./routes/upload-video";
import { createTranscriptionRoute } from "./routes/create-transcription";
import { generateAICompletionRoute } from "./routes/generate-ai-completion";

const app = fastify({
    bodyLimit: 25 * 1024 * 1024 // 25mb
});

app.register(fastifyCors, {
    origin: "*",
    preflight: true
});

app.register(getAllPromptsRoute);
app.register(uploadVideoRoute);
app.register(createTranscriptionRoute);
app.register(generateAICompletionRoute);

app.listen({
    port: 3333
}).then(() => {
    console.log("HTTP Server Running!");
});