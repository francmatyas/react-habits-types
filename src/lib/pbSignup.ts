export default async function signup(this: any, data: {
  username: string;
  password: string;
}): Promise<void> {
  try {
    const data = {
      email: "",
      password: "",
    };

    const createUser = await this.pb.collection("users").create(data);
    await this.login(data);
  } catch (error) {
    console.log(error);
  }
}
