const imageApiUrl = import.meta.env.VITE_IMAGE_API_URL || "http://127.0.0.1:8000";
const faceApiKey = import.meta.env.VITE_FACE_API_KEY || "";
const speechApiKey = import.meta.env.VITE_SPEECH_API_KEY || "";
const faceApiEndpoint = import.meta.env.VITE_FACE_API_ENDPOINT || "";
const visionApiKey = import.meta.env.VITE_VISION_API_KEY || "";
const visionApiEndpoint = import.meta.env.VITE_VISION_API_ENDPOINT || "";

export {
  imageApiUrl,
  faceApiKey,
  faceApiEndpoint,
  speechApiKey,
  visionApiKey,
  visionApiEndpoint,
};
