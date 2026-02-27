export async function mockLogin(email: string, password: string) {
  await new Promise((res) => setTimeout(res, 800));

  if (password !== "password") {
    throw new Error("Invalid credentials");
  }

  return {
    access: "mock-access-token",
    user: {
      id: "1",
      email,
    },
  };
}

export async function mockRegister(email: string, password: string) {
  await new Promise((res) => setTimeout(res, 800));

  return {
    access: "mock-access-token",
    user: {
      id: "2",
      email,
    },
  };
}
