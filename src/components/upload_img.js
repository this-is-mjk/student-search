import { createClient } from "@supabase/supabase-js";

const data = [
    // {
    //   url: "https://firebasestorage.googleapis.com/v0/b/studentsearchiitk.appspot.com/o/images%2F240701?alt=media&token=4621fd5d-bd86-4c03-bdca-ad69cf1a8687",
    //   rollno: "240701"
    // }
  ];
  

  const  uploadImage= async()=>{
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
  const supabase = createClient(supabaseUrl, supabaseAnonKey);
    console.log("called")
    data.map(async (d)=>{
        await supabase.from("students").update({image: d.url}).eq('rollno', d.rollno)  
    })
  }

  export {uploadImage}