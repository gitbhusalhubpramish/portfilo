import formidable from "formidable";

export const config = {
  api: {
    bodyParser: false, // disable Next.js default JSON parsing
  },
};

export async function POST(req) {
  const form = formidable({ multiples: true });

  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      console.log("Fields:", fields);
      console.log("Files:", files); // your uploaded files
      resolve(
        new Response(JSON.stringify({ success: true, fields, files }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        })
      );
    });
  });
}
