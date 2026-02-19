// pages/api/contact.js
import formidable from "formidable";

export const config = {
  api: { bodyParser: false },
};

export default async function handler(req, res) {
  const form = formidable({ multiples: true });

  form.parse(req, (err, fields, files) => {
    if (err) return res.status(500).json({ error: err.message });
    console.log("Fields:", fields);
    console.log("Files:", files);
    res.status(200).json({ success: true, fields, files });
  });
}
