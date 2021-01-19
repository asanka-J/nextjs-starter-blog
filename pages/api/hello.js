export default function handler(req, res) {
  let data = { text: "Hello" };
  res.status(200).json(data);
}
