// var config = {
//   APP_ID: "application-0-dyflkgi",
//   API_KEY: "nPfkasaIRdOAxu2XSZ2MIDyCYSH1qB9JnHseAmGaxt7nmX2XjwEAgRcsxc0SIhJm",
//   cluster_name: "students",
//   db_name: "sample_mflix",
//   collection_name: "movies",
// };

// mongodb+srv://user:T46Rn!3*7CZwQie@students.sveio3l.mongodb.net/?retryWrites=true&w=majority&appName=students

// async function fetch_student_data() {
//     try {
//       // Fetch access token
//       console.log("Sending access token request...");
//       const access_token_response = await fetch(
//         `https://ap-south-1.aws.realm.mongodb.com/api/client/v2.0/app/${config.APP_ID}/auth/providers/api-key/login`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             key: config.API_KEY, //read-only key
//           }),
//         }
//       );
  
//       if (!access_token_response.ok) {
//         throw new Error(`Failed to fetch access token: ${access_token_response.statusText}`);
//       }
  
//       const access_token_data = await access_token_response.json();
//       const access_token = access_token_data.access_token;
  
//       console.log(`Access token: ${access_token}`);
//       if (!access_token) {
//         throw new Error("Access token undefined");
//       }
  
//       // Fetch student data
//       const student_data_response = await fetch(
//         `https://ap-south-1.aws.data.mongodb-api.com/app/${config.APP_ID}/endpoint/data/v1/action/find`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${access_token}`,
//           },
//           body: JSON.stringify({
//             dataSource: config.cluster_name,
//             database: config.db_name,
//             collection: config.collection_name,
//             filter: {},
//             limit: 30000,
//           }),
//         }
//       );
  
//       if (!student_data_response.ok) {
//         throw new Error(`Failed to fetch student data: ${student_data_response.statusText}`);
//       }
  
//       const student_data = await student_data_response.json();
  
//       if (!Array.isArray(student_data.documents)) {
//         throw new Error("Student data is not an array");
//       }
  
//       return student_data.documents;
//     } catch (error) {
//       console.error("Error fetching student data:", error);
//       throw error;
//     }
//   }
  
//   export { fetch_student_data };



  