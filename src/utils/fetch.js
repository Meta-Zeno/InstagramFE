export const signupUser = async (username, email, password) => {
  const response = await fetch("http://localhost:5001/users/signup", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });

  const data = await response.json();
  console.log("data in fetch sign up", data);
};

export const loginUser = async (username, password) => {
  console.log("Login user", username, password);
  const response = await fetch("http://localhost:5001/users/login", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });
  console.log("responce", response);
  const data = await response.json();
  console.log("stringdata", data);
  return data;
};

export const fetchRandomPhoto = async () => {
  try {
    const response = await fetch("https://api.unsplash.com/photos/", {
      headers: {
        Authorization: "Client-ID qQQGmmQbKDUunBP7z-KoctFBxxQqZnFnV06Ad7cqcxU",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching random photo:", error);
  }
};
