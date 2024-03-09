export const getUsers = async (
  page: number,
  name?: string,
  status?: string
) => {
  try {
    const params: string = `${name ? `&name=${name}` : ""} ${
      status ? `&active=${status}` : ""
    }`;
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}users/?page=${page}${params}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};
