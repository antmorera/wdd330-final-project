import productList from "./productList.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

/* Video player */

// Get the video container element
const videoContainer = document.getElementById("video-container");

// Create an iframe element for the YouTube video
const video = document.createElement("iframe");
video.src = "/images/banner-video.mp4";
video.autoplay = true;
video.loop = true;
video.muted = true;

// Set the width and height of the iframe
video.style.width = "100%";
video.style.height = "100%";
video.style.objectFit = "cover";

// Append the iframe to the container
videoContainer.appendChild(video);

// Get the divider element
const divider = document.querySelector(".divider");

// Get the computed width of the divider element
const dividerWidth = window.getComputedStyle(divider).width;

// Set the width of the video element
video.style.width = dividerWidth;
