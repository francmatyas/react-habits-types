export default async function login(this: any, data: {
  username: string;
  password: string;
}): Promise<void> {
  //setLoading(true);
  try {
    const authData = await this.pb
      .collection("users")
      .authWithPassword(data.username, data.password);
  } catch (error) {
    alert(error);
  }
  //setLoading(false);
}
