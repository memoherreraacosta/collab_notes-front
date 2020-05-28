const api_gateway =
  "https://fsxgo3yvyj.execute-api.us-east-1.amazonaws.com/collab-notes/collab-notes?";

export const connection_db = async (query, is_select) => {
  query = new Buffer(query).toString("base64");
  var url = is_select ? "select=" + query : "query=" + query;

  url = api_gateway + url;
  try {
    const data = await fetch(url);
    return await data.json();
  } catch (error) {
    console.log("Errorcito " + error);
  }
};