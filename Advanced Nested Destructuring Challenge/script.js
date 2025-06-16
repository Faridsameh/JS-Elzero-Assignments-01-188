const devProfile = {
  devName: "Lara",
  techStack: [
    "JavaScript",
    ["React", "Vue"],
    ["Git", "Docker", ["Webpack", "Vite"]],
  ],
  location: {
    city: "Rome",
    // country is missing
  },
};

const {
  devName,
  techStack: [language, [, framework], [, , [firstTool]]],
  location: { city: devCity, country = "Unknown" },
} = devProfile;

// Expected output:
console.log(devName); // "Lara"
console.log(language); // "JavaScript"
console.log(framework); // "Vue"
console.log(firstTool); // "Webpack"
console.log(devCity); // "Rome"
console.log(country); // "Unknown"
